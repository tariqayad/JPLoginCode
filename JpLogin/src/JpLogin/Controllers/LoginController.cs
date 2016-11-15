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
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        IRegistrationService registrationService;

        public LoginController(IRegistrationService registrationService)
        {
            this.registrationService = registrationService;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(string id, bool returnP)
        {
            if (returnP)
            {

            }

            // TODO: Refactor and add seperate action for this
            return this.registrationService.DoesUserExist(id) == true? "t": "f";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Registration value)
        {
            this.registrationService.RegisterUser(value);
        }

        public bool Post([FromBody] string userId)
        {
            return this.registrationService.DoesUserExist(userId);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

     
    }
}
