using DataAccessLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.JWT
{
    public interface IAuthenticationService
    {
        public User AuthenticateUser(string email, string password);
        public string GenerateJwtToken(User user);
    }
}
