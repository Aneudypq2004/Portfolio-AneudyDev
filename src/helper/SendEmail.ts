import { Configuration, EmailsApi, EmailTransactionalMessageData } from '@elasticemail/elasticemail-client-ts-axios';
import { toast } from 'react-toastify';

const sendEmail = ({ email, msg }: { email: string, msg: string }) => {
    /* Generate and use your API key */

    const config = new Configuration({
        apiKey: import.meta.env.VITE_EMAIL_APIKEY
    });

    const emailsApi = new EmailsApi(config);

    const emailTransactionalMessageData: EmailTransactionalMessageData = {
        Recipients: {
            To: ["dluisaneudy82@gmail.com"]
        },
        Content: {
            Body: [
                {
                    ContentType: "HTML",
                    Charset: "utf-8",
                    Content: "<strong>Example content<strong>"
                },
                {
                    ContentType: "PlainText",
                    Charset: "utf-8",
                    Content: msg
                }
            ],
            From: email,
            Subject: "Example transactional email"
        }
    }; // interface EmailTransactionalMessageData from '@elasticemail/elasticemail-client-ts-axios'

    const sendTransactionalEmails = (emailTransactionalMessageData: EmailTransactionalMessageData): void => {
        emailsApi.emailsTransactionalPost(emailTransactionalMessageData).then((response) => {
            toast.success("The email was sent");
            console.log(response)
        }).catch((error) => {
            toast.error(error);
        });
    };

    sendTransactionalEmails(emailTransactionalMessageData);
}

export default sendEmail;