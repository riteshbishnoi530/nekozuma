import "./globals.css";

export const metadata = {
  title: "Nekozuma",
  description: "The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-grey" data-new-gr-c-s-check-loaded="14.1224.0" data-gr-ext-installed=""   data-new-gr-c-s-loaded="14.1224.0">
        {children}
      </body>
    </html>
  );
}
