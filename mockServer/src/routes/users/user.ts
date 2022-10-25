import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("get all users");
}); // get all locations

export default router;
