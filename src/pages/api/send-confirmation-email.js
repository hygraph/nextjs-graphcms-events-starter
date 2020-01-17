const { ServerClient: PostmarkClient } = require('postmark');
const { GraphQLClient } = require('graphql-request');
const graphQLClient = new GraphQLClient(`${process.env.URL}/api/graphql`);

const postmark = new PostmarkClient(process.env.POSTMARK_API_KEY);

module.exports = async (req, res) => {
  let data = JSON.parse(req.body);

  const {
    info: {
      fieldName,
      responseData: { cfpStatus, cfpEmailSent, ...responseData },
    },
  } = data;

  if (fieldName !== 'createTalk' || cfpEmailSent) return res.status(422);

  try {
    let {
      id,
      title,
      speaker: { name, email },
    } = responseData;

    console.log(title);

    await postmark.sendEmailBatchWithTemplates([
      {
        from: process.env.POSTMARK_FROM_ADDRESS,
        to: process.env.NEW_CFP_EMAIL,
        TemplateId: process.env.POSTMARK_NEW_CFP_TEMPLATE_ID,
        templateModel: {
          id,
          talk_title: title,
          name,
          action_url_accept: `${process.env.URL}/api/accept/${id}`,
          action_url_reject: `${process.env.URL}/api/reject/${id}`,
        },
      },
      {
        from: process.env.POSTMARK_FROM_ADDRESS,
        to: email,
        TemplateId: process.env.POSTMARK_CONFIRMED_TEMPLATE_ID,
        templateModel: {
          name,
        },
      },
    ]);

    res.send(200);
  } catch ({ status = 500, message }) {
    res.status(status).json({ status, message });
  }
};
