using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Entities
{
    public class User
    {
        [Required]
      public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
        [Required]
        public int Token { get; set; }
        public int BooksBorrowed { get; set; }

        public int Books_Lent { get; set; }
        
        public string? UserImg { get; set; }

       
        public string? JwtToken { get; set; }

    }
}
