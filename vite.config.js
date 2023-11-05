export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    assetsInclude: ['images/*.json']
  }
};