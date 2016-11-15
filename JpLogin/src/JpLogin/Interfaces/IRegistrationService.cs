using JpLogin.Models;

namespace JpLogin.Services
{
    public interface IRegistrationService
    {
        bool DoesUserExist(Registration registration);
        bool IsRegistrationValid(Registration userRegistration);
        void RegisterUser(Registration userRegisteration);
    }
}