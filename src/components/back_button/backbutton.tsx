'use client'

import { useRouter } from 'next/navigation'
import './backbutton.css'

export default function backButton() {
  const router = useRouter();

  const retroceder = () => {
    router.back();
  };

  return (
    <button className="button" onClick={retroceder}>Back</button>
  );
};