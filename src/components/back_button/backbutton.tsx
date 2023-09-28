'use client'

import { useRouter } from 'next/navigation'

export default function backButton() {
  const router = useRouter();

  const retroceder = () => {
    router.back();
  };

  return (
    <button onClick={retroceder}>Volver</button>
  );
};