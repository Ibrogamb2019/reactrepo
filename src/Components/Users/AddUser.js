import React, { useState, useRef } from "react";
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";
const AddUser = props => {


    const [errorState, setError] = useState();
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {

            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age'
            });
            return;

        }
        if (+enteredUserAge < 0) {
            setError({
                title: 'Invalid input',
                message: 'Age cannot be less than 0'
            });
            return;

        }
        props.onAddUser(enteredUserName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    };

    const errorHandler = () => {
        setError(null);
    }


    return (
        <Wrapper>
            {errorState && <ErrorModal title={errorState.title} message={errorState.message} onConfirm={errorHandler} />}

            <Card className={classes.input}    >
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" ref={nameInputRef} />
                    <label htmlFor="age">Age (years)</label>
                    <input type="number" id="age" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};
export default AddUser