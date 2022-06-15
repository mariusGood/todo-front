import React from 'react';
import { deleteData, updateData } from '../../utils/services';
import Task from '../Task/Task';
import * as S from './TaskList.style';

const TaskList = ({ data, reload }) => {
  const remove = async (id) => {
    await deleteData(id);
    reload();
  };

  const update = async (id, title) => {
    const data = prompt('', title);
    const obj = {
      title: data,
    };
    await updateData(id, obj);
    reload();
  };

  return (
    <S.TaskList>
      {data &&
        data.map((todo) => (
          <Task key={todo.id}>
            {todo.title}
            <div>
              <i
                onClick={() => update(todo.id, todo.title)}
                className='fa-solid fa-pencil'
              ></i>
              <i
                onClick={() => remove(todo.id)}
                className='fa-solid fa-trash-can'
              ></i>
            </div>
          </Task>
        ))}
    </S.TaskList>
  );
};

export default TaskList;
