const core = require('alb3rt-core'),
    moment = require('moment'),
    detection = require('../../detection'),
    CONFIG = core.config,
    STATUS_CODE = CONFIG.CONSTANTS.HTTP_CODE;

module.exports = new class Alb3rtSensorsHubResourcesMotion {
    constructor() {}

    post(request, response) {
        const body = Object.assign({}, {
            ip: 'ip_unknown',
            port: 'port_unknown',
            timestamp: moment().unix()
        }, request.body);

        detection.handle('motion', body);

        core.api.responder.send(response, {
            status: STATUS_CODE.OK,
            data: {}
        });
    }
};
