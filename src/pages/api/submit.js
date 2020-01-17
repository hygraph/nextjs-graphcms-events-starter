const { graphQLClient } = require('./_client');

const mutation = `
mutation submitCFP(
  $talkTitle: String!,
  $talkAbstract: RichTextAST,
  $speakerName: String!,
  $speakerHeadline: String!,
  $speakerEmail: String!,
  $speakerNotes: String
) {
  upsertSpeaker(where:{
    email: $speakerEmail
  }, create: {
        name: $speakerName,
        headline: $speakerHeadline,
        email: $speakerEmail
  }, update: {
    headline: $speakerHeadline,
  }) {
    email
  }
  createTalk(data: {
    title: $talkTitle,
    abstract: $talkAbstract,
    notesFromSpeaker: $speakerNotes,
    speaker: {
      connect: {
        email: $speakerEmail
      }
    }
  }) {
    id
    title
    speaker {
      name
      email
    }
  }
}
`;

module.exports = async (req, res) => {
  try {
    res.status(201).send(await graphQLClient.request(mutation, req.body));
  } catch ({ status = 500, message, ...rest }) {
    res.status(status).json({ status, message });
  }
};
