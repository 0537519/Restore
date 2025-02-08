using System;
using System.Net.Sockets;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }

    public required DbSet<Basket> Baskets{ get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.Entity<IdentityRole>()
           .HasData(
            new IdentityRole{Id="af4a8244-b1d8-495f-8925-5a19f6d6229f", Name="Member",NormalizedName="MEMBER"},
            new IdentityRole{Id="1a0f8489-3ed7-4099-9185-089d2b15d99c",Name="Admin",NormalizedName="ADMIN"}
           );
    }


}
