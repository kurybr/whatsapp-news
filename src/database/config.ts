import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const dbPath = path.resolve(__dirname, '../../database.sqlite');

export async function getDatabase() {
    return open({
        filename: dbPath,
        driver: sqlite3.Database
    });
} 