import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExt extends Request {
    user?: JwtPayload | { id: string }
}