import React, { PropsWithChildren, useState } from 'react'
import { Hobby, Passion } from '../../interfaces'
import styles from './HobbiesTable.module.scss'

export function Hobbiestable({
    addHobby,
    hobbies,
    passionLevels,
}: PropsWithChildren<{
    addHobby: (item: Hobby) => void
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
        <table className={styles.hobbiesTable}>
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
            {hobbies.map((hobby) => (
                <tr key={hobby.id} className={styles.oneHobby}>
                    <td>Passion: {hobby.passion}</td>
                    <td>{hobby.hobby}</td>
                    <td>Since: {hobby.year}</td>
                    <td>
                        <button onClick={() => {}}>❌</button>
                    </td>
                </tr>
            ))}
        </table>
    )
}
