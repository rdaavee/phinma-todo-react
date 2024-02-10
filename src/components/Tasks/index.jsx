/* eslint-disable react/prop-types */
import styles from './tasks.module.css'
import { Task } from '../Task';


export function Tasks({ tasks, onComplete, onDelete }) {

    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>

                <div>
                    <p>Create Tasks</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textYellow}>Completed Tasks</p>
                    <span>{completedTasks} of {tasksQuantity}</span>
                </div>

            </header>

            <div className={styles.list}>
                {tasks.map(task => (
                    <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
                ))}
            </div>
        </section>
    )
}