using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class OrderEntityUpdated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MyProperty_ProductId",
                table: "OrderItem",
                newName: "ItemOrdered_ProductId");

            migrationBuilder.RenameColumn(
                name: "MyProperty_PictureUrl",
                table: "OrderItem",
                newName: "ItemOrdered_PictureUrl");

            migrationBuilder.RenameColumn(
                name: "MyProperty_Name",
                table: "OrderItem",
                newName: "ItemOrdered_Name");

            migrationBuilder.AlterColumn<string>(
                name: "PaymentIntentId",
                table: "Orders",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ItemOrdered_ProductId",
                table: "OrderItem",
                newName: "MyProperty_ProductId");

            migrationBuilder.RenameColumn(
                name: "ItemOrdered_PictureUrl",
                table: "OrderItem",
                newName: "MyProperty_PictureUrl");

            migrationBuilder.RenameColumn(
                name: "ItemOrdered_Name",
                table: "OrderItem",
                newName: "MyProperty_Name");

            migrationBuilder.AlterColumn<string>(
                name: "PaymentIntentId",
                table: "Orders",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");
        }
    }
}
