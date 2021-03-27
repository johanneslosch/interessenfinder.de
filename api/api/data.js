const router = require('express').Router();
const fs = require('fs');
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', (req, res, next) => {
    res.status(200).json(JSON.parse(fs.readFileSync('./interests.json', 'utf-8')))
});

router.post('/', (req, res, next) => {
    res.sendStatus(200);
    const test = JSON.parse(fs.readFileSync("./interests.json", 'utf-8'))
    var data = JSON.stringify(req.body)
    if (!fs.readFileSync("./interests.json", 'utf-8').includes(data)) {
        const writeData = JSON.stringify(test).replace(']', ',') + data + ']'
        fs.writeFileSync('./interests.json', writeData, "utf8")
    }
});

module.exports = router;