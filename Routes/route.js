import express from "express"
import {
    createBunga,
    deleteBunga,
    getBunga, getBungaById, updateBunga,
} from "../Controller/bungaController.js"

const router = express.Router();

router.get("/", getBunga);
router.get("/find", getBungaById);
router.post("/create", createBunga);
router.put("/update", updateBunga);
router.delete("/delete", deleteBunga);

export default router 