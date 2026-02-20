import { Router } from "express";

import routerPosts from "./posts";

const router = Router();

router.use(routerPosts);

export default router;
