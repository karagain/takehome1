import { Router } from "express";
import indexPage from "./pages/App";

export const router = Router()
  .get("/", indexPage)

