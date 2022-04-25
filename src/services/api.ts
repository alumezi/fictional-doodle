import { Hobby, User } from '../interfaces'

let mockUsers = [{ id: '123ewg43d3d', name: 'Arbnor Lumezi' }]
let mockHobbies: { [key: string]: Hobby[] } = {
    '123ewg43d3d': [
        {
            id: '123sd3j48j',
            passion: 'medium',
            hobby: 'Swimming',
            year: '2015',
        },
    ],
}

export function fetchAllUsers() {
    return new Promise<{ data: User[] }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data: mockUsers,
                }),
            500
        )
    )
}

export function addUserAPI(userName: string) {
    return new Promise<{ data: User[] }>((resolve) =>
        setTimeout(() => {
            const newID = Math.random().toString()
            mockUsers = [{ id: newID, name: userName }, ...mockUsers]
            mockHobbies = { [newID]: [], ...mockHobbies }
            resolve({
                data: mockUsers,
            })
        }, 500)
    )
}

export function addHobbyAPI(userID: string, hobby: Hobby) {
    return new Promise<{ data: Hobby[] }>((resolve) =>
        setTimeout(() => {
            mockHobbies = {
                ...mockHobbies,
                [userID]: [...mockHobbies[userID], hobby],
            }
            resolve({
                data: mockHobbies[userID],
            })
        }, 500)
    )
}

export function deleteHobbyAPI(userID: string, hobbyID: string) {
    return new Promise<{ data: Hobby[] }>((resolve) =>
        setTimeout(() => {
            mockHobbies[userID] = mockHobbies[userID].filter(
                (item) => item.id !== hobbyID
            )
            resolve({
                data: mockHobbies[userID],
            })
        }, 500)
    )
}

export function fetchUserHobbies(userID: string) {
    return new Promise<{ data: Hobby[] }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data: mockHobbies[userID],
                }),
            500
        )
    )
}
