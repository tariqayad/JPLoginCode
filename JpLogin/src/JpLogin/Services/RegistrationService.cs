using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JpLogin.Interfaces;
using JpLogin.Models;

namespace JpLogin.Services
{
    public class RegistrationService: IRegistrationService
    {
        IDataRepository datarepository;

        public RegistrationService(IDataRepository dataRepository)
        {
            this.datarepository = dataRepository;
        }

        public void RegisterUser(Registration userRegisteration)
        {

        }

        public bool DoesUserExist(Registration userRegistration)
        {
            if (!string.IsNullOrEmpty(userRegistration.UserName))
            {
                return this.datarepository.DoesRegistrationExist(userRegistration.UserName);
            }
            return false;
        }

        /// <summary>
        /// Validates the user name and password provided by the login
        /// </summary>
        /// <param name="userRegistration">The user registration.</param>
        /// <returns></returns>
        public async Task<bool> IsRegistrationValid(Registration userRegistration)
        {
            if (!string.IsNullOrEmpty(userRegistration.UserName))
            {
                var savedRegistration = await this.datarepository.GetRegistration(userRegistration.UserName);

                if (savedRegistration.PasswordHash == userRegistration.PasswordHash)
                {
                    return true;                    
                }
            }
            return false;
        }

    }
}
