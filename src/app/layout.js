import "./globals.css";

export const metadata = {
  title: "Brown Stack",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dmzodhnzn/image/upload/v1721847549/zj3qvjetqw4sjkrendnn.jpg"></link>
      <body className="block sm:flex">
        {children}
      </body>
    </html>
  );
}
