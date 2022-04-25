import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Hobbiestable } from '../../components/HobbiesTable/HobbiesTable'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
    fetchUsers,
    selectHobbies,
    selectUsers,
    fetchHobbies,
    addNewUser,
} from './hobbiesSlice'
import styles from './Hobbies.module.scss'
import { Usertable } from '../../components/UserTable/UserTable'

export function Hobbies({
    title,
}: PropsWithChildren<{
    title: string
}>) {
    const users = useAppSelector(selectUsers)
    const hobbyState = useAppSelector(selectHobbies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    console.log('🚀 ~ file: Hobbies.tsx ~ line 20 ~ users', users)

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
                    />
                </div>
                <div className={styles.rightComponent}>
                    <Hobbiestable
                        hobbies={hobbyState.hobbies}
                        addHobby={() => {}}
                        passionLevels={[
                            { value: 'low', name: 'Low' },
                            { value: 'medium', name: 'Medium' },
                            { value: 'high', name: 'High' },
                            { value: 'very-high', name: 'Very-High' },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

// export function Hobbsies() {
//     const count = useAppSelector(selectCount)
//     const dispatch = useAppDispatch()
//     const [incrementAmount, setIncrementAmount] = useState('2')

//     const incrementValue = Number(incrementAmount) || 0

//     return (
//         <div>
//             <div className={styles.row}>
//                 <button
//                     className={styles.button}
//                     aria-label="Decrement value"
//                     onClick={() => dispatch(decrement())}
//                 >
//                     -
//                 </button>
//                 <span className={styles.value}>{count}</span>
//                 <button
//                     className={styles.button}
//                     aria-label="Increment value"
//                     onClick={() => dispatch(increment())}
//                 >
//                     +
//                 </button>
//             </div>
//             <div className={styles.row}>
//                 <input
//                     className={styles.textbox}
//                     aria-label="Set increment amount"
//                     value={incrementAmount}
//                     onChange={(e) => setIncrementAmount(e.target.value)}
//                 />
//                 <button
//                     className={styles.button}
//                     onClick={() => dispatch(incrementByAmount(incrementValue))}
//                 >
//                     Add Amount
//                 </button>
//                 <button
//                     className={styles.asyncButton}
//                     onClick={() => dispatch(incrementAsync(incrementValue))}
//                 >
//                     Add Async
//                 </button>
//                 <button
//                     className={styles.button}
//                     onClick={() => dispatch(incrementIfOdd(incrementValue))}
//                 >
//                     Add If Odd
//                 </button>
//             </div>
//         </div>
//     )
// }
