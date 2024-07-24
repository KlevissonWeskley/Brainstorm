using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Brainstorm.Data.Entities;

public class Rating
{
    [Key]
    public int Id { get; set; }
    public int Value { get; set; }
    [ForeignKey(nameof(Student))]
    public string StudentId { get; set; }
    public Student Student { get; set; }
    [ForeignKey(nameof(Project))]
    public int ProjectId { get; set; }
    public Project Project { get; set; }
}
