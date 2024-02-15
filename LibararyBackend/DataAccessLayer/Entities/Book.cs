using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Entities
{
    public class Book
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string? Title { get; set; }

        [Required]
        public string? ImageLink { get; set; }

        [Required,StringLength(50)]
        public string? Author { get; set; }
        [Required,StringLength(50)]
        public string? Genre { get; set; }

         public string? Description { get; set; }

        public bool IsBookAvailable { get; set; }

        [Required]
        public int Rating { get; set; }
        [Required]
        public int Lent_By_User_Id { get; set; }
        [Required]

        public int Currently_Borrowed_By_User_Id { get; set; }


    }
}
