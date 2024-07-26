using Brainstorm.Application.UseCases.Students.Authenticate;
using Brainstorm.Application.UseCases.Students.Create;
using Brainstorm.Application.UseCases.Students.Delete;
using Brainstorm.Application.UseCases.Students.GetAll;
using Brainstorm.Application.UseCases.Students.Login;
using Brainstorm.Data.Context;
using Brainstorm.Data.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles; 
        options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingDefault; 
    });

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<BrainstormDbContext>(
    opts =>
    {
        opts.UseSqlServer(builder.Configuration.GetConnectionString("DbConnection"));
    }
);

builder.Services
    .AddIdentity<Student, IdentityRole>()
    .AddEntityFrameworkStores<BrainstormDbContext>()
    .AddDefaultTokenProviders();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("CHAVETOKENSHOPAPI1234567890123456")),
        ValidateAudience = false,
        ValidateIssuer = false,
        ClockSkew = TimeSpan.Zero
    };
});

builder.Services.AddAuthorization();

// Students Use Cases 
builder.Services.AddScoped<CreateStudentUseCase>();
builder.Services.AddScoped<AuthenticateStudentUseCase>();
builder.Services.AddScoped<GetAllStudentsUseCase>();
builder.Services.AddScoped<DeleteAccountUseCase>();
builder.Services.AddScoped<TokenService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
