const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://nhanb2014592:DPNimMZKgvINQOWO@cluster0.chxms6s.mongodb.net"
    }
};

module.exports = config;