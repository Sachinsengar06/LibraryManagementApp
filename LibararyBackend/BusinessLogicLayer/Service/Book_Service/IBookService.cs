using DataAccessLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Service.Book_Service
{
    public interface IBookService
    {
        Book GetBookById(int id);
        IEnumerable<Book> GetAllBooks();
        void AddBooks(Book newBook);
        void UpdateBook(Book updatedBook);
        void DeleteBook(int id);
    }
}
