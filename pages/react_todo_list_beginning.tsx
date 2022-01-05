// https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning

// import { useDeno } from 'aleph/react'
import Todo from "~/components/react_todo_list_beginning/todo.tsx";
import Form from "~/components/react_todo_list_beginning/Form.tsx";
import FilterButton from "~/components/react_todo_list_beginning/FilterButton.tsx";
import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

interface TaskInfo {
  id: string;
  name: string;
  completed?: boolean;
}

interface TaskFilterInfo {
  All: () => true,
  Active: (task: TaskInfo) => boolean,
  Completed: (task: TaskInfo) => boolean,
}

export default function App(
  { pageProps }: { pageProps: Record<string, unknown> },
) {
  function usePrevious(value: number) {
    const ref = useRef<number>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current ?? 0;
  }

  const listHeadingRef = useRef<HTMLHeadingElement>(null!);

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id: string, newName: string) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const DATA: TaskInfo[] = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat" },
  ];

  const [tasks, setTasks] = useState(DATA);

  const FILTER_MAP:TaskFilterInfo = {
    All: () => true,
    Active: (task: TaskInfo) => !task.completed,
    Completed: (task: TaskInfo) => task.completed ?? false,
  };

  const [filter, setFilter] = useState<keyof TaskFilterInfo>("All" as keyof TaskFilterInfo);

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large">
      <head>
        <title>TodoMatic</title>
        <link rel="stylesheet" href="../style/react_todo_list_beginning.css" />
      </head>
      <h1>TodoMatic</h1>
      <Form
        addTask={(name: string) => {
          const newTask = { id: "todo-" + nanoid(), name: name };
          setTasks([...tasks, newTask]);
        }}
      />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading" tabIndex={-1} ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
