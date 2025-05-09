import { Message } from 'superchats';
import { getDatabase } from '../config';

export class MessageRepository {
    async saveMessage(message: Message) {
        const db = await getDatabase();

        await db.run(`
            INSERT OR IGNORE INTO participants (phone_number, display_name)
            VALUES (?, ?)
        `, [message.participant, message.pushName || null]);

        console.log(JSON.stringify(message));

        await db.run(`
            INSERT INTO messages (
                id, 
                chat_id, 
                participant_phone
                type, 
                content, 
                timestamp,
                raw
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            message.id,
            message.from,
            message.participant,
            message.type || 'message',
            "",
            message.timestamp,
            JSON.stringify(message)
        ]);

    }
} 