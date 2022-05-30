const filerConfig =  {
  dbProvider:process.env.DB_PROVIDER,
  dbProviderConfig:   {
      region: process.env.DB_PROVIDER_REGION,
      endpoint: process.env.DB_PROVIDER_ENDPOINT,
      credentials: {
        accessKeyId: process.env.DB_PROVIDER_ACCESS_KEY_ID,
        secretAccessKey: process.env.DB_PROVIDER_SECRET_ACCESS_KEY
      },
      tableName : process.env.TABLE_NAME
  },
  storageProvider: process.env.STORAGE_PROVIDER,
  storageProviderConfig: {
          accessKeyId: process.env.STORAGE_PROVIDER_ACCESS_KEY_ID,
          secretAccessKey: process.env.STORAGE_PROVIDER_SECRET_ACCESS_KEY,
          sessionToken: process.env.STORAGE_PROVIDER_SESSION_KEY,
          bucket: process.env.STORAGE_PROVIDER_BUCKET 
  },
  extensions: process.env.EXTENSIONS,
  maxFileSize: process.env.MAX_FILE_SIZE,
  restrictions: {
    // file upload restrictions
    maxFileSizeInMB: 25,
    restrictedExtensions: ['exe', 'pdf'],
  },
  logger: (message) => { console.log("Message from logger\n", message) }
}


export default filerConfig;