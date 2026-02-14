import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.send("Hello world!").end();
});

export default router;
