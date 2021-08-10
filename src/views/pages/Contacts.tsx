import React, { useState } from "react";
import Contact from "../components/Contact";
import { IContact } from "../components/contact.type";

const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [contactList, setContactList] = useState<IContact[]>([]);

  const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setContactList([...contactList, contact]);
    setContact({ name: "", email: "" } as IContact);
  };

  const handleRemove = (email: string) => {
    const newContactList = contactList.filter((c) => c.email !== email);
    setContactList(newContactList);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={contact.name}
          onChange={handleContact}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={contact.email}
          onChange={handleContact}
        />
        <input type="submit" onClick={() => handleSubmit()} />
      </div>
      {contactList.map((item) => (
        <Contact
          name={item.name}
          email={item.email}
          handleRemove={handleRemove}
        ></Contact>
      ))}
    </div>
  );
};

export default Contacts;
