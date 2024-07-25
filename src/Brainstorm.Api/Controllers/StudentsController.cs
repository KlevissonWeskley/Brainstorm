using Brainstorm.Application.UseCases.Students.Authenticate;
using Brainstorm.Application.UseCases.Students.Create;
using Brainstorm.Communication.Requests;
using Brainstorm.Exceptions.ExceptionsBase;
using Microsoft.AspNetCore.Mvc;

namespace Brainstorm.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StudentsController : ControllerBase
{
    private CreateStudentUseCase _studentUseCase;
    private AuthenticateStudentUseCase _authenticateStudentUseCase;

    public StudentsController(CreateStudentUseCase studentUseCase, AuthenticateStudentUseCase authenticateStudentUseCase)
    {
        _studentUseCase = studentUseCase;
        _authenticateStudentUseCase = authenticateStudentUseCase;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateStudentRequest request)
    {
        try
        {
            var result = await _studentUseCase.Execute(request);

            return Created(string.Empty, result);
        }
        catch (ConflictException ex)
        {
            return Conflict(ex.Message);
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> Authenticate([FromBody] AuthenticateStudentRequest request)
    {
        try
        {
            var result = await _authenticateStudentUseCase.Execute(request);

            return Created(string.Empty, result);
        }
        catch (UnauthorizedException ex)
        {
            return Unauthorized(ex.Message);
        }
    }
}
