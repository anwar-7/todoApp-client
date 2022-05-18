import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddTodos = () => {
  const handlePlaceTodo = (event) => {
    event.preventDefault();
    const info = {
      name: event.target.name.value,
      description: event.target.description.value,
    };
    console.log(info);
    axios
      .post('https://warm-lowlands-70908.herokuapp.com/todo', info)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast.success('your Todo is update, please reload');
          event.target.reset();
          // alert('your product is update');
          window.location.reload(false);
        }
      });
  };

  return (
    <div className=" mb-5">
      <div className="w-75 mx-auto mt-2 bg-light ps-5 pe-5 pb-5 rounded-2">
        <h2 className="text-center fw-bold pt-3">Add Your Todo</h2>
        <form onSubmit={handlePlaceTodo}>
          <input
            className="w-100 mb-2"
            type="text"
            name="name"
            placeholder="Task Name"
            required
          />
          <br />
          <textarea
            className="w-100 mb-2"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            cols="50"
            required
          />
          <br />

          <div className="d-flex justify-content-center align-items-center">
            <input
              className="btn btn-primary bg-primary bg-opacity-100 bg-gradient border-0"
              type="submit"
              value="Add Task"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodos;
