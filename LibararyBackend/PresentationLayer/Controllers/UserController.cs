using BusinessLogicLayer.Jwt_Token;
using BusinessLogicLayer.Service.User_Service;
using DataAccessLayer.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        private readonly IAuthenticateService _authenticationService;
        public UserController(IUserService userService, IAuthenticateService authenticationService)
        {
            _userService = userService;
            _authenticationService = authenticationService;
        }
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            try
            {
                var user = _userService.GetUserById(id);
                return (user == null) ? NotFound() : Ok(user);
            }
            catch (Exception) 
            {
                return StatusCode(500, "An error has Occurred");
            }
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] User user)
        {
            try
            {
                if (id != user.Id)
                {
                    return BadRequest();
                }
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _userService.UpdateUser(user);
                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has Occurred");
            }
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginModel model)
        {
            if(model==null || string.IsNullOrEmpty(model.Password) || string.IsNullOrEmpty(model.Email)){
                return BadRequest("Email and Password are required");
            }
            // Call your authentication service in BLL to validate user credentials
            var user = _authenticationService.AuthenticateUser(model.Email, model.Password);

            if (user == null)
            {
                // Authentication failed
                return Unauthorized("Invalid credentials");
            }

            // Authentication successful, generate JWT token
            var token = _authenticationService.GenerateJwtToken(user);

            // Return the token to the client
            return Ok(new { Token = token });
        } 

    }
}
