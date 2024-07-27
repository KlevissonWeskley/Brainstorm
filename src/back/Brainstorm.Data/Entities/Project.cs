using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Brainstorm.Data.Entities;

public class Project
{
    [Key]
    public int Id { get; set; }
    public string Content { get; set; }
    [ForeignKey(nameof(Student))]
    public string StudentId { get; set; }
    public Student Student { get; set; }
    public IList<Rating> Ratings { get; set; } = [];
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; }
}
