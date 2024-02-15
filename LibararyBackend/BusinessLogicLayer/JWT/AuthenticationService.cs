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

namespace BusinessLogicLayer.JWT
{
    public class AuthenticationService
    {
      /*  private readonly string _secretKey = "your-secret-key"; // Replace with a secure secret key
        private readonly string _issuer = "your-issuer"; // Replace with your issuer
        private readonly IUserRepository _userRepository;

        public AuthenticationService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User AuthenticateUser(string email, string password)
        {

            // Assume you have a method in your DAL to retrieve a user by email and password
            User user = _userRepository.GetUserByEmailAndPasswordAsync(email, password);

            if (user == null)
            {
                throw new NotFoundException();
            }
            // Generate and assign JWT token to the user
            user.JwtToken = GenerateJwtToken(user);

            // Update the user in the database with the new token (you need to implement this)
            _userRepository.Update(user);
            return user;
        }

        public string GenerateJwtToken(User user)
        {

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_secretKey);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            };
            if(!string.IsNullOrEmpty(user.Name))
            {
                claims.Add(new Claim(ClaimTypes.Name, user.Name));
            }
            if(!string.IsNullOrEmpty(user.Email))
            {
                claims.Add(new Claim(ClaimTypes.Email, user.Email));
            }
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddHours(1), // Token expiration time
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Issuer = _issuer,
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        } */
    }
}
