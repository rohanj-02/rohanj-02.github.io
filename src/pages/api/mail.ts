// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const nodeMailer = require('nodemailer');

export default (req: NextApiRequest, res: NextApiResponse): void => {
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
		text:
			'You have received a message from ' +
			req.body.name +
			'.\nThe message is: \n' +
			req.body.message,
	};

	if (process.env.NODE_ENV === 'development') {
		res.status(400).json({
			errmess:
				'Your message could not be sent! Please try again later or mail me at rohan19095@iiitd.ac.in!',
		});
		// res
		// 	.status(200)
		// 	.json({ message: 'Your message has been succesfully sent!' });
	} else {
		transporter.sendMail(mailMessage, function (error, data) {
			if (error) {
				res.status(400).json({
					message:
						'Your message could not be sent! Please try again later or mail me at rohan19095@iiitd.ac.in!',
				});
				// eslint-disable-next-line no-console
				console.log(error);
			} else {
				// eslint-disable-next-line no-console
				console.log('Email sent: ' + data.response);
				res
					.status(200)
					.json({ message: 'Your message has been succesfully sent!' });
			}
		});
	}
};
