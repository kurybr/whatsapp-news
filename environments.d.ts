declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        SUPERCHAT_LICENCE: string;
        AWS_ACCESS_KEY: string;
        AWS_ACCESS_SECRET: string;
        AWS_REGION: string;
        AWS_STORAGE_BUCKET: string;
        AWS_STORAGE_HOSTNAME: string;
      }
    }
  }
  
  export {};
  