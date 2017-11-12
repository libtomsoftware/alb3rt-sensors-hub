const core = require('alb3rt-core'),
    motion = require('./resources/motion');

module.exports = new class Alb3rtSensorsHubApi {
    constructor() {
        core.api.extend('motion', motion);
    }
};
