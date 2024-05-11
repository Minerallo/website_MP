import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: "/website_MP/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        file1: resolve(__dirname, 'files/curriculum.html'),
        file2: resolve(__dirname, 'files/model_gallery.html'),
        file3: resolve(__dirname, 'files/publications.html'),
        file4: resolve(__dirname, 'files/research.html'),
        file5: resolve(__dirname, 'files/social_networks.html'),
        file6: resolve(__dirname, 'files/about_me.html'),
        // file7: resolve(__dirname, 'files/x3dom.xhtml'),
        // file7: resolve(__dirname, 'files/x3dom.js'),
        // file8: resolve(__dirname, 'files/x3dom.css'),


        // nested: resolve(__dirname, 'gallery/index.html'),
      },
    },
    // Specify the assets to include and their destination.
    assetsinclude: [
        '**/*.pdf',
        '**/*.png',
        '**/*.jpg', // Include the images in the Texture_planets folder.
        // '**/*.xhtml',
      ],
      // Destination path within the build output directory.
    //   to: 'public', // Output assets directly in the "dist/assets" directory.
  },
});
