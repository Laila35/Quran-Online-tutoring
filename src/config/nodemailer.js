import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
    service: 'gmail', // Your email service provider
    auth: {
        user: 'QuranOnlineTutoring1@gmail.com', // Your email
        pass: 'mgrz lmeh nyvh uncv'    // Your email password or app-specific password
    }
});
