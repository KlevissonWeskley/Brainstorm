using System.ComponentModel.DataAnnotations;

namespace Brainstorm.Communication.Requests;

public class UpdateProjectRequest
{
    [Required]
    [MinLength(5)]
    [MaxLength(250)]
    public string Content { get; set; }
}
