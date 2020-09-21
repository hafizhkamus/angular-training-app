const PROXY_CFG = [
    {
        context: [
            "/api"
        ],
    
        target: "https://localhost/3333",
        secure: false
    }
    ]
    module.exports = PROXY_CFG;