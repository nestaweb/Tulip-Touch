export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined // Peut-être nécessaire pour inclure les fichiers JSON
      }
    },
    assetsInclude: ['**/*.json'] // Inclure les fichiers JSON dans la construction
  }
};