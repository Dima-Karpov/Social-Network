type TeatcherType = {
    name: string
    age: number
}

type UserType = {
    nema: string
    protocol: string
    maxStudentCount: number
    isOnline: boolean
    students: Array<string>
    classroom: {
        teatcher : TeatcherType
    }
}

export const user:UserType = {
    nema: 'it-kamasutra.com',
    protocol: 'https',
    maxStudentCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teatcher: {
            name: 'wew',
            age: 18
        }
    }

}

// const b = {...user};
// b.classroom = {...user.classroom};
// b.classroom.teatcher = {...user.classroom.teatcher};
// b.students = [...user.students];

const b = {
    ...user,
    students: [...user.students],
    classroom: {...user.classroom},
    teatcher: {...user.classroom.teatcher}
}; 