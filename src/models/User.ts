import { randomInt } from "crypto";
import bcrypt from "bcryptjs";

export class User {
    public id: number;
    public username: string;
    public password: string;
    public companie_id?: number;
    public role?: "USER" | "ADMIN_GERAL" | "ADMIN_EMPRESA";
    public status?: boolean;

    constructor(props: Omit<User, 'id'>, id?: string) {
        this.username = props.username;
        this.password = bcrypt.hashSync(props.password, 8);
        this.companie_id = props.companie_id;
        this.role = props.role;
        this.status = props.status;
    }

}