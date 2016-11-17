using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JpLogin.Models
{
    public class Registration
    {
        public string UserName { get; set; }

        public string PasswordHash { get; set; }

        public int CountryCode { get; set; }

        public int MobileNumber { get; set; }

        public string AuthyCode { get; set; }
    }
}
