import { TaskItem } from '../TaskItem';

import styles from './styles.module.css';

import clipboardImg from '../../assets/clipboard.svg';

interface TodosListProps {
  tasks: {
    id: number;
    content: string;
    isCompleted: boolean;
  }[];
  onRequestDeletedTask: (id: number) => void;
  onRequestSwitchCompletedTask: (id: number, isCompleted: boolean) => void;
}

export function TodosList(
    { tasks, onRequestDeletedTask, onRequestSwitchCompletedTask }: TodosListProps
  ) {

  const isTasksEmpty = tasks.length === 0;
  const tasksLength = tasks.length;
  const tasksCompleted = tasks.filter(task => task.isCompleted).length;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          Tarefas criadas
          <span className={styles.badge}>{tasksLength}</span>
        </div>

        <div className={styles.tasksCompleted}>
          Concluídas
          <span className={styles.badge}>
            {tasksCompleted} de {tasksLength}</span>
        </div>
      </header>

      { isTasksEmpty ? (
        <div className={styles.tasksEmpty}>
          <img
            src={clipboardImg}
            alt="Sem tarefas"
          />

          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      ) : (
        <ul className={styles.taskList}>
          { tasks.map(task => (
            <TaskItem
              key={task.id}
              id={task.id}
              content={task.content}
              isCompleted={task.isCompleted}
              onRequestDeletedTask={onRequestDeletedTask}
              onRequestSwitchCompletedTask={onRequestSwitchCompletedTask}
            />
          )) }
        </ul>
      ) }
    </div>
  )
}