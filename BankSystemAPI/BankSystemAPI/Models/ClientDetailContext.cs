using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankSystemAPI.Models
{
    public class ClientDetailContext:DbContext
    {
        public ClientDetailContext(DbContextOptions<ClientDetailContext> options):base (options)
        {

        }
        public DbSet<ClientDetail> ClientDetail { get; set; }

    }
}
