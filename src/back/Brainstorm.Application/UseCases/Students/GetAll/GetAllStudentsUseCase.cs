using AutoMapper;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Entities;
using Microsoft.AspNetCore.Identity;

namespace Brainstorm.Application.UseCases.Students.GetAll;

public class GetAllStudentsUseCase
{
    private UserManager<Student> _userManager;
    private IMapper _mapper;

    public GetAllStudentsUseCase(UserManager<Student> userManager, IMapper mapper)
    {
        _userManager = userManager;
        _mapper = mapper;
    }

    public IEnumerable<GetStudentShortResponse> Execute()
    {
        var students = _mapper.Map<List<GetStudentShortResponse>>(_userManager.Users.ToList());

        return students;
    }
}
