import * as Superchat from 'superchats';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare module 'superchats' {
    export function sendText(to: string, msg: string, options?: Superchat.Options.Message): Promise<Message>;
    export function sendReaction(): void;
    export function messageTemporary(): void;
    export function sendImage(): void;
    export function sendVideo(): void;
    export function sendDocument(to: string, file: string, options?: Superchat.Options.SendDocument): Promise<Message>;
    export function sendLocation(): void;
    export function sendContact(): void;
    export function sendSticker(): void;
    export function sendAudio(): void;
    export function sendVoice(): void;
    export function sendList(): void;
    export function productCreate(): void;
    export function sendPoll(): void;
    export function onAnyMessage(fn: (message: Message) => void): void;
    export function onReaction(): void;
    export function onAck(): void;
    export function onPresence(): void;
    export function onDelete(): void;
    export function syncHistory(): void;
    export function onParticipants(): void;
    export function onGroups(): void;
    export function logout(): void;
    export function close(): void;
    export function getHostDevice(): void;
    export function getNumberProfile(number: string): Promise<CheckNumberProfile | CheckNumberProfileError>;
    export function getProfileStatus(): void;
    export function getPicture(): void;
    export function getPresence(): void;
    export function setPicture(): void;
    export function setName(): void;
    export function setStatus(): void;
    export function archiveChat(): void;
    export function pinChat(): void;
    export function muteChat(): void;
    export function unmuteChat(): void;
    export function deleteChat(): void;
    export function blockContact(): void;
    export function unblockContact(): void;
    export function deleteMessageAll(): void;
    export function deleteMessageMe(): void;
    export function editMessage(): void;
    export function getBlockList(): void;
    export function getAllContacts(): void;
    export function getConnectionState(): void;
    export function getChats(): void;
    export function getLabels(): void;
    export function getLabelsChats(): void;
    export function getLabelsMessages(): void;
    export function addLabelChat(): void;
    export function addLabelMessage(): void;
    export function removeLabelChat(): void;
    export function removeLabelMessage(): void;
    export function getGroups(): void;
    export function getParticipantsPending(): void;
    export function setPresence(): void;
    export function createNews(): void;
    export function setNewsPicture(): void;
    export function newsTitle(): void;
    export function newsDescription(): void;
    export function createGroup(): void;
    export function createCommunity(): void;
    export function addParticipantsGroup(): void;
    export function approveParticipantsGroup(): void;
    export function removeParticipantsGroup(): void;
    export function addGroupAdmins(): void;
    export function removeGroupAdmins(): void;
    export function groupTitle(): void;
    export function groupDescription(): void;
    export function leaveGroup(): void;
    export function getGroupLink(): void;
    export function revokeGroupLink(): void;
    export function joinGroup(): void;
    export function infoGroup(): void;
    export function setGroupSettings(): void;
    export function getChatMessages(): void;
    export function getChatAllMessages(id: string): Promise<Message>;
    export function getMessageById(): void;
    export function forwardMessage(): void;
    export function markRead(): void;
    export function markReadAll(): void;
    export function sendTextStatus(): void;
    export function sendImageStatus(): void;
    export function sendVideoStatus(): void;
    export function deleteStatus(): void;

    export interface sendDocumentParams {
        filename?: string;
        caption?: string;
        reply?: string;
    }

    export interface sendTextParams {
        reply?: string;
    }

    export namespace Options {
        export type SendDocument = sendDocumentParams;
        export type Message = sendTextParams;
    }

    export interface Client extends Superchat.Types {
        getNumberProfile: (number: string) => Promise<CheckNumberProfile | CheckNumberProfileError>;
        sendDocument: (to: string, file: string, options?: Superchat.Options.SendDocument) => Promise<Message>;
        onAnyMessage: (fn: (message: Message) => void) => void;
        sendText: (to: string, msg: string, options?: Superchat.Options.Message) => Promise<Message>;
        onReaction: (fn: (message: Message) => void) => void;
    }

    export interface Message {
        session: string;
        device: string;
        event: 'on-any-message';
        subevent: 'received' | 'sending';
        type: 'textMessage' | 'imageMessage' | 'document';
        isMedia: boolean;
        pushName: string;
        id: string;
        from: string;
        to: string;
        content: {
            textMessage: { text: string };
            extendedTextMessage: { text: string };
            conversation: string;
            documentMessage?: {
                url: string;
                mimetype: string;
                filename: string;
            };
            disappearingMode?: {
                initiator: string;
                trigger: string;
                initiatedByMe: boolean;
            }
        };
        isgroup: boolean;
        participant: string;
        timestamp: number;
    }

    export interface CheckNumberProfile {
        session: string;
        device: string;
        status: number;
        type: 'get-number-profile';
        phone: string;
        exist: boolean;
    }

    export interface CheckNumberProfileError {
        session: string;
        status: number;
        type: string;
        message: string;
    }

    export interface AckEvent {
        session: string;
        device: string;
        event: 'on-ack';
        status: 'RECEIVED' | 'READ';
        device_default: boolean;
        id: string;
        to: string;
    }

    export interface StatusFind {
        session: string;
        device: string;
        event: string;
        status: boolean;
        type: 'CONNECTION';
        response: 'isLogged' 
            | 'notLogged' 
            | 'isDisconnected' 
            | 'isLogout' 
            | 'isConnected' 
            | 'serverDisconnected' 
            | 'isReconnected' 
            | 'qrTimeOut' 
            | 'pairingTimeOut'
            | 'tokenRemoved'
            ;
    }
}

export interface StatusFind {
    session: string;
    device: string;
    event: string;
    status: boolean;
    type: 'CONNECTION';
    response: 'isLogged' 
        | 'notLogged' 
        | 'isDisconnected' 
        | 'isLogout' 
        | 'isConnected' 
        | 'serverDisconnected' 
        | 'isReconnected' 
        | 'qrTimeOut' 
        | 'pairingTimeOut'
        | 'tokenRemoved'
        ;
}