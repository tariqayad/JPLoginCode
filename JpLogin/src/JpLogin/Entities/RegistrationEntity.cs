using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JpLogin.Common;
using JpLogin.Models;
using Microsoft.WindowsAzure.Storage.Table;

namespace JpLogin.Entities
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="Microsoft.WindowsAzure.Storage.Table.TableEntity" />
    public class RegistrationEntity: TableEntity
    {
        public RegistrationEntity()
        {

        }

        public static RegistrationEntity FromModel(Registration model)
        {
            return new RegistrationEntity(model.UserName)
            {
                PasswordHash = model.PasswordHash,
                MobileNumber = model.MobileNumber
            };
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="RegistrationEntity"/> class.
        /// </summary>
        /// <param name="username">The username.</param>
        public RegistrationEntity(string username)
        {
            this.PartitionKey = Constants.PartitionKey;
            this.RowKey = username;
        }

        /// <summary>
        /// Gets or sets the name of the user.
        /// </summary>
        /// <value>
        /// The name of the user.
        /// </value>
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
        /// <summary>
        /// Gets or sets the mobile number.
        /// </summary>
        /// <value>
        /// The mobile number.
        /// </value>
        public string MobileNumber { get; set; }



        public Registration ToModel()
        {
            return new Registration()
            {
                UserName = this.UserName,
                PasswordHash = this.PasswordHash,
                MobileNumber = this.MobileNumber
            };
        }
    }
}
