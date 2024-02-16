module.exports = {
  apps: [
    {
      name: 'dkc-kz',
      // port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
  deploy: {
    // "production" is the environment name
    production: {
      // user: 'userName',
      // host: ['machine ip address'],
      // ref: 'origin/master',
      // repo: 'git@git-repo.git',
      // ssh_options: ['ForwardAgent=yes'],
      // // Папка на сервере, в которую будет перенесено приложение
      // path: '/var/www/.output',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
