import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// Используем локальный Redis (Memurai)
export const redis = new Redis({
    host: "127.0.0.1",
    port: 6379,
    maxRetriesPerRequest: 3,
});