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
        public string MobileNumber { get; set; }
    }
}
