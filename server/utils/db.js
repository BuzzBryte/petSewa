import mongoose from 'mongoose';




class Database{
    constructor(){
        this.connection=null    // To track if the database is already connected
    }
    
    async connectDB( URI ){
        if (this.connection){
            console.log('Database already connected')
            return this.connection
        }
        try{
            const database = await mongoose.connect(URI)
            console.log('Database connected')
            return this.connection
        }
        catch(error){
            console.log('An error occurred', error)
        }
    }

    async closeDB(){
        if(!this.connection){
            console.log('No active datbase connection to close')
            return
        }
        try{
            await mongoose.connection.close()
            console.log('Database disconnected')
            this.connection=null
        }catch(error){
            console.log('An error occurred while disconnecting the database: ', error)
        }

    }
}

export default Database