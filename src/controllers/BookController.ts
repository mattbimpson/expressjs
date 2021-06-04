import express from "express";
import Book from "../models/Book";
import BookService from '../services/BookService';

class BookController {

  async getBookById(req: express.Request, res: express.Response) {
    const book = BookService.getById(req.body.id);
    return res.status(200).send(book);
  }

  async getAllBooks(req: express.Request, res: express.Response) {
    return res.status(200).send(BookService.all);
  }

  async createBook(req: express.Request, res: express.Response) {
    
  }
}

export default new BookController();
