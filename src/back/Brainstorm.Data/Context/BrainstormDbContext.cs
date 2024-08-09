using Brainstorm.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Brainstorm.Data.Context;

public class BrainstormDbContext : IdentityDbContext<Student>
{
    public BrainstormDbContext(DbContextOptions<BrainstormDbContext> opts) : base(opts) { }

    public DbSet<Project> Projects { get; set; }
    public DbSet<Rating> Ratings { get; set; }

    // TODO: Resolver erro de deleção em cascata dos projetos
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder); 

        builder.Entity<Student>()
            .HasMany(s => s.Ratings)
            .WithOne(r => r.Student)
            .HasForeignKey(r => r.StudentId)
            .OnDelete(DeleteBehavior.NoAction);

        builder.Entity<Project>()
            .HasMany(p => p.Ratings)
            .WithOne(r => r.Project)
            .HasForeignKey(r => r.ProjectId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
