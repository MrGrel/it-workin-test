import { IFunCreatedAndUpdatedTime } from '../../../types/CrmTypes';

export const TdCrmCreatedAndUpdatedTime = ({ created, updated }: IFunCreatedAndUpdatedTime) => {
  const selectionData = (dateString: string): string => {
    const date = new Date(dateString);

    const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
    const month = (date.getMonth() + 1).toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const selectionTime = (dateString: string): string => {
    const date = new Date(dateString);

    const hour = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();

    return `${hour}:${minutes}`;
  };

  return (
    <>
      <li className="table__time">
        <p className="table__time-data">{selectionData(created)}</p>
        <p className="table__time-time">{selectionTime(created)}</p>
      </li>
      <li className="table__time">
        <p className="table__time-data">{selectionData(updated)}</p>
        <p className="table__time-time">{selectionTime(updated)}</p>
      </li>
    </>
  );
};
