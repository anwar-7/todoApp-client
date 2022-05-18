import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AddTodos from '../AddTodos/AddTodos';

const MyTodos = () => {
  const [strike, setStrike] = useState(false);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://warm-lowlands-70908.herokuapp.com/todo`
      );
      // console.log(data);
      // all products
      setTodo(data);
    })();
  }, []);

  // Delete Button
  const handelUserTodoDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      console.log('Deleting Todo', id);
      const url = `https://warm-lowlands-70908.herokuapp.com/todo/${id}`;
      fetch(url, {
        method: 'DELETE',
      }).then((res) =>
        res.json().then((data) => {
          // console.log(data)
          if (data.deletedCount > 0) {
            alert('Data Deleted');
            const remaining = todo.filter((t) => t._id !== id);
            setTodo(remaining);
          }
        })
      );
    }
  };

  const changeStyle = (index) => {
    // console.log('Task Complete');
    const updatedItems = todo.filter((elem) => {
      if (index == elem._id) {
        elem.strike = true;
        toast.success('Task Complete');
      }
      return elem;
    });

    setTodo(updatedItems);
  };

  return (
    <div className="manage-inventory-container container">
      <>
        <div className="">
          <div className="">
            <AddTodos></AddTodos>
            <h4 className="text-center mt-3 fw-bold">
              Your Todos : ({todo.length})
            </h4>
            <Table striped bordered hover size="sm" className="bordercell">
              <thead className="bordercell">
                <tr>
                  <th>Todo</th>
                  <th>Description</th>
                  <th>Control</th>
                </tr>
              </thead>
              {todo.map((t) => (
                <tbody className="bordercell" key={t._id}>
                  <tr>
                    <td
                      style={{
                        textDecoration: t.strike ? 'line-through' : 'none',
                      }}
                    >
                      {t.name}
                    </td>
                    <td
                      style={{
                        textDecoration: t.strike ? 'line-through' : 'none',
                      }}
                    >
                      {t.description.slice(0, 45)}
                    </td>
                    <td>
                      <Button
                        className="btn btn-info fw-light me-2"
                        onClick={() => changeStyle(t._id)}
                      >
                        Change
                      </Button>
                      <Button
                        className="btn btn-danger fw-light"
                        onClick={() => handelUserTodoDelete(t._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyTodos;
