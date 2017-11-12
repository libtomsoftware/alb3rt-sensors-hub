const core = require('alb3rt-core'),
    detection = require('../../detection'),
    CONFIG = core.config,
    STATUS_CODE = CONFIG.CONSTANTS.HTTP_CODE;

module.exports = new class Alb3rtSensorsHubResourcesMotion {
    constructor() {}

    post(request, response) {
        detection.handle('motion', request.body);

        core.api.responder.send(response, {
            status: STATUS_CODE.OK,
            data: {}
        });
    }
};
