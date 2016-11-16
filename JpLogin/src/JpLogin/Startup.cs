using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JpLogin.Common;
using JpLogin.DataAccess;
using JpLogin.Interfaces;
using JpLogin.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;

namespace JpLogin
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json");

            this.Configuration = builder.Build();
        }
        public IConfigurationRoot Configuration { get; }

        /// <summary>
        /// Configures the services.
        /// </summary>
        /// <param name="services">The services.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            // Configure Settings
            services.AddOptions();
            services.Configure<StorageSettings>(Configuration.GetSection("Storage"));            

            var mvcCore = services.AddMvcCore();

            // Add dependancy injection
            services.AddTransient<IDataRepository, AzureTableStorageRepository>();
            services.AddTransient<IRegistrationService, RegistrationService>();           

            // Setup WebApi            
            mvcCore.AddJsonFormatters(options => options.ContractResolver = new CamelCasePropertyNamesContractResolver());    
        }

        /// <summary>
        /// Configures the http pipeline.
        /// </summary>
        /// <param name="app">The application.</param>
        /// <param name="env">The env.</param>
        /// <param name="loggerFactory">The logger factory.</param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            // Load Configuration Settings
            var configBuilder = new ConfigurationBuilder();

            // Initialize MVC and Static Files
            app.UseMvc();
            app.UseStaticFiles();
        }
    }
}
