import React, { useState } from "react";
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";
const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            return;

        }
        if (+enteredUserAge < 0) {
            return;

        }
        props.onAddUser(enteredUserName, enteredUserAge);

        setEnteredUserAge('');
        setEnteredUserName('');
    };
    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);

    }
    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);

    }


    return (
        <Wrapper>
            <ErrorModal title="Error Occurred" message="Something went wrong" />

            <Card className={classes.input}    >
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" onChange={userNameChangeHandler} value={enteredUserName} />
                    <label htmlFor="age">Age (years)</label>
                    <input type="number" id="age" onChange={userAgeChangeHandler} value={enteredUserAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};
export default AddUser