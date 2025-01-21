export default () => ({
 ckeditor: {
    enabled: true,
    config: {
      plugin: {
        // Konfigurasi CKEditor tambahan
      },
      editor: {
        toolbar: [
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          'blockQuote',
        ],
        language: 'en',
        // Konfigurasi lainnya
      },
    },
  }, 
});
