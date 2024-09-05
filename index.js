const jsonServer=require('json-server')

const mdbserver=jsonServer.create()

const middleware=jsonServer.defaults()
const router=jsonServer.router('db.json')

mdbserver.use(middleware)
mdbserver.use(router)

const PORT=3000 || process.env.PORT

mdbserver.listen(PORT,()=>{
    console.log("server is running at:"+PORT);
    
})