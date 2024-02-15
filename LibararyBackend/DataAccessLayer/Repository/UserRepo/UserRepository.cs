using DataAccessLayer.ContextDB;
using DataAccessLayer.Entities;
using DataAccessLayer.Repository.BookRepo;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repository.UserRepo
{
    public class UserRepository:IUserRepository
    {
        private readonly ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public User GetById(int id)
        {
            var user = _context.Users.FirstOrDefault(x => x.Id == id);
           
            if (user == null)
            {
                // Throw a custom NotFoundException
                throw new NotFoundException($"User with ID {id} not found");
            }
            return user;
        }

       

        public User GetUserByEmailAndPasswordAsync(string email, string password)
        {
            var user =  _context.Users.Where(u => u.Email == email && u.Password == password).FirstOrDefault();
            if (user == null)
            {
                throw new NotFoundException();
            }
            return user;
        }

        public void Update(User updatedUser)
        {
            _context.Entry(updatedUser).State = EntityState.Modified;
            _context.SaveChanges();
        }

    }
}
