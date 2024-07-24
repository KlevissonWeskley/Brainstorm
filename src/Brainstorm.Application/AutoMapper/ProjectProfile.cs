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
        CreateMap<Project, GetProjectsResponse>();
    }
}
