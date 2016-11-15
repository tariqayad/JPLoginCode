using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JpLogin.Models;

namespace JpLogin.Services
{
    public class RegistrationService: IRegistrationService
    {
        public void RegisterUser(Registration userRegisteration)
        {

        }

        public bool DoesUserExist(string userName)
        {
            return false;
        }

        public bool IsRegistrationValid(Registration userRegistration)
        {
            return false;
        }

    }
}
