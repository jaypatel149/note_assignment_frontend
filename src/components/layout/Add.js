import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: "",
    description: "",
    date: "",
  });
  const handleChangeInput = (e)=>{
    setNote((pre) => ({...pre, [e.target.name]: e.target.value}));
  };

  const handleSubmitForm = async() => {
    try{
        await axios.post("http://localhost:5050/notes", note);
        navigate('/')
    }catch(err){
        console.log(err);
    }
  };


  return (
    <div className="container-sm" style={{marginTop:'5rem'}}>
      <div className="card bg-dark text-white p-4 vstack  col-md-6 mx-auto">
        <form className="row g-3">
          <div>
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="title"
              name="title"
              className="form-control"
              placeholder="Title here..."
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label htmlFor="decription" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              rows="2"
              className="form-control"
              placeholder="Text Here... "
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="text"
              name="date"
              className="form-control"
              placeholder="DD/MM/YYYY"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => navigate("/")}
            >
              Go to back
            </button>
            <button
              type="button"
              className="btn btn-primary ms-5"
              onClick={handleSubmitForm}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
