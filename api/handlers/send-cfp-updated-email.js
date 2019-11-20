const { ServerClient: PostmarkClient } = require('postmark');

const postmark = new PostmarkClient(process.env.POSTMARK_API_KEY);

module.exports = async (req, res) => {
  const {
    info: {
      fieldName,
      responseData: { cfpStatus, cfpEmailSent, ...responseData },
    },
  } = req.body;

  if (fieldName !== 'updateTalk' || cfpEmailSent) return res.status(422);

  const templateIds = {
    ACCEPTED: process.env.POSTMARK_ACCEPTED_TEMPLATE_ID,
    REJECTED: process.env.POSTMARK_REJECTED_TEMPLATE_ID,
  };

  try {
    const {
      speaker: { name, email: to },
    } = responseData;

    switch (cfpStatus) {
      case 'ACCEPTED':
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
