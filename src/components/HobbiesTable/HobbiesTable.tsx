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
        <div className={styles.hobbiesTable}>
            <div>
                <select
                    value={passion}
                    onChange={(e) => setPassionLevel(e.target.value)}
                >
                    {passionLevels.map((item: Passion) => (
                        <option value={item.value}>{item.name}</option>
                    ))}
                </select>
                <input
                    className={styles.input}
                    aria-label="Enter user hobby"
                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                />
                <input
                    className={styles.input}
                    aria-label="Enter year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <button onClick={handleAddHobby}>Add</button>
            </div>
            <div>
                {hobbies.map((hobby) => (
                    <div>
                        <div>Passion: {hobby.passion}</div>
                        <div>{hobby.hobby}</div>
                        <div>Since: {hobby.year}</div>
                        <button></button>
                    </div>
                ))}
            </div>
        </div>
    )
}
