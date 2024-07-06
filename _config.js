const express = require("express");
const express = require("express");
const express = require("express");
const express = require("express");
const express = require("express");
const mongoose = require("mongoose");
const mongoose = require("mongoose");
const mongoose = require("mongoose");
const mongoose = require("mongoose");
const mongoose = require("mongoose");
const path = require("path");
const path = require("path");
const path = require("path");
const path = require("path");
const path = require("path");
let image = require("./routes/image");
let image = require("./routes/image");
let image = require("./routes/image");
let image = require("./routes/image");
let image = require("./routes/image");
let index = require("./routes/index");
let index = require("./routes/index");
let index = require("./routes/index");
let index = require("./routes/index");
let index = require("./routes/index");

var config = {}

// Update to have your correct username and password
config.mongoURI = {
	production: 'mongodb+srv://kajuju:6jX9YhWWrL7gvdd4@gallery.clusterms-wk2-project.zlftvug.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Clusterms-wk2-project',
	development: 'mongodb+srv://kajuju:6jX9YhWWrL7gvdd4@gallery.clusterms-wk2-project.zlftvug.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Clusterms-wk2-project',
	test: 'mongodb+srv://kajuju:6jX9YhWWrL7gvdd4@gallery.clusterms-wk2-project.zlftvug.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Clusterms-wk2-project',
}
module.exports = config;
// Initializing the app
const app = express();
// connecting the database
const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[app.settings.env];
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Connected to Database: ${MONGODB_URI}`);
    }
});
// test if the database has connected successfully
// let db = mongoose.connection;
// db.once('open', ()=>{
//     console.log('Database connected successfully')
// })
// View Engine
app.set('view engine', 'ejs');
// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));
// body parser middleware
app.use(express.json());
app.use('/', index);
app.use('/image', image);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
module.exports = app;
