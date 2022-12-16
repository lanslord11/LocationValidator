const app = require("./app");
const connectDatabase = require("./config/database")

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})