'use strict';

// create App function
module.exports = function (app) {
    var screenshotList = require('../controllers/controller');

    // screenshotList Routes

    // get and post request for /todos endpoints
    app
        .route("/screenshots")
        .get(screenshotList.listAllScreenshots)
        //.post(todoList.createNewTodo);

    // put and delete request for /todos endpoints
    app
        .route("/screenshots/:data")
        .get(screenshotList.listScreenshots)
        /*.put(todoList.updateTodo)
        .delete(todoList.deleteTodo);*/
};