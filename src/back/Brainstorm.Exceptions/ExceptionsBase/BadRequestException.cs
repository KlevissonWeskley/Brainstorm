namespace Brainstorm.Exceptions.ExceptionsBase;

public class BadRequestException : Exception
{
    public BadRequestException(string message) : base(message)
    {
    }
}
