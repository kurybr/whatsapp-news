import * as Superchat from "superchats";
import { StatusFind } from "./superchats";
import dayjs from "dayjs";
import { MessageRepository } from '../../database/repositories/message.repository';
import { createTables } from '../../database/migrations';

class SuperchatService  {
    client!: Superchat.Client
    private messageRepository: MessageRepository;
    
    constructor() {
        this.messageRepository = new MessageRepository();
    }

    async onError(err) { 
        console.error(err);
    }
    
    async onInit() { 
        // Criar tabelas ao iniciar o serviço
        await createTables();
        
        this.client = await Superchat.create({
            session: `comunidade-wix`,
            driveStorage: 'local',
            qr: true,
            statusFind: async (status: StatusFind) => {},
            pairing: async () => {  },
            qrcode: async () => {  },
            license: process.env.SUPERCHAT_LICENSE,
			alwaysOn: true,
            welcomeScreen: false
        }).catch(this.onError) as unknown as Superchat.Client

        this.onEvent();
    }

    async onHooks() { 
        const response = await this.client.getChatAllMessages('120363370740287819') as any
        return response;
    }

    async onEvent ( ) {
        this.client.onAnyMessage((message) => this.onAnyMessage( message));
        this.client.onReaction((...args) => this.onReaction(...args));
    }

    onAnyMessage(message: Superchat.Message) { 
        if(!message.isgroup) return;
        if(message.from !== '120363370740287819') return;
        
        // Salvar mensagem no banco de dados
        this.messageRepository.saveMessage(message)
            .catch(error => console.error('Erro ao salvar mensagem:', error));


    }
    onReaction(args: any) { 
        console.log(args)
    }

}

export default new SuperchatService();