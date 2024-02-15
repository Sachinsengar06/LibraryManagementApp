using DataAccessLayer.Entities;
using DataAccessLayer.Repository.BookRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Service.Book_Service
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;
        public BookService(IBookRepository bookRepository)
        { _bookRepository = bookRepository; }   
        public void AddBooks(Book newBook)
        {
           _bookRepository.Add(newBook);
        }

        public Book GetBookById(int id)
        {
            return _bookRepository.GetById(id);
        }

        public void DeleteBook(int id)
        {
          _bookRepository.Delete(id);
        }

        public IEnumerable<Book> GetAllBooks()
        {
            return _bookRepository.GetAll();
        }

        public void UpdateBook(Book updatedBook)
        {
          
           _bookRepository.Update(updatedBook);
        }
    }
}
