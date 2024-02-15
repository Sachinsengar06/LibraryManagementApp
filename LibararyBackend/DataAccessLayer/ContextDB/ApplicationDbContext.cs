using DataAccessLayer.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.ContextDB
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)
        {
            
        }
        public DbSet<Book> Books { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
            new User
            {
                Id = 1,
                Name = "Kelly",
                Email= "Kelly@gmail.com",
                Password = "user@123"

            },
           new User
           {
               Id = 2,
               Name = "Richard",
               Email = "Richard@gmail.com",
               Password = "user@123"

           },
           new User
           {
               Id = 3,
               Name = "Rahul",
               Email = "Rahul@gmail.com",
               Password = "user@123"

           },
           new User
           {
               Id = 4,
               Name = "Payal",
               Email = "Payal@gmail.com",
               Password = "user4@123"

           });
        }
        public DbSet<User> Users { get; set; }
    }
}
