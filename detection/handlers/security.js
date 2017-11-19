const FILE_ID = 'handlers/security',
    core = require('alb3rt-core'),
    http = core.http,
    logger = core.logger,
    CONFIG = core.config;

module.exports = new class Alb3rtSensorsSecurityHandler {
    constructor() {
        this.securityUrl = CONFIG.URL.SECURITY;
    }

    report(type, data) {
        const event = `${type}@${data.ip}:${data.port}@${data.timestamp}`;

        if (this.securityUrl) {
            http.post({
                url: `http://${this.securityUrl}/api/motion`,
                body: data
            }).then(() => {
                logger.log(FILE_ID, `${event} reported to security.`);
            }).catch((error) => {
                logger.error(FILE_ID, `${event} not reported to security! ${error}`);
            });
        }
    }

};
