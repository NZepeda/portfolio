const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname));


if(process.env.NODE_ENV){
    app.use(express.static('client/build'));

    // Express will serve index.html if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.get('/api/resume', (req, res) => {
    try{
        const file = path.resolve(__dirname, "Resume2018.pdf");

        fs.readFile(file, (err, data) => {
            if(!err){
                res.setHeader('x-filename', 'Resume2018.pdf');
                res.setHeader('Content-Type', 'application/pdf');
                return res.status(200).send(data);
            }
        });
        
    }catch(error){
        res.status(500).send({error: error});
    }
})

app.listen(PORT, () => {
 console.log("listening on port: " + PORT);
});

