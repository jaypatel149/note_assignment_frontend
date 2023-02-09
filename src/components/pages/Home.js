import React from "react";
import Note from "../layout/Note";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="py-5 ">
      <div className="text-center py-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => navigate("/add")}
        >
         &#10010; &nbsp;Add
        </button>
      </div>
      <Note />
    </div>
  );
};

export default Home;
