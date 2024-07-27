namespace Brainstorm.Communication.Responses;

public class GetStudentResponse
{
    public string Id { get; set; }
    public string Username { get; set; }
    public IEnumerable<GetProjectShortResponse> Projects { get; set; }
    public IEnumerable<GetRatingResponse> Ratings { get; set; }
}
