class BookService {
  books = [
    {
      id: 0,
      title: 'test',
      description: 'test',
      author: 'test'
    }
  ];

  get all() {
    return this.books;
  }

  getById(id: number) {
    const book = this.books.find(x => x.id == id);
    return book;
  }
}

export default new BookService();
