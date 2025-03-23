
const cluster = require("cluster")
const os = require("os")
const { app } = require("./bin")




if(cluster.isPrimary){
    for(let i=0;i<os.cpus().length;i++){
        cluster.fork()
    }
}
else{
    app.listen(5000,()=>{
        console.log("server is running on port 5000")
    }) 
}

