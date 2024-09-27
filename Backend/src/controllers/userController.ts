// backend/controllers/userController.ts
import { Request, Response } from 'express';
import { createUserTable, User } from '../models/userModel';
import connection from '../config/db';
import bcrypt from 'bcrypt';

// Function to create the user table
export const initializeUserTable = async (req: Request, res: Response) => {
    try {
        await createUserTable();
        res.status(200).json({ message: 'User table initialized successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to initialize user table.' });
    }
};

// Function to create a new user
export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, role }: User = req.body;

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
        INSERT INTO users (name, email, password, role) 
        VALUES (?, ?, ?, ?)
    `;
    try {
        const db = connection;
        await db.execute(query, [name, email, hashedPassword, role]);
        res.status(201).json({ message: 'User created successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user. Please check your input.' });
    }
};

// Function to get all users
export const getAllUsers = async (req: Request, res: Response) => {
    const query = 'SELECT * FROM users';
    try {
        const db = connection;
        const Query = await db.execute(query);
        res.status(200).json(query);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users.' });
    }
};

// Function to update a user
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params; // Get user ID from the request parameters
    const { name, email, role } = req.body;

    const query = `
        UPDATE users 
        SET name = ?, email = ?, role = ? 
        WHERE id = ?
    `;
    try {
        const db = connection;
        await db.execute(query, [name, email, role, id]);
        res.status(200).json({ message: 'User updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user.' });
    }
};

// Function to delete a user
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params; // Get user ID from the request parameters

    const query = 'DELETE FROM users WHERE id = ?';
    try {
        const db = connection;
        await db.execute(query, [id]);
        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user.' });
    }
};
