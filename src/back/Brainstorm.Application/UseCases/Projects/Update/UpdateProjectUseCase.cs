using AutoMapper;
using Brainstorm.Communication.Requests;
using Brainstorm.Data.Context;
using Brainstorm.Exceptions.ExceptionsBase;
using Microsoft.EntityFrameworkCore;

namespace Brainstorm.Application.UseCases.Projects.Update;

public class UpdateProjectUseCase
{
    private IMapper _mapper;
    private BrainstormDbContext _dbContext;

    public UpdateProjectUseCase(BrainstormDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task Execute(int id, UpdateProjectRequest request)
    {
        var project = await _dbContext.Projects.FirstOrDefaultAsync(project => project.Id == id);

        if (project is null) throw new NotFoundException(ResourceErrorMessages.PROJECT_NOT_FOUND);

        _mapper.Map(request, project);
        await _dbContext.SaveChangesAsync();
    }
}
