import React from 'react';
import styles from './Form.module.css';
import { ref, push } from 'firebase/database';
import { database } from '../firebase';
const Form = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Salve os dados no Firebase
    const newPostRef = push(ref(database, 'posts'), formData);
    console.log('Dados enviados com sucesso:', newPostRef.key);
  };

  return (
    <form className={styles.rightContent} onSubmit={handleSubmit}>
      <h1>here another title</h1>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="button mainButton">
        Send
      </button>
    </form>
  );
};

export default Form;
