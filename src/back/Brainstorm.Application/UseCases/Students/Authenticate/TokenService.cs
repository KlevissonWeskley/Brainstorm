using Brainstorm.Data.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Brainstorm.Application.UseCases.Students.Login;

public class TokenService
{
    private IConfiguration _configuration;

    public TokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string GenerateToken(Student student)
    {
        var claims = new Claim[]
        {
            new Claim("username", student.UserName!),
            new Claim("sub", student.Id),
            new Claim("loginTimestamp", DateTime.UtcNow.ToString())
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("CHAVETOKENSHOPAPI1234567890123456"));

        var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken
         (
             expires: DateTime.Now.AddDays(3),
             claims: claims,
             signingCredentials: signingCredentials
         );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
