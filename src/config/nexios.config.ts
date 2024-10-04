import { Nexios } from "nexios-http";

// Default configuration for Nexios
const defaultConfig: NexiosOptions = {
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  credentials: "include",
  timeout: 10000,
};

const nexiosInstance = new Nexios(defaultConfig);
