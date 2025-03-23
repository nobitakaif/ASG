
import cluster from "cluster"
import os from "os"
import { app } from "./index.js"






if(cluster.isPrimary){
    console.log(`Master ${process.pid} is running`);
    
    for(let i=0;i<os.cpus().length;i++){
        cluster.fork()
    }
}
else{
    app.listen(8000,()=>{
        console.log("server is running on port 8000")
    }) 
}


    