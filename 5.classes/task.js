class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }

  set state(num) {
    if (num < 0) {
      this._state = 0;
    } else if (num > 100) {
      this._state = 100;
    } else {
      this._state = num;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let book = this.books.find((book) => book[type] === value);

    if (book === undefined) {
      return null;
    }

    return book;
  }

  giveBookByName(bookName) {
    let book = this.books.find(book => book.name === bookName);

    if (book === undefined) {
      return null;
    }

    this.books.splice(this.books.indexOf(book), 1);
    return book;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, theme) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (this.marks[theme] === undefined) {
      this.marks[theme] = [];
    }

    this.marks[theme].push(mark);
  }

  getAverageBySubject(theme) {
    const findTheme = Object.keys(this.marks).find(e => e === theme);

    if (findTheme === undefined) {
      return 0;
    }

    return this.marks[theme].reduce((acc, item) => acc + item / this.marks[theme].length, 0);
  }

  getAverage() {
    const choosesTheme = Object.keys(this.marks);
    const averageValue = choosesTheme.reduce((acc, theme) => acc + this.getAverageBySubject(theme), 0);

    return averageValue / choosesTheme.length || 0;
  }
}