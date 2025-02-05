using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController(StoreContext context) : BaseApiController
    {

        [HttpGet]
        public async Task <ActionResult<List<Product>>> GetProducts(string orderBy)
        {
            var query=context.Products.AsQueryable();

            query = orderBy switch
            {
                "price"=>query.OrderBy(x=>x.Price),
                "priceDesc"=>query.OrderByDescending(x=>x.Price),
                _=>query.OrderBy(x=>x.Name)
            };
            return await query.ToListAsync();
        }

       [HttpGet("{id}")] //api/products/2
       public async Task <ActionResult<Product>> GetProduct(int id)
       {
           var product = await context.Products.FindAsync(id);
           if (product == null) return NotFound();
           return product;
       }
    }
}
