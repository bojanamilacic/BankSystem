using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankSystemAPI.Models
{
    public class ClientDetail
    {
        [Key]
        public int IMDB { get; set; }
        [Required]
        [Column(TypeName ="varchar(15)")]
       
        public string FirstName { get; set; }
        [Required]
        [Column(TypeName = "varchar(15)")]
        public string LastName { get; set; }
        
    }
}
