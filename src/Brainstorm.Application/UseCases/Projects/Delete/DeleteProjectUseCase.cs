using Brainstorm.Data.Context;
using Brainstorm.Exceptions.ExceptionsBase;
using Microsoft.EntityFrameworkCore;

namespace Brainstorm.Application.UseCases.Projects.Delete;

public class DeleteProjectUseCase
{
    private BrainstormDbContext _dbContext;

    public DeleteProjectUseCase(BrainstormDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task Execute(int id)
    {
        var project = await _dbContext.Projects.FirstOrDefaultAsync(project => project.Id == id);

        if (project is null) throw new NotFoundException(ResourceErrorMessages.PROJECT_NOT_FOUND);

        _dbContext.Projects.Remove(project);
        await _dbContext.SaveChangesAsync();
    }
}
