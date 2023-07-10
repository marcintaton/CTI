namespace CTI.Models
{
    public static class AlertLevel
    {
        public static string INFO = "INFO";
        public static string WARNING = "WARNING";
        public static string ERROR = "ERROR";
        public static string CRITICAL = "CRITICAL";
    }

    public class Alert
    {
        public int Id { get; set; }
        public string AlertLevel { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime TimeCreated { get; set; }
        public DateTime TimeIssued { get; set; }
    }
}
