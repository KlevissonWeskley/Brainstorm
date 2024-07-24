namespace Brainstorm.Communication.Requests;

public class CreateRatingRequest
{
    public int Value { get; set; }
    public string StudentId { get; set; }
    public int ProjectId { get; set; }
}