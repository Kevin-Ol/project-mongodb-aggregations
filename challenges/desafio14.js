db.trips.aggregate([
  { $group: {
    _id: "$bikeid",
    duracaoMedia: { $avg: { $subtract: ["$stopTime", "$startTime"] } },
  } },
  { $sort: { duracaoMedia: -1 } },
  { $limit: 5 },
  { $project: {
    bikeId: "$_id",
    duracaoMedia: { $ceil: { $divide: ["$duracaoMedia", 60 * 1000] } },
    _id: false,
  } },
]);
