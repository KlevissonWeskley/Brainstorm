using AutoMapper;
using Brainstorm.Communication.Requests;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Context;
using Brainstorm.Data.Entities;

namespace Brainstorm.Application.UseCases.Projects.Create;

public class CreateProjectUseCase
{
    private IMapper _mapper;
    private BrainstormDbContext _dbContext;

    public CreateProjectUseCase(BrainstormDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<GetProjectShortResponse> Execute(CreateProjectRequest request)
    {
        var project = _mapper.Map<Project>(request);

        await _dbContext.Projects.AddAsync(project);
        await _dbContext.SaveChangesAsync();

        return _mapper.Map<GetProjectShortResponse>(project);
    }
}
