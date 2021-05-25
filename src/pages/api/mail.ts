// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const nodeMailer = require('nodemailer');

export default async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	const transporter = nodeMailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const mailMessage = {
		from: process.env.EMAIL_USERNAME,
		to: 'rohan19095@iiitd.ac.in',
		subject: 'Contact Form filled on your portfolio website!',
		text: `You have received a message from ${req.body.name}.\n\nThe message is: \n ${req.body.message}. \n\n\nThe messsage is sent from the ${process.env.NODE_ENV} server.`,
	};

	return new Promise(resolve => {
		transporter.sendMail(mailMessage, function (error, data) {
			if (error) {
				res.status(400).json({
					errmess:
						'Your message could not be sent! Please try again later or mail me at rohan19095@iiitd.ac.in!',
				});
				// eslint-disable-next-line no-console
				console.log(error);
				res.end();
				return resolve();
			} else {
				// eslint-disable-next-line no-console
				console.log('Email sent: ' + data.response);
				// res.send(200, { message: 'Your message has been succesfully sent!' });
				res
					.status(200)
					.json({ message: 'Your message has been succesfully sent!' });
				res.end();
				return resolve();
			}
		});
	});
};
