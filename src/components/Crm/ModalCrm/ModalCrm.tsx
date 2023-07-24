import { useFieldArray, useForm } from 'react-hook-form';

import { IFormValues } from '../../../types/CrmTypes';
import { useEffect } from 'react';
import { useTypeDispatch, useTypeSelector } from '../../../hooks/redux';
import { Loader } from '../Crm.style';
import { addNewContactSvg, closeModalSvg, removeContactSvg } from './ModalCrmSvg';
import { modalSlice } from '../../../store/reducers/ModalSlice';

import './modal.style.scss';
import { clientSlice } from '../../../store/reducers/ClientsSlice';

export const ModalCrm = () => {
  const { client, isOpenModal } = useTypeSelector((state) => state.modalReducer);
  const { closeAllModal } = modalSlice.actions;
  const { addNewClient, changeClient } = clientSlice.actions;
  const dispatch = useTypeDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
  } = useForm<IFormValues>({
    defaultValues: {
      name: '',
      surname: '',
      lastName: '',
      contacts: [{ type: 'Телефон', value: '' }],
    },
  });
  const { fields, append, remove, replace } = useFieldArray({
    name: 'contacts',
    control,
  });

  // Функция вызвана исключительно для перерисовки
  watch();

  const onSubmit = (data: IFormValues) => {
    const newData = {
      id: client?.id ?? '',
      ...data,
    };
    if (client !== null) {
      dispatch(changeClient(newData));
    } else {
      dispatch(addNewClient(newData));
    }

    dispatch(closeAllModal());
  };

  const handleOnCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeAllModal());
    }
  };

  useEffect(() => {
    if (client !== null) {
      setValue('name', client.name);
      setValue('surname', client.surname);
      setValue('lastName', client.lastName);
      replace([...client.contacts]);
    }
  }, []);

  return (
    <div className="modal-container opened" onClick={(e) => handleOnCloseModal(e)}>
      <div className="modal">
        <button className="modal__close" onClick={(e) => dispatch(closeAllModal())}>
          {closeModalSvg}
        </button>
        <div className="modal__title-container">
          <h2 className="modal__title">{client !== null ? 'Изменить данные' : 'Добавить клиента'}</h2>
          {client !== null && <span>{`id: ${client.id}`}</span>}
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="form__fio">
            <div className="form__fio-container">
              <label>
                Имя
                <span>*</span>
              </label>
              <input
                className={errors.name ? 'form__fio-alert' : ''}
                placeholder="Имя"
                {...register('name', {
                  required: 'Обязательное поле для заполнения',
                  pattern: {
                    value: /^[А-Яа-я]/gi,
                    message: 'В этом поле могут быть только русские буквы',
                  },
                  onBlur: (e) => {
                    const value: string = e.target.value;
                    e.target.value = (
                      value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase()
                    ).trim();
                  },
                })}
              />
              {errors.name && <p className="modal__error">{errors.name.message}</p>}
            </div>
            <div className="form__fio-container">
              <label>
                Фамилия
                <span>*</span>
              </label>
              <input
                className={errors.surname ? 'form__fio-alert' : ''}
                placeholder="Фамилия"
                {...register('surname', {
                  required: 'Обязательное поле для заполнения',
                  pattern: {
                    value: /^[А-Яа-я]/gi,
                    message: 'В этом поле могут быть только русские буквы',
                  },
                  onBlur: (e) => {
                    const value: string = e.target.value;
                    e.target.value = (
                      value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase()
                    ).trim();
                  },
                })}
              />
              {errors.surname && <p className="modal__error">{errors.surname.message}</p>}
            </div>
            <div className="form__fio-container">
              <label>Отчество</label>
              <input
                placeholder="Отчество"
                {...register('lastName', {
                  required: false,
                  pattern: {
                    value: /^[А-Яа-я]/gi,
                    message: 'В этом поле могут быть только русские буквы',
                  },
                  onBlur: (e) => {
                    const value: string = e.target.value;
                    e.target.value = (
                      value.slice(0, 1).toUpperCase() + value.slice(1, value.length).toLowerCase()
                    ).trim();
                  },
                })}
              />
              {errors.lastName && <p className="modal__error">{errors.lastName.message}</p>}
            </div>
          </fieldset>
          <fieldset className="form__contacts">
            <div className="form__contacts-container">
              {fields.map((field, index) => {
                return (
                  <label
                    className={errors?.contacts?.length === index + 1 ? 'form__contacts-alert' : ''}
                    key={field.id}
                  >
                    {field.type === 'Телефон' ||
                    field.type === 'Vk' ||
                    field.type === 'Email' ||
                    field.type === 'Facebook' ? (
                      <select
                        {...register(`contacts.${index}.type`, {
                          onChange: (e) => {
                            field.type = e.target.value;
                            field.value = '';
                          },
                        })}
                      >
                        <option>Телефон</option>
                        <option>Vk</option>
                        <option>Email</option>
                        <option>Facebook</option>
                        <option value={''}>Доп. связь</option>
                      </select>
                    ) : (
                      <input
                        className="form__contacts-type"
                        {...register(`contacts.${index}.type`, {
                          required: true,
                        })}
                        placeholder='"Telegram" и т.д.'
                      />
                    )}
                    <input
                      type={field.type === 'Телефон' ? 'tel' : 'text'}
                      value={field.value}
                      {...register(`contacts.${index}.value`, {
                        required: true,
                        validate: {
                          phone: (value) => {
                            if (field.type === 'Телефон') {
                              return (
                                (value.length === 12 && value.match(/^\+7([0-9]){10}/) !== null) ||
                                'Номер должен начинаться с +7 и использованы должны быть только цифры'
                              );
                            }
                          },
                        },
                        onChange: (e) => {
                          field.value = e.target.value;
                        },
                      })}
                      placeholder={
                        field.type === 'Телефон'
                          ? '+79990003322'
                          : field.type === 'Email'
                          ? 'Введите почту'
                          : 'Введите ссылку или логин'
                      }
                    />
                    {fields.length > 1 && (
                      <button
                        className="form__contacts-remove"
                        type="button"
                        onClick={() => {
                          remove(index);
                        }}
                      >
                        {removeContactSvg}
                      </button>
                    )}
                  </label>
                );
              })}
            </div>

            {fields.length < 10 && (
              <button
                className="form__contacts-add"
                type="button"
                onClick={() => {
                  append({
                    type: 'Телефон',
                    value: '',
                  });
                }}
              >
                {addNewContactSvg}
                Добавить контакт
              </button>
            )}
          </fieldset>
          <button className="form__submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
};
