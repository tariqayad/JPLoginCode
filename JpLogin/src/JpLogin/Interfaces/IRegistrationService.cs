using JpLogin.Models;

namespace JpLogin.Services
{
    public interface IRegistrationService
    {
        bool DoesUserExist(string userName);
        bool IsRegistrationValid(Registration userRegistration);
        void RegisterUser(Registration userRegisteration);
    }
}