const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname));


if(process.env.NODE_ENV){
    app.use(express.static('client/build'));

    // Express will serve index.html if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })

}

app.listen(PORT, () => {
 console.log("listening on port: " + PORT);
});

