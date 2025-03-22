const nodemailer = require('nodemailer');

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Approve a pledge and send an invite code
router.post('/approve', async (req, res) => {
    const { email } = req.body;

    try {
        const pledge = await Pledge.findOne({ email, approved: false });
        if (!pledge) return res.status(404).json({ error: 'Pledge not found or already approved' });

        // Generate unique invite code
        const inviteCode = crypto.randomBytes(8).toString('hex');

        // Update pledge status
        pledge.approved = true;
        pledge.inviteCode = inviteCode;
        await pledge.save();

        // Send email with invite code
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your Invite to the Ohara Collective',
            text: `Congratulations! Your pledge has been approved.\n\nHere is your invite code: ${inviteCode}\n\nUse this code to log in.`,
        };

        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: 'Pledge approved, invite sent via email!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not approve pledge or send email' });
    }
});
