using AutoMapper;
using Brainstorm.Application.UseCases.Projects.Create;
using Brainstorm.Application.UseCases.Projects.GetAll;
using Brainstorm.Application.UseCases.Projects.GetById;
using Brainstorm.Communication.Requests;
using Brainstorm.Data.Context;
using Microsoft.AspNetCore.Mvc;

namespace Brainstorm.Api.Controllers;

// Continuar com CRUD de projetos, avaliações e login de alunos 

[Route("api/[controller]")]
[ApiController]
public class ProjectsController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly BrainstormDbContext _dbContext;

    public ProjectsController(BrainstormDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateProjectRequest request)
    {
        try
        {
            var useCase = new CreateProjectUseCase(_dbContext, _mapper);

            var result = await useCase.Execute(request);

            return Created(string.Empty, result);
        }
        catch (Exception ex)
        {
            throw new ApplicationException(ex.Message);
        }
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        try
        {
            var useCase = new GetAllProjectsUseCase(_dbContext, _mapper);

            var result = useCase.Execute();

            return Ok(result);
        }
        catch (Exception ex)
        {
            throw new ApplicationException(ex.Message);
        }
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        try
        {
            var useCase = new GetProjectByIdUseCase(_dbContext, _mapper);

            var result = useCase.Execute(id);

            return Ok(result);
        }
        catch (Exception ex)
        {
            throw new ApplicationException(ex.Message);
        }
    }
}
