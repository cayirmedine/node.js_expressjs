var middleware = {
    requireAuthentication: (req, res, next) => {
        console.log("Private route entered");
        next();
    },
    logger: (req, res, next) => {
        console.log(req.method+ " " +req.originalUrl);
        next();
    }
}

module.exports = middleware;