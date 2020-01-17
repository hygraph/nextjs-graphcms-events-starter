const { ServerClient: PostmarkClient } = require('postmark');
const { GraphQLClient } = require('graphql-request');
const graphQLClient = new GraphQLClient(`${process.env.URL}/api/graphql`);

const postmark = new PostmarkClient(process.env.POSTMARK_API_KEY);

module.exports = async (req, res) => {
  let data = await JSON.parse(req.body);
  const {
    info: {
      fieldName,
      responseData: { cfpStatus, cfpEmailSent, ...responseData },
    },
  } = data;

  if (fieldName !== 'updateTalk' || cfpEmailSent) return res.status(422);

  const templateIds = {
    ACCEPTED: process.env.POSTMARK_ACCEPTED_TEMPLATE_ID,
    REJECTED: process.env.POSTMARK_REJECTED_TEMPLATE_ID,
  };

  try {
    let {
      speaker: { id },
    } = responseData;

    const {
      speaker: { name, to },
    } = await graphQLClient.request(
      `query SendUpdatedEmail($id: ID!) {
      speaker(where:{
        id: $id
      }) {
        name
        to: email
      }
    }`,
      { id }
    );

    switch (cfpStatus) {
      case 'ACCEPTED':
        await postmark.sendEmailWithTemplate({
          from: process.env.POSTMARK_FROM_ADDRESS,
          to,
          TemplateId: templateIds[cfpStatus],
          templateModel: {
            name,
          },
        });

        return res.send(200);
      case 'REJECTED':
        await postmark.sendEmailWithTemplate({
          from: process.env.POSTMARK_FROM_ADDRESS,
          to,
          TemplateId: templateIds[cfpStatus],
          templateModel: {
            name,
          },
        });

        return res.send(200);
      default:
        res.send(400);
    }
  } catch ({ status = 500, message }) {
    res.status(status).json({ status, message });
  }
};
