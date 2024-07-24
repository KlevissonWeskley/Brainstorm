using Brainstorm.Data.Entities;

namespace Brainstorm.Communication.Responses;

public class GetProjectsResponse
{
    public int Id { get; set; }
    public string Content { get; set; }
    public Student Student { get; set; }
    public IEnumerable<Rating> Ratings { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}
