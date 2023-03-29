import { db } from '~/src/store/store';
import { BackButton } from './BackButton';
import './globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🦁 Remplace ceci par la function créer dans `store-requests.ts`
  const users = await db.users.all();

  return (
    <html lang="en">
      <head />
      <body>
        <header className="bg-slate-300 p-1 flex items-center gap-4">
          <h2>NextReact</h2>
          <BackButton />
          <p>Total {users.length} users</p>
        </header>
        {children}
      </body>
    </html>
  );
}
