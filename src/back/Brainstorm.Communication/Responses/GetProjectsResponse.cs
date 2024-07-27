namespace Brainstorm.Communication.Responses;

public class GetProjectsResponse
{
    public int Id { get; set; }
    public string Content { get; set; }
    public GetStudentShortResponse Student { get; set; }
    public IEnumerable<GetRatingResponse> Ratings { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}
