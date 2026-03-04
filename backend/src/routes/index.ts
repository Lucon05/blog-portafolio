import { Router } from "express";

import routerAuth from "./auth";
import routerPosts from "./posts";

const router = Router();

router.use(routerPosts);
router.use(routerAuth);

export default router;
