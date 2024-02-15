using DataAccessLayer.Entities;
using DataAccessLayer.Repository.BookRepo;
using DataAccessLayer.Repository.UserRepo;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Service.User_Service
{
    public class UserService:IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public User GetUserById(int id)
        {
            return _userRepository.GetById(id);
        }
        public void UpdateUser(User updatedUser)
        {

            _userRepository.Update(updatedUser);
        }

    }
}
