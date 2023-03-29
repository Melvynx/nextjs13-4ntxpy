import Link from 'next/link';
import { UserLink } from '~/src/components/UserLink';
import { db } from '~/src/store/store';
import { UserForm } from './UserForm';

export default async function Home() {
  // 🦁 Remplace ceci par la function créer dans `store-requests.ts`
  const users = await db.users.all();

  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">NextReact</h1>
      <h2 className="text-lg">App directory - server component</h2>

      <ul className="flex flex-col gap-2">
        {users.map((user) => (
          <UserLink key={user.id} {...user} />
        ))}
      </ul>

      <UserForm />
    </main>
  );
}
