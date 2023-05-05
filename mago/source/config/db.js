const MongoClient = require('mongodb').MongoClient  // ใช้งาน mongodb module

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:1234@cluster0.mwuwtq2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
 
// ส่งการเชื่อมต่อฐานข้อมูลไปใช้งาน
module.exports = new Promise((resolve, reject)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if (error) throw error
        var db = client.db(dbName)
        console.log("Connected successfully to server")
        resolve(db)
    })
})