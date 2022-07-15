import styles from './styles.module.css';

import checkImg from '../../assets/check.svg';
import { Trash } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';

interface TaskItem {
  id: number;
  content: string;
  isCompleted: boolean;
  onRequestDeletedTask: (id: number) => void;
  onRequestSwitchCompletedTask: (id: number, isCompleted: boolean) => void;
}

export function TaskItem(
    { id, content, isCompleted, onRequestDeletedTask, onRequestSwitchCompletedTask }: TaskItem
  ) {
  const [completedCheck, setCompletedCheck] = useState(isCompleted);

  function handleChangeCompletedTask(event: ChangeEvent<HTMLInputElement>) {
    setCompletedCheck(event.target.checked);
    onRequestSwitchCompletedTask(id, event.target.checked);
  }

  function handleDeletedTask() {
    onRequestDeletedTask(id);
  }

  return (
    <li className={`${styles.taskItem} ${isCompleted ? styles.completed : ''}`}>
      <input
        id={`completed-check-${id}`}
        type="checkbox"
        checked={completedCheck}
        onChange={handleChangeCompletedTask}
      />
      <label
        className={styles.taskCompletedButton}
        htmlFor={`completed-check-${id}`}
      >
        <img
          src={checkImg}
          alt="Check Icon"
        />
      </label>

      <p className={styles.taskContent}>{content}</p>

      <button
        type="button"
        className={styles.taskDeletedButton}
        onClick={handleDeletedTask}
      >
        <Trash size={18} />
      </button>
    </li>
  )
}