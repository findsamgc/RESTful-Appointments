import { Router } from "express";
import {
  createRequest,
  getPaginatedRequests,
  getRequestById,
} from "~/controllers/request";

const router = Router();

router.get("/requests", async (req, res) => {
  const first = parseInt(req.query.first as string, 10) || 10;
  const [results, total] = await getPaginatedRequests(first);
  res.status(200).json({
    results: results,
    total: total,
  });
});

router.get("/requests/request/:id", async (req, res) => {
  const result = await getRequestById(req.params.id);
  res.status(200).json({
    results: result,
  });
});

router.post("/requests/request", async (req, res) => {
  const request = await createRequest(req.body);
  res.status(200).json({
    results: request,
  });
});

export default router;
