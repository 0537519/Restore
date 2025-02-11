using System;

namespace API.Entities.OrderAggregate;

public class OrderItem
{
    public int Id { get; set; }
    public required ProductItemOrdered MyProperty { get; set; }
    public long Price { get; set; }
    public int Quantity { get; set; }
}
