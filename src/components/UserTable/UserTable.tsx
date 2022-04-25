import React, { PropsWithChildren, useState } from 'react'
import { User } from '../../interfaces'
import styles from './HobbiesTable.module.scss'

export function Usertable({
    addUser,
    users,
}: PropsWithChildren<{
    addUser: Function
    users: User[]
}>) {
    const [newUser, setNewUser] = useState('')

    const handleSetAddUser = () => {
        addUser(newUser)
        setNewUser('')
    }

    if (!users || !users.length) {
        return null
    }

    return (
        <div className={styles.hobbiesTable}>
            <div className={styles.tableRow}>
                <input
                    className={styles.input}
                    aria-label="Enter user name"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                />
                <button onClick={handleSetAddUser}>Add</button>
            </div>
            <div>
                {users.map((user) => (
                    <div>{user.name}</div>
                ))}
            </div>
        </div>
    )
}
