using Brainstorm.Application.UseCases.Students.Login;
using Brainstorm.Communication.Requests;
using Brainstorm.Data.Entities;
using Brainstorm.Exceptions.ExceptionsBase;
using Microsoft.AspNetCore.Identity;

namespace Brainstorm.Application.UseCases.Students.Authenticate;

public class AuthenticateStudentUseCase
{
    private SignInManager<Student> _signInManager;
    private TokenService _tokenService;

    public AuthenticateStudentUseCase(SignInManager<Student> signInManager, TokenService tokenService)
    {
        _signInManager = signInManager;
        _tokenService = tokenService;
    }

    public async Task<string> Execute(AuthenticateStudentRequest request)
    {
        var result = await _signInManager.PasswordSignInAsync(request.Username, request.Password, false, false);

        if (!result.Succeeded)
        {
            throw new UnauthorizedException(ResourceErrorMessages.STUDENT_NOT_AUTHENTICATED);
        }

        var student = _signInManager
            .UserManager
            .Users
            .FirstOrDefault(user => user.NormalizedUserName == request.Username.ToUpper());

        var token = _tokenService.GenerateToken(student);

        return token;
    }

}
