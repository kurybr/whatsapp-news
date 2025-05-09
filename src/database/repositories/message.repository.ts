import { Message } from 'superchats';
import { getDatabase } from '../config';
import dayjs from 'dayjs';

export class MessageRepository {
    async saveMessage(message: Message) {
        const db = await getDatabase();

        const existingParticipant = await db.get(`
            SELECT 1 FROM participants WHERE phone_number = ?
        `, [message.participant]);

        if (!existingParticipant) {
            await db.run(`
                INSERT INTO participants (phone_number, display_name)
                VALUES (?, ?)
            `, [message.participant, message.pushName || null]);
        }

        console.log(JSON.stringify(message, null, 4));
        
        let content = message.content?.textMessage?.text;

        if(message?.content?.conversation) 
        {
            content = message?.content?.conversation
        } else if(message?.content?.textMessage) {
            content = message?.content?.textMessage?.text;
        } else if(message?.content?.extendedTextMessage) {
            content = message?.content?.extendedTextMessage?.text;
        } else if(message?.content?.reactionMessage) {
            content = message?.content?.reactionMessage?.text;
        }


        await db.run(`
            INSERT INTO messages (
                id, 
                chat_id, 
                participant_phone,
                type, 
                content, 
                timestamp,
                raw
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?)
        `, [
            message.id,
            message.from,
            message.participant,
            message.type || 'message',
            content,
            dayjs.unix(message.timestamp).toDate(),
            JSON.stringify(message)
        ]);

    }
} 