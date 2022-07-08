namespace WebApi
{
    public class WeatherService
    {
        public WeatherForecast[] WeatherForecast { get; set; }

        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };



        public WeatherService()
        {
            int idCounter = 0;
            WeatherForecast = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Id = idCounter++,
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
