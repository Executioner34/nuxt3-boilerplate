// https://nuxt.com/docs/api/configuration/nuxt-config
// import path from 'path';
// import { fileURLToPath } from 'url';

// Config modules
import googleFontsConfig from './src/app/nuxt-config/google-fonts';
import imagesConfig from './src/app/nuxt-config/image';
import svgoConfig from './src/app/nuxt-config/svgo';
import i18nConfig from './src/app/nuxt-config/i18n/i18n';
import eslintConfig from './src/app/nuxt-config/eslint';
import stylelintConfig from './src/app/nuxt-config/stylelint';

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  srcDir: 'src/',
  dir: {
    public: 'app/public',
    layouts: 'app/layouts',
    assets: 'app/assets',
    middleware: 'app/middleware',
    plugins: 'app/plugins',
  },
  alias: {
    // '@src': path.join(__dirname, './src'),
    // src: fileURLToPath(new URL('./src', import.meta.url)),
  },
  app: {
    head: {
      title: 'nuxt3-boilerplate',
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  modules: [
    ['@nuxtjs/google-fonts', googleFontsConfig],
    '@pinia/nuxt',
    ['@nuxt/image', imagesConfig],
    ['nuxt-svgo', svgoConfig],
    ['@nuxtjs/i18n', i18nConfig],
    ['@nuxtjs/eslint-module', eslintConfig],
    ['@nuxtjs/stylelint-module', stylelintConfig],
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  css: ['normalize.css/normalize.css', '@/app/assets/styles/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/app/assets/google-fonts/css/nuxt-google-fonts.css" as *;
            @use "@/app/assets/styles/scss/_colors.scss" as *;
            @use "@/app/assets/styles/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
});
