import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './MyTodos.css';
const MyTodos = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:5000/todo`);
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
      const url = `http://localhost:5000/todo/${id}`;
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

  const [style, setStyle] = useState({
    backgroundColor: '',
  });

  const changeStyle = (id) => {
    console.log('you just clicked', style);

    setStyle({
      backgroundColor: 'brown',
      id,
    });
  };

  return (
    <div className="manage-inventory-container container">
      <>
        <div className="">
          <div className="">
            <h4 className="text-center mt-3 fw-bold">
              Your Todos : ({todo.length})
            </h4>
            <Table striped bordered hover size="sm" className="bordercell">
              <thead className="bordercell">
                <tr>
                  <th>ID</th>
                  <th>Todo</th>
                  <th>Description</th>
                  <th>Control</th>
                </tr>
              </thead>
              {todo.map((t) => (
                <tbody className="bordercell" key={t._id}>
                  <tr>
                    <td
                      className={
                        style.id
                          ? 'style.backgroundColor'
                          : 'style.backgroundColor'
                      }
                    >
                      {t._id.slice(18, 30)}
                    </td>
                    <td style={{ backgroundColor: style.bgColor }}>{t.name}</td>
                    <td style={{ backgroundColor: style.bgColor }}>
                      {t.description.slice(0, 30)}
                    </td>
                    <td>
                      <Button
                        className="btn btn-info fw-light me-2"
                        onClick={(e) => changeStyle(t._id)}
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
