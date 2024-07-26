using AutoMapper;
using Brainstorm.Communication.Requests;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Context;
using Brainstorm.Data.Entities;
using Brainstorm.Exceptions.ExceptionsBase;

namespace Brainstorm.Application.UseCases.Ratings.Create;

public class CreateRatingUseCase
{
    private BrainstormDbContext _dbContext;
    private IMapper _mapper;

    public CreateRatingUseCase(BrainstormDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<GetRatingResponse> Execute(CreateRatingRequest request)
    {
        Validate(request);

        var rating = _mapper.Map<Rating>(request);

        await _dbContext.Ratings.AddAsync(rating);
        await _dbContext.SaveChangesAsync();

        return _mapper.Map<GetRatingResponse>(rating);
    }

    private void Validate(CreateRatingRequest request)
    {
        if (!int.TryParse(request.Value.ToString(), out _)) throw new BadRequestException(ResourceErrorMessages.VALIDATION_ERROR); 
    }
}
