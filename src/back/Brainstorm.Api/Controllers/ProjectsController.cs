using AutoMapper;
using Azure.Core;
using Brainstorm.Application.UseCases.Projects.Create;
using Brainstorm.Application.UseCases.Projects.Delete;
using Brainstorm.Application.UseCases.Projects.GetAll;
using Brainstorm.Application.UseCases.Projects.GetById;
using Brainstorm.Application.UseCases.Projects.Update;
using Brainstorm.Application.UseCases.Ratings.Create;
using Brainstorm.Communication.Requests;
using Brainstorm.Data.Context;
using Brainstorm.Exceptions.ExceptionsBase;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Brainstorm.Api.Controllers;

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

    [Authorize]
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
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var useCase = new GetAllProjectsUseCase(_dbContext, _mapper);

        var result = useCase.Execute();

        return Ok(result);
    }

    [Authorize]
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        try
        {
            var useCase = new GetProjectByIdUseCase(_dbContext, _mapper);

            var result = useCase.Execute(id);

            return Ok(result);
        }
        catch (NotFoundException ex)
        {
           return NotFound(ex.Message);
        }
    }

    [Authorize]
    [HttpPatch("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] UpdateProjectRequest request)
    {
        try
        {
            var useCase = new UpdateProjectUseCase(_dbContext, _mapper);

            await useCase.Execute(id, request);

            return NoContent();
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            var useCase = new DeleteProjectUseCase(_dbContext);

            await useCase.Execute(id);

            return NoContent();
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [Authorize]
    [HttpPost("rating")]
    public async Task<IActionResult> Rating(CreateRatingRequest request)
    {
        try
        {
            var useCase = new CreateRatingUseCase(_dbContext, _mapper);

            var result = await useCase.Execute(request);

            return Created(string.Empty, result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}
