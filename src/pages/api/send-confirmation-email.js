const { ServerClient: PostmarkClient } = require('postmark');

const postmark = new PostmarkClient(process.env.POSTMARK_API_KEY);

module.exports = async (req, res) => {
  const {
    info: { fieldName, responseData },
  } = req.body;

  if (fieldName !== 'createTalk' || cfpEmailSent) return res.status(422);

  try {
    const {
      id,
      title,
      speaker: { name, email: to },
    } = responseData;

    await postmark.sendEmailBatchWithTemplates([
      {
        from: process.env.POSTMARK_FROM_ADDRESS,
        to: process.env.NEW_CFP_EMAIL,
        TemplateId: process.env.POSTMARK_NEW_CFP_TEMPLATE_ID,
        templateModel: {
          id,
          title,
          name,
        },
      },
      {
        from: process.env.POSTMARK_FROM_ADDRESS,
        to,
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
