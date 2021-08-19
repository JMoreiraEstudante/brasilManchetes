'use strict';

// create App function
module.exports = function (app) {
    var screenshotList = require('../controllers/controller');

    // screenshotList Routes

    // get request for /screenshots endpoints
    app
        .route("/screenshots")
        .get(screenshotList.listAllScreenshots)
        //.post(todoList.createNewTodo);

    // get request for /screenshots/:data/:jornal endpoints
    app
        .route("/screenshots/:data/:jornal")
        .get(screenshotList.listScreenshots)

    // get request for /screenshot endpoints
    app
        .route("/screenshot")
        .get(screenshotList.listOneScreenshot)
};