module.exports = {
    db: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/school_management',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },
    },
};