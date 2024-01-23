import './globals.css';

export const metadata = {
  title: 'Cimpla',
  description: 'Low-Code Automation Platform',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="font-poppins">{children}</body>
  </html>
);

export default RootLayout;
