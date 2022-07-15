import { useState } from "react";
import { NewTaskForm } from "../NewTaskForm";
import { TodosList } from "../TodosList";

import styles from './styles.module.css';

interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(content: string) {
    setTasks(state => [
      ...state,
      {
        id: (new Date()).getTime(),
        content,
        isCompleted: false
      }
    ])
  }

  function handleDeletedTask(id: number) {
    setTasks(state => state.filter(task => task.id !== id));
  }

  function handleSwitchCompletedTask(id: number, isCompleted: boolean) {
    setTasks(tasks.map(task => {
      if (task.id === id) task.isCompleted = isCompleted;
      return task
    }));
  }

  return (
    <main className={styles.container}>
      <NewTaskForm
        onRequestCreateNewTask={handleCreateNewTask}
      />
      <TodosList
        tasks={tasks}
        onRequestDeletedTask={handleDeletedTask}
        onRequestSwitchCompletedTask={handleSwitchCompletedTask}
      />
    </main>
  )
}