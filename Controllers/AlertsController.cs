using CinemaAPi.Data;
using CsvHelper;
using CTI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Text;

namespace CTI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertsController : ControllerBase
    {
        private CtiDbContext _context;

        public AlertsController(CtiDbContext c)
        {
            _context = c;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Alerts);
        }

        [HttpGet("[action]")]
        public IActionResult GetCsv()
        {
            var sb = new StringBuilder();
            var sw = new StringWriter(sb);
            using (var csv = new CsvWriter(sw, CultureInfo.InvariantCulture))
            {
                csv.WriteRecords(_context.Alerts);
            }

            var bytes = Encoding.UTF8.GetBytes(sw.ToString());

            return Ok(File(bytes, "text/csv", "alerts.csv"));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Alert alert)
        {
            alert.TimeCreated = DateTime.Now;

            _context.Alerts.Add(alert);
            _context.SaveChanges();

            return StatusCode(StatusCodes.Status201Created);
        }
    }
}
