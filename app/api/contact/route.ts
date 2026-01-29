import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, phone, field } = await request.json();

        // Basic server-side validation
        if (!name || !email || !field) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Configure transporter
        // NOTE: In production, use environment variables for these values.
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.example.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || 'user@example.com',
                pass: process.env.SMTP_PASS || 'password',
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_FROM || '"Techorc Website" <no-reply@techorc.in>',
            to: process.env.SMTP_TO || 'info@techorc.in',
            subject: `New Enquiry from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #00a8f2;">New Enquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${field}</p>
        </div>
      `,
        };

        // Send email
        // In a real scenario with unconfigured env vars, this might fail. 
        // We'll simulate success if env vars are missing to prevent crash during demo/dev without credentials.
        if (!process.env.SMTP_HOST) {
            console.warn("SMTP_HOST not set. Email would be sent here:", mailOptions);
            // Return success for simulation
            return NextResponse.json({ success: true, message: 'Email simulation successful' }, { status: 200 });
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email.' },
            { status: 500 }
        );
    }
}
