using DataAccessLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repository.UserRepo
{
    public interface IUserRepository
    {
        User GetById(int id);
       
        void Update(User updatedUser);

        User GetUserByEmailAndPasswordAsync(string email, string password);


    }
}
