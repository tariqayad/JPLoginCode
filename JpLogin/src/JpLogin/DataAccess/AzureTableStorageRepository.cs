using JpLogin.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JpLogin.Models;

namespace JpLogin.DataAccess
{
    public class AzureTableStorageRepository : IDataRepository
    {
        public bool DoesRegistrationExist(string username)
        {
            throw new NotImplementedException();
        }

        public Registration GetRegistration(string username)
        {
            throw new NotImplementedException();
        }

        public void Register(Registration registration)
        {
            throw new NotImplementedException();
        }
    }
}
