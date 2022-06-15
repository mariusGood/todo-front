import { useEffect, useState } from 'react';
import '../src/App.css';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import Pagination from './components/Pagination/Pagination';
import TaskList from './components/TaskList/TaskList';
import Title from './components/Title/Title';
import { getData } from './utils/services';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [taskPerPage] = useState(5);

  async function renderData() {
    const resp = await getData();
    setData(resp);
  }

  useEffect(() => {
    renderData();
  }, []);

  const lastTask = page * taskPerPage;
  const firstTask = lastTask - taskPerPage;
  const currentPost = data.slice(firstTask, lastTask);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className='App'>
      <Container>
        <div>Pending tasks:{data.length}</div>
        <Title>Todo list</Title>
        <Input reload={renderData} />
        <TaskList reload={renderData} data={currentPost} page={page} />
        <Pagination
          taskPerPage={taskPerPage}
          totalTasks={data.length}
          paginate={paginate}
        />
      </Container>
    </div>
  );
}

export default App;
