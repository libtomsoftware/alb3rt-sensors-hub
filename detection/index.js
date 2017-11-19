const handlers = {
    security: require('./handlers/security')
};

module.exports = new class Alb3rtSensorsHubDetection {
    handle(type, data) {
        handlers.security.report(type, data);
    }
};
