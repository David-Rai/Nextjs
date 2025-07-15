// app/todo/error.tsx
'use client'; // ✅ Required for error boundaries

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Caught error:", error);
  }, [error]);

  return (
    <div style={{ padding: 20, background: "#fee", color: "#900" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset} style={{ marginTop: 10 }}>
        Try again
      </button>
    </div>
  );
}
