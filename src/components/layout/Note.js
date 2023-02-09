import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Note.css";

const Note = () => {
  const [notebook, setNotebook] = useState([]);
  const getAllNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5050/notes");
      setNotebook(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  // delete note -----

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5050/notes/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-flued d-flex justify-content-between px-4">
      <div className="wrapper">
        <div className="grid-container">
          {notebook.map((item) => {
            return (
              <div key={item.id} className="grid-item">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-date p-0 mb-0">{item.date}</p>
                    <button
                      className="btn btn-outline-danger d-flex ms-auto"
                      onClick={() => handleDelete(item.id)}
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Note;
