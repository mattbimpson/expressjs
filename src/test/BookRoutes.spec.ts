import {app, server} from '../app';
import supertest from 'supertest';

describe('book routes', () => {

  const book = {"author": "test", "description": "test", "id": 0, "title": "test"};

  afterEach((done) => {
    server.close();
    done();
  });

  test('get /book/all returns all books', async () => {
    await supertest(app)
      .get('/book/all')
      .expect(200)
      .then((response) => {
        expect(response.body).toStrictEqual([book]);
      });
  });

  test('get /book/:bookid returns specific book', async () => {
    await supertest(app)
      .get('/book/0')
      .expect(200)
      .then((response) => {
        expect(response.body).toStrictEqual(book);
      });
  });

  test('post /book creates book', async () => {
    const data = {
      "author": "test",
      "description": "test",
      "id": 1,
      "title": "test"
    };
    await supertest(app)
      .post('/book')
      .send(data)
      .expect(200)
      .then((response) => {
        expect(response.text).toBe('Created.');
      });
  });
});
