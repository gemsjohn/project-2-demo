var express = require('express');
var app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/notes', cors(corsOptions), function (req, res, next) {
    res.json({msg: "test"})
})
 
app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}!`);
});