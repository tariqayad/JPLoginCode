using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using JpLogin.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JpLogin.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using JpLogin.Common;
using JpLogin.Entities;

namespace JpLogin.DataAccess
{
    public class AzureTableStorageRepository : IDataRepository
    {
        CloudTableClient cloudTableClient;

        /// <summary>
        /// Initializes a new instance of the <see cref="AzureTableStorageRepository"/> class.
        /// </summary>
        public AzureTableStorageRepository(IOptions<StorageSettings> settings)
        {
            var storageAccount = new CloudStorageAccount(
                new Microsoft.WindowsAzure.Storage.Auth.StorageCredentials(settings.Value.StorageName, settings.Value.StorageKey),true);
                //(settings["StorageName"], settings["StorageKey"]), true);

            this.cloudTableClient = storageAccount.CreateCloudTableClient();
        }

        /// <summary>
        /// Checks if the user registration exists in the table
        /// </summary>
        /// <param name="username">The username.</param>
        /// <returns></returns>
        public bool DoesRegistrationExist(string username)
        {
            return GetRegistration(username) != null;
        }

        /// <summary>
        /// Retrieves the registration by username
        /// </summary>
        /// <param name="username">The username.</param>
        /// <returns></returns>
        public async Task<Registration> GetRegistration(string username)
        {
            try
            {
                var table = this.cloudTableClient.GetTableReference(Constants.TableName);
                await table.CreateIfNotExistsAsync();

                TableOperation getRegistrationOperation = TableOperation.Retrieve<RegistrationEntity>(Constants.PartitionKey, username);

                var result = await table.ExecuteAsync(getRegistrationOperation);

                if (result != null)
                {
                    return ((RegistrationEntity)result.Result).ToModel();
                }
                else
                {
                    return null;
                }              
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Adds the user registration data to the table.
        /// </summary>
        /// <param name="registration">The registration.</param>
        public async void Register(Registration registration)
        {
            try
            {
                var table = this.cloudTableClient.GetTableReference(Constants.TableName);
                await table.CreateIfNotExistsAsync();

                var registrationEntity = RegistrationEntity.FromModel(registration);
                TableOperation addRegistrationOperation = TableOperation.InsertOrReplace(registrationEntity);

                await table.ExecuteAsync(addRegistrationOperation);

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
