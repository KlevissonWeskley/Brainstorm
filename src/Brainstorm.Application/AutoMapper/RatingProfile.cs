using AutoMapper;
using Brainstorm.Communication.Requests;
using Brainstorm.Communication.Responses;
using Brainstorm.Data.Entities;

namespace Brainstorm.Application.AutoMapper;

public class RatingProfile : Profile
{
    public RatingProfile()
    {
        CreateMap<CreateRatingRequest, Rating>();
        CreateMap<Rating, GetRatingResponse>();
    }
}
