import app from "./app.js"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.SERVER_PORT || 8080

app.listen(port, () => {
  console.log(`Server start up at ${port}`)
})
