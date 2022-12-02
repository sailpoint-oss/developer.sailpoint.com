const proxy = require("http-proxy-middleware");
const morgan = require("morgan");

module.exports = app => {
    app.use(
        "/socket",
        proxy({
            target: "http://localhost:4202",
            changeOrigin: true
        })
    )
    app.use(morgan('combined'));
    console.log(app);
}