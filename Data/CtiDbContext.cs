using CTI.Models;
using Microsoft.EntityFrameworkCore;

namespace CinemaAPi.Data
{
    public class CtiDbContext : DbContext
    {
        public DbSet<Alert> Alerts { get; set; }


        public CtiDbContext(DbContextOptions<CtiDbContext> options) : base(options)
        {

        }
    }
}
