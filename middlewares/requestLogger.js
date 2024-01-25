module.exports = (req, res, next) => {
    console.log(`At [${new Date().toISOString()}] with ${req.method} method this : ${req.url} API hits =>`);
    next();
};