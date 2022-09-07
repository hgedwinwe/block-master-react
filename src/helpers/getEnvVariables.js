export const getEnvVariables = () => {
  // import.meta.env;

  return {
    VITE_MDB_API_URL: import.meta.env.VITE_MDB_API_URL,
    VITE_MDB_API_IMAGE_URL: import.meta.env.VITE_MDB_API_IMAGE_URL,
    VITE_API_KEY: import.meta.env.VITE_API_KEY,
    // ...import.meta.env,
  };
};
