/**
 * 第三方库文件js 文件在ts模式下，需要声明文件
 * 第一种方法 下载的时候 npm i @types/express -D 
 * 官方没有提供声明文件需要自己声明
 * 以下用到的模块都要声明  
 */
import express from 'express'
const app = express()

const router = express.Router()
app.use('/api',router)

router.get('/api', (req:any,res:any) => {
    res.json({
        code:200
    })
})
app.listen(9001,() => {
    console.log('9001')
})