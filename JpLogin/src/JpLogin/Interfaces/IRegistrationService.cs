using System.Threading.Tasks;
using JpLogin.Models;

namespace JpLogin.Services
{
    public interface IRegistrationService
    {
        bool DoesUserExist(Registration registration);
        Task<bool> IsRegistrationValid(Registration userRegistration);
        void RegisterUser(Registration userRegisteration);
    }
}