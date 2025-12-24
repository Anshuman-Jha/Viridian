import express, { json } from "express"; 
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.get("/health", (req, res) => {
   res.status(200),json({ status: "OK" });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`Server is Running on port ${ENV.PORT}`);
        })
    }
    catch(error) {
        console.error("Failed to Start Server", error);
        process.exit(1);
    }
}

startServer();
 