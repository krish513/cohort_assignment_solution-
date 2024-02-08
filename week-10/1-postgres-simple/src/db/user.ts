import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const query = `
        INSERT INTO users (username, password, name) 
        VALUES ($1, $2, $3)
    `
    const values = [username, password, name];
    const res = await client.query(query,values)
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const query = 'SELECT * FROM users WHERE id = $1'
    const res = await client.query(query,[userId]);
    return res.rows[0];
}
