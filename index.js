let express = require('express');
let path = require('path');
let fs = require('fs');
let file = __dirname + '/data.json';
let cors = require('cors');
let bodyParser = require('body-parser');
let compression = require('compression');
let jsonfile = require('jsonfile');

let port = process.env.PORT || 8000;

let terminalConfigurations = require('./terminalstuff/actions');
let terminalDataFiles = require('./terminalstuff/datafiles');

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.createReadStream(file, 'utf8').pipe(res);
});

app.get('/terminalUpdate', function (req, res) {
    // the file to be returned to terminal ::
    let combiledTerminalFiles = '';

    // append the terminal configuration file ::
    combiledTerminalFiles += terminalConfigurations.stockTakeConfiguration();

    // append the data files ::
    terminalDataFiles.storesDataFile()
        .then((fileData) => {
            combiledTerminalFiles += fileData;
            return terminalDataFiles.stockDataFile();
        }).then((fileData) => {
        combiledTerminalFiles += fileData;
        return terminalDataFiles.StockoperationsDataFile();
    }).then((fileData) => {
        combiledTerminalFiles += fileData;

        // finally resolve the http request :: as plain text ::
        res.setHeader('Content-type', 'text/plain');
        res.status(200);
        res.end(combiledTerminalFiles);
    });

});


app.post('/terminalData', function (req, res) {
    jsonfile.readFile(file)
        .then(arrayOfObjects => {
            arrayOfObjects.unshift({
                headers: req.headers,
                body: req.body
            });

            jsonfile.writeFile(file, arrayOfObjects, {spaces: 2}, function (err) {
                if (err) console.error(err);
                res.status(200).send("Thank you. Data Received!");
            });

        })
        .catch(error => console.error(error));
});

let httpServer = require('http').createServer(app);
httpServer.listen(port, function () {
    console.log('info', 'tracksol demo data running on port ' + port + '.');
    /*fs.writeFile(file, '[{"event": "waiting for data"}]', function (err) {
        if (err) {
            console.log('error', err);
        }
    });*/
});

