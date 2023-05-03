const mongoose = require('mongoose');
function DbConnect() {
    const DB_URL = process.env.DB_URL;
    // Database connection
    mongoose.set('strictQuery', false);
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DbConnect;

// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);
// const DB_URL = process.env.DB_URL;

// function DbConnect() {
//     mongoose.connect(DB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         // useFindAndModify: false,
//       }).then(() => {
//         console.log('Database connected successfully!');
//       }).catch((error) => {
//         console.log('Error connecting to database: ', error);
//       });
// }

// module.exports = DbConnect;
