using DataAccessLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Service.User_Service
{
    public interface IUserService
    {
        User GetUserById(int id);
        void UpdateUser(User updatedUser);


      
    }
}
