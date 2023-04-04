import React, { useContext, useState } from "react";
import "../public/Styles/Form.css";
import {userContext} from "../src/App"

const Form = () => {

  const {user,setUser} = useContext(userContext);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="FormParent">
        <div className="divLeft">
          <div className="valueDiv">
            Name :
            <input type="text" name="name" onChange={handleForm} value={user.name} />
          </div>
          <div className="valueDiv">
            Email :
            <input type="text" name="email" onChange={handleForm} value={user.email}/>
          </div>
          <div className="valueDiv">
            Add :
            <input type="text" name="add" onChange={handleForm} value={user.add}/>
          </div>
          <div className="valueDiv">
            Hobby :
            <input type="text" name="hobby" onChange={handleForm} value={user.hobby}/>
          </div>
        </div>

        <div className="divRight">
          <div  className="valuePrev" >
            <label>name :</label>
            <label>{user.name}</label>
          </div>
          <div  className="valuePrev" >
            <label>email :</label>
            <label>{user.email}</label>
          </div>
          <div  className="valuePrev" >
            <label>add :</label>
            <label>{user.add}</label>
          </div>
          <div  className="valuePrev" >
            <label>hobby :</label>
            <label>{user.hobby}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
