import { useState } from 'react';
import { IFunContact } from '../../../types/CrmTypes';
import { phoneSvg, mailSvg, facebookSvg, vkSvg, otherContactSvg } from './TableCrmSvg';

export const TdCrmContacts = ({ contacts }: IFunContact) => {
  const [isActiveContact, setIsActiveContact] = useState<boolean>(false);
  const [timerActiveContact, setTimerActiveContact] = useState<NodeJS.Timeout | null>(null);
  const [idActivePopUpContacts, setIdActivePopUpContacts] = useState<number>(0);
  const [timerPopUp, setTimerPopUp] = useState<NodeJS.Timeout | null>(null);

  const contactElements = (): JSX.Element[] => {
    let contactsElement: JSX.Element[] = [];

    for (let i = 0; i < contacts.length; i++) {
      const contact = contacts[i];
      const idPopUp = i + 1;
      const popUp = (
        <div
          className={idPopUp === idActivePopUpContacts ? 'popup popup-opened' : 'popup'}
          onMouseEnter={(e) => handleEnterPopUp()}
          onMouseLeave={(e) => handleLeavePopUp()}
        >
          <p className="popup__text">{`${contact.type}:  `}</p>
          <a className="popup__link" href={`https://yandex.ru/search/?text=${contact.value}`}>
            {contact.value}
          </a>
        </div>
      );

      const popUpPhone = (
        <div
          className={idPopUp === idActivePopUpContacts ? 'popup popup-opened' : 'popup'}
          onMouseEnter={(e) => handleEnterPopUp()}
          onMouseLeave={(e) => handleLeavePopUp()}
        >
          <p className="popup__text">{contact.value}</p>
        </div>
      );

      if (i === 4 && contacts.length > 4 && !isActiveContact) {
        contactsElement.push(
          <div
            className="table__contacts-container"
            key={`${i}contact`}
            onMouseEnter={(e) => handleEnterContact(idPopUp)}
            onMouseLeave={(e) => handleLeaveContact()}
          >
            <button onClick={(e) => handleClickOpenAllContacts()}>{`+${contacts.length - 4}`}</button>
          </div>
        );
        break;
      }

      switch (contact.type) {
        case 'Телефон':
          contactsElement.push(
            <div
              className="table__contacts-container"
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUpPhone}
              {phoneSvg}
            </div>
          );
          break;
        case 'Email':
          contactsElement.push(
            <div
              className="table__contacts-container"
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUp}
              {mailSvg}
            </div>
          );
          break;
        case 'Facebook':
          contactsElement.push(
            <div
              className="table__contacts-container"
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUp}
              {facebookSvg}
            </div>
          );
          break;
        case 'VK':
          contactsElement.push(
            <div
              className="table__contacts-container"
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUp}
              {vkSvg}
            </div>
          );
          break;
        default:
          contactsElement.push(
            <div
              className="table__contacts-container"
              key={`${i}contact`}
              onMouseEnter={(e) => handleEnterContact(idPopUp)}
              onMouseLeave={(e) => handleLeaveContact()}
            >
              {popUp}
              {otherContactSvg}
            </div>
          );
          break;
      }
    }
    return contactsElement;
  };

  const handleClickOpenAllContacts = (): void => {
    setIsActiveContact(true);
  };

  const handleEnterContact = (idPopUp: number): void => {
    if (timerActiveContact !== null) {
      clearTimeout(timerActiveContact);
      setTimerActiveContact(null);
    }
    if (timerPopUp !== null) {
      clearTimeout(timerPopUp);
      setTimerPopUp(null);
    }
    setIdActivePopUpContacts(idPopUp);
  };

  const handleLeaveContact = (): void => {
    setTimerPopUp(
      setTimeout(() => {
        setIdActivePopUpContacts(0);
      }, 1000)
    );
  };

  const handleEnterPopUp = (): void => {
    if (timerPopUp !== null) {
      clearTimeout(timerPopUp);
      setTimerPopUp(null);
    }
  };

  const handleLeavePopUp = (): void => {
    setIdActivePopUpContacts(0);
  };

  const handleEnterTdContacts = (): void => {
    if (timerActiveContact !== null) {
      clearTimeout(timerActiveContact);
      setTimerActiveContact(null);
    }
  };

  const handleLeaveTdContacts = (): void => {
    setTimerActiveContact(
      setTimeout(() => {
        setIsActiveContact(false);
      }, 1000)
    );
  };

  return (
    <li
      className="table__contacts"
      onMouseEnter={(e) => handleEnterTdContacts()}
      onMouseLeave={(e) => handleLeaveTdContacts()}
    >
      {contactElements()}
    </li>
  );
};
