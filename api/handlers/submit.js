const { graphQLClient } = require('../client');

const mutation = `
  mutation submitCFP(
    $talkTitle: String!,
    $talkAbstract: RichTextAST,
    $speakerName: String!,
    $speakerHeadline: String!,
    $speakerEmail: String!,
    $speakerNotes: String
  ) {
    createTalk(data: {
      title: $talkTitle,
      abstract: $talkAbstract,
      notesFromSpeaker: $speakerNotes,
      speaker: {
        create: {
          name: $speakerName,
          headline: $speakerHeadline,
          email: $speakerEmail
        }
      }
    }) {
      id
      speaker {
        name
        email
      }
    }
  }
`;

module.exports = async (req, res) => {
  try {
    const variables = JSON.parse(req.body);

    res.status(201).send(await graphQLClient.request(mutation, variables));
  } catch ({ status = 500, message }) {
    res.status(status).json({ status, message });
  }
};
