const { graphQLClient } = require('../_client');

const mutation = `
  mutation acceptCFP($id: ID!) {
    updateTalk(data: {
      cfpStatus: ACCEPTED
    }, where: {
      id: $id
    }) {
      id
      title
      cfpStatus
      cfpEmailSent
      speaker {
        name
        email
      }
    }
  }
`;

module.exports = async (req, res) => {
  try {
    const {
      query: { id },
    } = req;

    res.status(204).send(await graphQLClient.request(mutation, { id }));
  } catch ({ status = 500, message }) {
    res.status(status).json({ status, message });
  }
};
