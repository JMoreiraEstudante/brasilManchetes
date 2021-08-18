// import Todo Model
const Screenshot = require("../models/model");

// DEFINE CONTROLLER FUNCTIONS  

//listar todas as screenshots
exports.listAllScreenshots = (req, res) => {
    Screenshot.find({}, (err, screenshot) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(screenshot);
    });
};

//listar todas as screenshots de um certo dia
exports.listScreenshots = (req, res) => {
    //req.params.data : dia-mes-ano
    //new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
    data = req.params.data.split("-");
    inicio = new Date(parseInt(data[2]), parseInt(data[1])-1, parseInt(data[0]), 0, 0, 0, 0)
    fim = new Date(parseInt(data[2]), parseInt(data[1])-1, parseInt(data[0]), 23, 59, 59, 999)
    Screenshot.find({"data":{"$gte":inicio,"$lte":fim}}, (err, screenshot) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(screenshot);
    });
};