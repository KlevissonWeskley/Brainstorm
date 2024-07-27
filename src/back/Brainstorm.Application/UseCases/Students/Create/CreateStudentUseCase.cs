using AutoMapper;
using Brainstorm.Application.UseCases.Students.Login;
using Brainstorm.Communication.Requests;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Entities;
using Brainstorm.Exceptions.ExceptionsBase;
using Microsoft.AspNetCore.Identity;

namespace Brainstorm.Application.UseCases.Students.Create;

public class CreateStudentUseCase
{
    private IMapper _mapper;
    private UserManager<Student> _userManager;

    public CreateStudentUseCase(IMapper mapper, UserManager<Student> userManager)
    {
        _mapper = mapper;
        _userManager = userManager;
    }

    public async Task<GetStudentResponse> Execute(CreateStudentRequest request)
    {
        var studentAlreadyExists = await _userManager.FindByNameAsync(request.Username);

        if (studentAlreadyExists is not null) throw new ConflictException(ResourceErrorMessages.STUDENT_ALREADY_EXISTS);

        var student = _mapper.Map<Student>(request);

        await _userManager.CreateAsync(student, request.Password);

        return _mapper.Map<GetStudentResponse>(student);
    }
}
