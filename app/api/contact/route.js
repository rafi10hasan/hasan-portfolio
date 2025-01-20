import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
      // Parse the incoming request body
      const data = await request.json();
      console.log(data)
      const { userName, email, message } = data;
  
      // Here, you can handle the data (like sending an email, saving to a database, etc.)
      // For example, using the Resend API (if you're sending an email).
     const response =  await resend.emails.send({
        from: 'onboarding@resend.dev', // Resend shared domain email
        to: 'rafayet12837@gmail.com', // Your email
        replyTo: email,
        subject: `New Message from ${userName || 'Unknown User'} (${email})`,
        text: `You have received a new message:\n\nFrom: ${userName || 'Unknown'}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      console.log("Resend API Response:", response);
      // Respond with a success message
      return new Response(
        JSON.stringify({ success: true, message: 'Message sent successfully!' }),
        { status: 200 }
      );
    } catch (error) {
        console.error("Error sending email:", error);
      // Handle any errors
      return new Response(
        JSON.stringify({ success: false, message: 'Failed to send message.' }),
        { status: 500 }
      );
    }
  }


