using JpLogin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JpLogin.Interfaces
{
    interface IDataRepository
    {
        Registration GetRegistration(string username);
        void Register(Registration registration);
        bool DoesRegistrationExist(string username);
    }
}
