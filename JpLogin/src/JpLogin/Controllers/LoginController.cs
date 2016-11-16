using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JpLogin.Models;
using JpLogin.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace JpLogin.Controllers
{
    [Route("api/[controller]"), ]
    public class LoginController : Controller
    {
        private readonly IRegistrationService registrationService;

        public LoginController([FromServices] IRegistrationService regSvc)
        {

        }

        [HttpGet]
        public string Get()
        {
            return "test";
        }


        // POST api/values
        [HttpPost]
        public void Post([FromBody]Registration value)
        {
            this.registrationService.RegisterUser(value);
        }

        [HttpPost]
        [Route("User")]
        public IActionResult VerifyUserName([FromBody] Registration value)
        {
            if (this.registrationService.DoesUserExist(value))
            {
                return Ok(true);
            }
            else
            {
                return NoContent();
            }
        }

        [HttpPost]
        [Route("Verify")]
        public async Task<IActionResult> VerifyCredentials([FromBody] Registration value)
        {
            if (await this.registrationService.IsRegistrationValid(value))
            {
                return Ok(true);
            }
            else
            {
                return NotFound("Invalid Credentials");
            }
        }
    }
}
