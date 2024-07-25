using AutoMapper;
using Brainstorm.Communication.Requests;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Entities;
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
        var student = _mapper.Map<Student>(request);

        var result = await _userManager.CreateAsync(student, request.Password);

        if (!result.Succeeded) throw new ApplicationException("Falha ao cadastrar estudante");

        return _mapper.Map<GetStudentResponse>(student);
    }
}
