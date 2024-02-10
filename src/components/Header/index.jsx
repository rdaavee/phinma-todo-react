import { useState } from 'react';
import logo from '../../assets/logo.svg';
import styles from './header.module.css';
import { CiCirclePlus } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
export function Header({ onAddTask }) {

    const [title, setTitle] = useState('');

    function handleSubmit() {
        event.preventDefault();
        onAddTask(title)
        setTitle(''); // return "Add a new task placeholder in input"
    }

    function onChangeTitle(event) {
        setTitle(event.target.value); //every text we type on input it will save here
    }

    return (
        <header className={styles.header}>
            <img src={logo}/>
            <p>PHINMA ToDo</p>

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input type="text" placeholder="Add a new task" value={title} onChange={onChangeTitle} />
                <button>
                    Add
                    <CiCirclePlus size={17} />
                </button>
            </form>
        </header>
    )
}