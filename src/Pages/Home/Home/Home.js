import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import todo from '../../../img/todo.jpg';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container container">
      <img className=" img-fluid d-block mx-auto w-50" src={todo} alt="" />
      <div className=" d-flex justify-content-center align-items-center mt-5">
        <Button onClick={() => navigate('/myTodos')}>
          Go to your Todo List
        </Button>
      </div>
    </div>
  );
};

export default Home;
