using Brainstorm.Application.UseCases.Students.Create;
using Brainstorm.Communication.Requests;
using Microsoft.AspNetCore.Mvc;

namespace Brainstorm.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StudentsController : ControllerBase
{
    private CreateStudentUseCase _studentUseCase;

    public StudentsController(CreateStudentUseCase studentUseCase)
    {
        _studentUseCase = studentUseCase;
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateStudentRequest request)
    {
        try
        {
            var result = await _studentUseCase.Execute(request);

            return Created(string.Empty, result);
        }
        catch (Exception ex)
        {
            throw new ApplicationException(ex.Message);
        }
    }
}
