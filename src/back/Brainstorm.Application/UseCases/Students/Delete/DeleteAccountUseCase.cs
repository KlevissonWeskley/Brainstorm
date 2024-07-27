using Brainstorm.Communication.Requests;
using Brainstorm.Data.Entities;
using Brainstorm.Exceptions.ExceptionsBase;
using Microsoft.AspNetCore.Identity;

namespace Brainstorm.Application.UseCases.Students.Delete;

public class DeleteAccountUseCase
{
    private UserManager<Student> _userManager;
    private SignInManager<Student> _signInManager;

    public DeleteAccountUseCase(UserManager<Student> userManager, SignInManager<Student> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    public async Task Execute(string id, DeleteAccountRequest request)
    {
        var student = await _userManager.FindByIdAsync(id);

        if (student is null) throw new NotFoundException(ResourceErrorMessages.STUDENT_NOT_FOUND);

        var passwordBeat = await _signInManager.CheckPasswordSignInAsync(student, request.Password, false);

        if (!passwordBeat.Succeeded) throw new UnauthorizedException(ResourceErrorMessages.INVALID_PASSWORD);

        await _userManager.DeleteAsync(student);
    }
}
