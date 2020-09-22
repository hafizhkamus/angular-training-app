const PROXY_CFG = [
    {
        context: [
            "/api"
        ],

        target: "http://localhost:3333",
        secure: false
    }
    ]
    module.exports = PROXY_CFG;
