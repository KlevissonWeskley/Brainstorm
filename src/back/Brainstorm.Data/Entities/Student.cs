using Microsoft.AspNetCore.Identity;

namespace Brainstorm.Data.Entities;

public class Student : IdentityUser
{
    public IList<Project> Projects { get; set; } = [];
    public IList<Rating> Ratings { get; set; } = [];

    public Student() : base() { }
}
