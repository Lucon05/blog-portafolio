// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars
import express = require("express");

declare module "express" {
  // Inject additional properties on express.Request
  interface Request {
    userId?: number;
  }
}
