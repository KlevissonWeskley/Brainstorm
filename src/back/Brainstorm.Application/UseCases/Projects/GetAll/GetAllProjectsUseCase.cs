using AutoMapper;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Brainstorm.Application.UseCases.Projects.GetAll;

public class GetAllProjectsUseCase
{
    private IMapper _mapper;
    private BrainstormDbContext _dbContext;

    public GetAllProjectsUseCase(BrainstormDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public IEnumerable<GetProjectsResponse> Execute()
    {
        var projects = _dbContext.Projects
           .Include(project => project.Student) 
           .Include(project => project.Ratings) 
           .ToList();

        return _mapper.Map<List<GetProjectsResponse>>(projects);
    }
}
