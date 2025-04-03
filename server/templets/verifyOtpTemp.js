const verifyOtpTemp = (otp)=>
    {
        return` <div style="max-width: 600px; margin: auto; padding: 20px; 
            font-family: Arial, sans-serif; text-align: center; 
            border: 2px solid #007BFF; border-radius: 10px; background-color: #f9f9f9;">
            <h2 style="color: #007BFF;">Welcome to Byte Stack!</h2>
            <p style="color: #333; font-size: 16px;">
                Verification OTP from Byte Stack.Don't share to any one.
            </p>
            <button 
                style="display: inline-block; padding: 12px 24px; font-size: 16px; 
                        color: #ffffff; background-color: #007BFF; text-decoration: none; 
                        border-radius: 5px; font-weight: bold; margin-top: 15px;">
                ${otp}
            </button>
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
                If you did not sign up for Byte Stack, please ignore this email.
            </p>
        </div>`
    }
    
    export default verifyOtpTemp;