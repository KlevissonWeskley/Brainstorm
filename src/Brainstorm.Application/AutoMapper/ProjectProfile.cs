using AutoMapper;
using Brainstorm.Communication.Requests;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Entities;

namespace Brainstorm.Application.AutoMapper;

public class ProjectProfile : Profile
{
    public ProjectProfile()
    {
        CreateMap<CreateProjectRequest, Project>();
        CreateMap<UpdateProjectRequest, Project>();

        CreateMap<Project, GetProjectShortResponse>();

        CreateMap<Project, GetProjectsResponse>()
           .ForMember(dest => dest.Student, opt => opt.MapFrom(src => src.Student))
           .ForMember(dest => dest.Ratings, opt => opt.MapFrom(src => src.Ratings));

        CreateMap<Student, GetStudentShortResponse>(); 
        CreateMap<Rating, GetRatingResponse>();
    }
}
