using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankSystemAPI.Models;

namespace BankSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientDetailsController : ControllerBase
    {
        private readonly ClientDetailContext _context;

        public ClientDetailsController(ClientDetailContext context)
        {
            _context = context;
        }

        // GET: api/ClientDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientDetail>>> GetClientDetail()
        {
            return await _context.ClientDetail.ToListAsync();
        }

        // GET: api/ClientDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClientDetail>> GetClientDetail(int id)
        {
            var clientDetail = await _context.ClientDetail.FindAsync(id);

            if (clientDetail == null)
            {
                return NotFound();
            }

            return clientDetail;
        }

        // PUT: api/ClientDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClientDetail(int id, ClientDetail clientDetail)
        {
            if (id != clientDetail.IMDB)
            {
                return BadRequest();
            }

            _context.Entry(clientDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ClientDetails
        [HttpPost]
        public async Task<ActionResult<ClientDetail>> PostClientDetail(ClientDetail clientDetail)
        {
            _context.ClientDetail.Add(clientDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClientDetail", new { id = clientDetail.IMDB }, clientDetail);
        }

        // DELETE: api/ClientDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClientDetail>> DeleteClientDetail(int id)
        {
            var clientDetail = await _context.ClientDetail.FindAsync(id);
            if (clientDetail == null)
            {
                return NotFound();
            }

            _context.ClientDetail.Remove(clientDetail);
            await _context.SaveChangesAsync();

            return clientDetail;
        }

        private bool ClientDetailExists(int id)
        {
            return _context.ClientDetail.Any(e => e.IMDB == id);
        }
    }
}
