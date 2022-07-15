import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './styles.module.css';

interface NewTaskFormProps {
  onRequestCreateNewTask: (content: string) => void;
}

export function NewTaskForm({ onRequestCreateNewTask }: NewTaskFormProps) {
  const [task, setTask] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onRequestCreateNewTask(task);
    setTask('');
  }

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.newTodoInput}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={handleChangeTask}
      />

      <button
        className={styles.submitButton}
        type="submit"
      >
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}