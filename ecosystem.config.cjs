module.exports = {
  apps: [
    {
      name: 'webapp-preview',
      script: 'npx',
      args: 'vite preview --host 0.0.0.0 --port 3000',
      env: {
        NODE_ENV: 'production'
      },
      cwd: '/home/user/webapp',
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}