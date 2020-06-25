var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://root:root@cluster0-26bbm.mongodb.net/Assign?retryWrites=true&w=majority
");

module.exports = {mongoose};
