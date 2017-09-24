var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dfg";

module.exports = {
    connectDB: function () {
        // MongoClient.connect(url, function (error, data) {
        //     if (error) {
        //         console.error("connectionmogodb.js error");
        //         throw err;
        //     }
        //     console.log("Database created! Connect to database " + url);
        //     db.close();
        // });
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            console.log("Database created!");
            db.close();
            return db;
        });
    }
}