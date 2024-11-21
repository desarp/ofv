import Link from "next/link";
import { redirect } from "next/navigation";
export default function Home() {

  redirect("/login");

  return (
    <div className="h-screen flex items-center justify-center p-2 font-[family-name:var(--font-geist-sans)]">
      <Link href="/login">Inicio</Link>
    </div>
  );
}
