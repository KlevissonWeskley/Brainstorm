using AutoMapper;
using Brainstorm.Communication.Requests;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Entities;

namespace Brainstorm.Application.AutoMapper;

public class StudentProfile : Profile
{
    public StudentProfile()
    {
        CreateMap<CreateStudentRequest, Student>();
        CreateMap<Student, GetStudentResponse>();
    }
}
