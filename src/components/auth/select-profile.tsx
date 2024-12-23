import { signIn } from "@/auth";
import { getSessions } from "@/lib/auth/mok";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { SubmitButton } from "./profile-button";

export async function SelectProfile({ searchParams }: { searchParams: { idSession: string } }) {
  const sessions = await getSessions(searchParams.idSession);


  if (!sessions || sessions.length === 0) {
    redirect('/login?message=Sesión expirada o inválida');
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Select your profile</CardTitle>
          <CardDescription>
            Bienvenido a Oficina Virtual. Por favor, inicia sesión.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-auto max-h-[60vh] scrollbar-hide">
          <form action={async (formData) => {
            'use server'
            const idSesion = formData.get('idSesion') as string
            await signIn('credentials', { idSesion, token: searchParams.idSession })
          }}>

            <div className="grid gap-4 items-center justify-center">
              {sessions.map((perfil: any) => (
                <div key={perfil.IdSesion} >
                  <SubmitButton value={perfil.IdSesion}>
                    {perfil.NombrePerfil}
                  </SubmitButton>
                </div>
              ))}
            </div>
          </form>
        </CardContent>
        <div className="flex items-center justify-center my-4 text-center text-sm">
          <Link href="/" className="underline">
            Volver a la página de inicio
          </Link>
        </div>
      </Card>
    </div>
  );
}
