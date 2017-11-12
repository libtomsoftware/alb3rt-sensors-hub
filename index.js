const core = require('alb3rt-core'),
    logger = core.logger,
    python = core.python,
    FILE_ID = 'index';

module.exports = new class Alb3rtSensorsHub {
    constructor() {
        require('./api');
    }
};
