import express, { json } from "express"; 
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true
}));

app.get("/health", (req, res) => {
   res.status(200),json({ status: "OK" });
});

const startServer = async () => {
    try {
        if(!ENV.DB_URL) {
            throw new Error("Database URL is Missing !!")
        }
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
 