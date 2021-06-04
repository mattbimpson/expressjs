import express, { Request, Response, NextFunction } from "express";

class Middleware {
  async extractBookId(req: Request, res: Response, next: NextFunction) {
    req.body.id = req.params.bookId;
    next();
  }
}

export default new Middleware();
