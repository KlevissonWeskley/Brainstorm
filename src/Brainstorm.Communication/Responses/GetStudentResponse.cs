using Brainstorm.Data.Entities;

namespace Brainstorm.Communication.Responses;

public class GetStudentResponse
{
    public string Id { get; set; }
    public string Username { get; set; }
    public IEnumerable<Project> Projects { get; set; }
    public IEnumerable<Rating> Ratings { get; set; }
}
