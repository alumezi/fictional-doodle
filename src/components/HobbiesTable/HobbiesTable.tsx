import React, { PropsWithChildren, useState } from 'react'
import { Hobby, Passion } from '../../interfaces'
import styles from './HobbiesTable.module.scss'

export function Hobbiestable({
    addHobby,
    hobbies,
    passionLevels,
    deleteHobby,
}: PropsWithChildren<{
    addHobby: (item: Hobby) => void
    deleteHobby: (hobbyID: string) => void
    hobbies: Hobby[]
    passionLevels: Passion[]
}>) {
    const [passion, setPassionLevel] = useState('')
    const [hobby, setHobby] = useState('')
    const [year, setYear] = useState('')

    const handleAddHobby = () => {
        addHobby({ id: '', passion, hobby, year })
        setPassionLevel('')
        setHobby('')
        setYear('')
    }

    return (
        <table className={styles.hobbiesTable} width="100%">
            <thead>
                <tr>
                    <td>
                        <select
                            value={passion}
                            onChange={(e) => setPassionLevel(e.target.value)}
                        >
                            {passionLevels.map((item: Passion) => (
                                <option value={item.value} key={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <input
                            className={styles.input}
                            aria-label="Enter user hobby"
                            value={hobby}
                            onChange={(e) => setHobby(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            className={styles.input}
                            aria-label="Enter year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={handleAddHobby}>Add</button>
                    </td>
                </tr>
            </thead>
            <tbody>
                {hobbies.map((hobby) => (
                    <tr key={hobby.id}>
                        <td>Passion: {hobby.passion}</td>
                        <td>{hobby.hobby}</td>
                        <td>Since: {hobby.year}</td>
                        <td>
                            <button onClick={() => deleteHobby(hobby.id)}>
                                ❌
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
