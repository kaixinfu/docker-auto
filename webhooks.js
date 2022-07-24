const http = require('http')
const createHandler = require('github-webhook-handler')

const handler = createHandler({
  path: '/webhooks',
  secret: 'liuyuetong'
})

function run_cmd(cmd, args, callback) {
  const spawn = require('child_process').spawn
  const child = spawn(cmd, args)
  let resp = ''
  // 打印日志
  child.stdout.on('data', function (buffer) {
    resp += buffer.toString()
  })
  child.stdout.on('end', function () {
    callback(resp)
  })
}

const port = 9528
http
  .createServer((req, res) => {
    handler(req, res, (err) => {
      res.statusCode = 404
      res.end('服务器错误')
    })
  })
  .listen(port, () => {
    console.log(`webhook listen ${port}`)
  })

handler.on('error', (err) => {
  console.error('error', err.message)
})

handler.on('*', (e) => {
  console.log('receive * ')
  // 执行shall脚本
  run_cmd('sh', ['./deploy-dev.sh'], function (res) {
    console.log('run_cmd.res', res)
  })
})
