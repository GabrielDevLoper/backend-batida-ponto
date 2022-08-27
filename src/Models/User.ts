// export interface User {
//     username: string;
//     password: string;
//     companie_id?: number;
//     role?: 'USER' | 'ADMIN_GERAL' | 'ADMIN_EMPRESA'
// }

class User {
    id?: number;
    username: string;
    password: string;
    companie_id?: number;
    role?: 'USER' | 'ADMIN_GERAL' | 'ADMIN_EMPRESA'

    private constructor({ username, password, companie_id, role }: User) {
        return Object.assign(this, {
            username,
            password,
            companie_id,
            role
        })
    }

    static create({ username, password, companie_id, role }: User) {
        const user = new User({ username, password, companie_id, role });

        return user
    }
}

export { User };
