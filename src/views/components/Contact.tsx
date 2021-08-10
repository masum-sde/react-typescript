import React from "react";
import { IContact } from "./contact.type";

const Contact = ({ name, email = "N/A",handleRemove }: IContact) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Email:{email}</p>
      <button onClick={()=>handleRemove(email)}>Remove</button>
    </div>
  );
};

export default Contact;
