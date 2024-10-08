﻿using AutoMapper;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Context;
using Brainstorm.Exceptions.ExceptionsBase;
using Microsoft.EntityFrameworkCore;

namespace Brainstorm.Application.UseCases.Projects.GetById;

public class GetProjectByIdUseCase
{
    private IMapper _mapper;
    private BrainstormDbContext _dbContext;

    public GetProjectByIdUseCase(BrainstormDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public GetProjectsResponse Execute(int id)
    {
        var project = _dbContext
            .Projects
            .Include(project => project.Student)
            .Include(project => project.Ratings)
            .FirstOrDefault(project => project.Id == id);

        if (project is null) throw new NotFoundException(ResourceErrorMessages.PROJECT_NOT_FOUND);

        return _mapper.Map<GetProjectsResponse>(project);
    }
}
