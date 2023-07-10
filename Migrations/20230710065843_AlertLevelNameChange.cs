using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CTI.Migrations
{
    /// <inheritdoc />
    public partial class AlertLevelNameChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "alertLevel",
                table: "Alerts",
                newName: "AlertLevel");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AlertLevel",
                table: "Alerts",
                newName: "alertLevel");
        }
    }
}
