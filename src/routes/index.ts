import { Router } from "express";

import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specification.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationsRouter);

export { router };
