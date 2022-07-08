using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    //[Route("api/Weather")]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly WeatherService _weatherService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, WeatherService service)
        {
            _logger = logger;
            _weatherService = service;
            
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {

            return _weatherService.WeatherForecast;
        }

        //[HttpGet]
        //public JsonResult Get()
        //{
        //    var data = Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        Date = DateTime.Now.AddDays(index),
        //        TemperatureC = Random.Shared.Next(-20, 55),
        //        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //    return new JsonResult(data);
        //}

        [HttpGet]
        [Route("{id}")]
        public WeatherForecast GetWeather(int id)
        {
            return _weatherService.WeatherForecast.FirstOrDefault(x => x.Id.Equals(id));
        }

    }
}