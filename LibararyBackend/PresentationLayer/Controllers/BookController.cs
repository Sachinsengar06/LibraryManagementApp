using BusinessLogicLayer.Service.Book_Service;
using DataAccessLayer.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }
        [HttpGet("{id}")]
        public ActionResult<Book> Get(int id)
        {
            try
            {
                var book = _bookService.GetBookById(id);
                return (book == null) ? NotFound() : Ok(book);
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred");
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<Book>> Get()
        {
            try
            {
                var books = _bookService.GetAllBooks();
                return Ok(books);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody] Book book)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _bookService.AddBooks(book);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred");
            }
        }
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Book book) 
        {
            try
            {
                if (id != book.Id)
                {
                    return BadRequest();
                }
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _bookService.UpdateBook(book);
                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred");
            }
        }
        [HttpDelete]
        public ActionResult Delete(int id) 
        {
            try
            {
                var existingBook = _bookService.GetBookById(id);
                if (existingBook == null)
                {
                    return NotFound();
                }
                _bookService.DeleteBook(id);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred");
            }

        }
    }
}
