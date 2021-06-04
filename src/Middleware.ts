import express from "express";

class Middleware {
  async extractBookId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    req.body.id = req.params.bookId;
    next();
  }
}

export default new Middleware();
