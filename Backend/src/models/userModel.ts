// backend/models/userModel.ts
import connection from '../config/db';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';

export interface User {
    id: number;
    name: string;
    email: string;
    password: string; // hashed password
    role: 'Admin' | 'Librarian' | 'Patron';
}

export const createUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role ENUM('Admin', 'Librarian', 'Patron') NOT NULL
        )
    `;
    const db:Connection = connection;
    await db.query(query);
};
