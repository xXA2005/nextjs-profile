'use client';

const btn = "border p-3 rounded-md cursor-pointer glow-blue text-blue-800"

const Contact = () => (
  <div className="min-h-screen flex justify-center items-center gap-4" id="contact">
    <a className={btn} href="https://discord.com/users/661693178960936970">Discord Ab.5#9111</a>
    <a className={btn} href="#">Email</a>
    <a className={btn} href="#">Telegram</a>
  </div>
);

export default Contact;
