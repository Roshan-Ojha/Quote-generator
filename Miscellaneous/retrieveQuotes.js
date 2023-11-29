const quoteDB = require("../Model/quote.model");

async function RetriveQuote() {
  const randomQuote = await quoteDB.aggregate([
    // Stage 1: $sample - Randomly select 1 document
    {
      $sample: { size: 1 },
    },

    // Stage 2: $project - Include quote and author field and exclude _id and __v field
    //We cannot perform both exclusion and inclusion operation in single projection. So in below projection we have done exclusion only

    {
      $project: {
        _id: 0,
        __v: 0,
      },
    },
  ]);

  return randomQuote;
}

module.exports = {
  RetriveQuote,
};
