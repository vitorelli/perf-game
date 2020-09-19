using Microsoft.AspNetCore.Mvc;
using Npgsql;
using System;
using System.Collections;
using System.Threading;
using System.Threading.Tasks;
using TestPerf.Model;

namespace TestPerf.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        [HttpPost]
        [Route("createProduct")]
        public async Task CreateProduct(ProductModel product, CancellationToken cancellationToken) 
        {
            var connString = "Host={HOST};Username={USERNAME};Password={PASSWORD};Database={DATABASE};SSL Mode=Require;Trust Server Certificate=true";

            await using var conn = new NpgsqlConnection(connString);
            await conn.OpenAsync(cancellationToken);

            await using (var cmd = new NpgsqlCommand("INSERT INTO test.perftest (\"name\", price, category, description)VALUES(@pname, @pprice, @pcategory, @pdesc);", conn))
            {
                cmd.Parameters.AddWithValue("pname", product.Name);
                cmd.Parameters.AddWithValue("pprice", product.Price);
                cmd.Parameters.AddWithValue("pcategory", product.Category);
                cmd.Parameters.AddWithValue("pdesc", product.Description);

                await cmd.ExecuteNonQueryAsync(cancellationToken);
            }

            await conn.CloseAsync();
        }

        [HttpGet]
        [Route("ping")]
        public Task<string> Ping()
        {
            return Task.FromResult("OK");
        }

        [HttpGet]
        [Route("listVars")]
        public IDictionary ListVars() 
        {
            var vars = Environment.GetEnvironmentVariables();

            return vars;
        }
    }
}
