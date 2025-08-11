import './globals.css';

export const metadata = {
  title: 'SummerlinWestHomes.com - The True Cost, Updated Twice Daily',
  description: 'Track 15 new construction homes in Summerlin West with builder incentives. See the real cost after incentives.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
