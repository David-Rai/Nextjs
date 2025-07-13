
interface user {
  id: number,
  name: string
  email: string
}

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: user[] = await res.json()

  return (
    <main>
      <h1>{new Date().toLocaleTimeString()}</h1>
      {

        users.map(user => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          )
        })
      }
    </main>
  );
}