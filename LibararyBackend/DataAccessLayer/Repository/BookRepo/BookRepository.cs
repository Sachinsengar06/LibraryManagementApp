using DataAccessLayer.ContextDB;
using DataAccessLayer.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Reflection.Metadata.BlobBuilder;

namespace DataAccessLayer.Repository.BookRepo
{
    public class BookRepository:IBookRepository
    {
        private readonly ApplicationDbContext _context;
        public BookRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Add(Book newBook)
        {
            if (newBook == null)
            {
                throw new ArgumentNullException(nameof(newBook));
            }

            

            _context.Books.Add(newBook);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
           var book = _context.Books.FirstOrDefault(x => x.Id == id);
            if (book != null) 
            {
                _context.Books.Remove(book);
                _context.SaveChanges();
            }
        }

        public IEnumerable<Book> GetAll()
        {
           return _context.Books.ToList();
        }

        public Book GetById(int id)
        {
            var book = _context.Books.FirstOrDefault(x => x.Id == id);
            if (book == null)
            {
                // Throw a custom NotFoundException
                throw new NotFoundException($"Book with ID {id} not found");
            }
            return book;

        }

        public void Update(Book updatedBook)
        {
            _context.Entry(updatedBook).State=EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
