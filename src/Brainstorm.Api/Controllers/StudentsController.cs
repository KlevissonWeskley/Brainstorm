using Brainstorm.Application.UseCases.Students.Authenticate;
using Brainstorm.Application.UseCases.Students.Create;
using Brainstorm.Application.UseCases.Students.Delete;
using Brainstorm.Application.UseCases.Students.GetAll;
using Brainstorm.Communication.Requests;
using Brainstorm.Exceptions.ExceptionsBase;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Brainstorm.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StudentsController : ControllerBase
{
    private CreateStudentUseCase _createStudentUseCase;
    private AuthenticateStudentUseCase _authenticateStudentUseCase;
    private GetAllStudentsUseCase _getAllStudentsUseCase;
    private DeleteAccountUseCase _deleteAccountUseCase;

    public StudentsController
    (
        CreateStudentUseCase studentUseCase, 
        AuthenticateStudentUseCase authenticateStudentUseCase, 
        GetAllStudentsUseCase getAllStudentsUseCase, 
        DeleteAccountUseCase deleteAccountUseCase
    )
    {
        _createStudentUseCase = studentUseCase;
        _authenticateStudentUseCase = authenticateStudentUseCase;
        _getAllStudentsUseCase = getAllStudentsUseCase;
        _deleteAccountUseCase = deleteAccountUseCase;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateStudentRequest request)
    {
        try
        {
            var result = await _createStudentUseCase.Execute(request);

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

    [HttpGet]
    public IActionResult GetAll()
    {
        var result = _getAllStudentsUseCase.Execute();

        return Ok(result);
    }

    [Authorize]
    [HttpDelete("deleteAccount/{id}")]
    public async Task<IActionResult> Delete(string id, [FromBody] DeleteAccountRequest request)
    {
        try
        {
            await _deleteAccountUseCase.Execute(id, request);

            return NoContent();
        }
        catch (NotFoundException ex)
        {
            return NotFound(ex.Message);
        }
        catch (UnauthorizedException ex)
        {
            return Unauthorized(ex.Message);
        }
    }
}
