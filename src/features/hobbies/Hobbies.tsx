import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Hobbiestable } from '../../components/HobbiesTable/HobbiesTable'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
    fetchUsers,
    selectHobbies,
    selectUsers,
    fetchHobbies,
    addNewUser,
    addHobbyThunk,
    deleteHobbyThunk,
} from './hobbiesSlice'
import styles from './Hobbies.module.scss'
import { Usertable } from '../../components/UserTable/UserTable'
import { Hobby } from '../../interfaces'

export function Hobbies({
    title,
}: PropsWithChildren<{
    title: string
}>) {
    const users = useAppSelector(selectUsers)
    const hobbyState = useAppSelector(selectHobbies)
    const dispatch = useAppDispatch()
    const [selectedUser, setSelectedUser] = useState('')

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const handleSelect = (userID: string) => {
        dispatch(fetchHobbies(userID))
        setSelectedUser(userID)
    }

    const handleAddHobby = (hobby: Hobby) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(`Would you like to add hobby: ${hobby.hobby}?`)) {
            dispatch(
                addHobbyThunk({
                    userID: selectedUser,
                    hobby,
                })
            )
        }
    }

    const handleDeleteHobby = (hobbyID: string) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete this hobby?')) {
            dispatch(
                deleteHobbyThunk({
                    userID: selectedUser,
                    hobbyID,
                })
            )
        }
    }

    return (
        <div className={styles.hobbiesTable}>
            <header className={styles.header}>
                <h1>{title}</h1>
            </header>
            <div className={styles.elementWrapper}>
                <div className={styles.leftComponent}>
                    <Usertable
                        users={users.users}
                        addUser={(userName: string) =>
                            dispatch(addNewUser(userName))
                        }
                        onSelect={handleSelect}
                    />
                </div>
                <div className={styles.rightComponent}>
                    {selectedUser && (
                        <Hobbiestable
                            hobbies={hobbyState.hobbies}
                            addHobby={handleAddHobby}
                            deleteHobby={handleDeleteHobby}
                            passionLevels={[
                                { value: 'low', name: 'Low' },
                                { value: 'medium', name: 'Medium' },
                                { value: 'high', name: 'High' },
                                { value: 'very-high', name: 'Very-High' },
                            ]}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
