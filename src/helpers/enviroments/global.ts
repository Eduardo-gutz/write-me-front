import * as dotenv from "dotenv";
dotenv.config();

export const global = {
  port: process.env.NEXT_PUBLIC_PORT,
  api_url: process.env.NEXT_PUBLIC_API_URL
};
