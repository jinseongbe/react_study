import React, { useState, useRef } from 'react'

import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');

  const [error, setError] = useState();
  
  const addUserHandler = (event) => {
    event.preventDefault();
    
    const enteredUsernameRef = nameInputRef.current.value;
    const enteredAgeRef = ageInputRef.current.value;

    if (enteredUsernameRef.trim().length === 0 || enteredAgeRef.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }

    if (+enteredAgeRef < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (age must > 0).'
      });
      return;
    }

    props.onAddUser(enteredUsernameRef, enteredAgeRef);
    // props.onAddUser(enteredUsername, enteredAge);
    // setEnteredUsername(''); // ref를 사용하기 때문에 재설정 해 줄 필요가 없음
    // setEnteredAge('');

    nameInputRef.current.value="";
    ageInputRef.current.value="";
  }

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // }

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input 
            id="username" 
            type="text" 
            // onChange={usernameChangeHandler} 
            // value={enteredUsername}
            ref={nameInputRef} 
          />
          <label htmlFor="age">Age (Years)</label>
          <input 
            id="age" 
            type="number" 
            // onChange={ageChangeHandler} 
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;