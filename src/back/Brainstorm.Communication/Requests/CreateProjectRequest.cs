using System.ComponentModel.DataAnnotations;

namespace Brainstorm.Communication.Requests;

public class CreateProjectRequest
{
    [Required]
    [MinLength(5)]
    [MaxLength(250)]
    public string Content { get; set; }
    [Required]
    public string StudentId { get; set; }
}
