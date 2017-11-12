const FILE_ID = 'detection',
    core = require('alb3rt-core'),
    http = core.http,
    logger = core.logger,
    CONFIG = core.config;

module.exports = new class Alb3rtSensorsHubDetection {
    constructor() {}

    handle(type, data) {
        const securityUrl = CONFIG.URL.SECURITY,
            event = `${type}@${data.ip}:${data.port}@${data.timestamp}`;

        if (securityUrl) {
            http.post({
                url: `http://${securityUrl}/api/motion`,
                body: data
            }).then(() => {
                logger.log(FILE_ID, `${event} reported to security.`);
            }).catch(() => {
                logger.error(FILE_ID, `${event} not reported to security!`);
            });
        }
    }
};
