import { Roles } from "../enums/Roles";
import { User } from "../models/User";

export const USERS: User[] = [
    {
        email: 'admin@example.com',
        password: 'qwerty123',
        role: Roles.Admin,
        token: 'xcv346_dsf1cvj3bnff6FTH#2bcbsdsdf23'
    },
    {
        email: 'user@example.com',
        password: 'qwerty123',
        role: Roles.User,
        token: 'Jfg546!r60)2346FHw4457fdb341DDdfhbgh'
    }
]