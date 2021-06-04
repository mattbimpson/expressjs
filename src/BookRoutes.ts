import {RoutesConfig} from './shared/RoutesConfig';
import express from 'express';
import BookController from './controllers/BookController';
import Middleware from './Middleware';

export class BookRoutes extends RoutesConfig {
    constructor(app: express.Application) {
        super(app, 'BookRoutes');
    }

    configureRoutes(): express.Application {

      this.app
        .route('/book')
        .get(BookController.getAllBooks);

      this.app.param('bookId', Middleware.extractBookId);
      this.app
        .route('/book/:bookId')
        .get(BookController.getBookById);

      this.app
        .route('/book')
        .post(BookController.createBook);

      return this.app;
    }
}
