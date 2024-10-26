import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Bienvenido a Oficina Virtual. Por favor, inicia sesión.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Escriba su nombre de usuario"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="/login/recovery" className="ml-auto inline-block text-sm underline">
                Olvidaste tu contraseña?
              </Link>
            </div>
            <Input id="password" type="password" placeholder="Escriba su contraseña" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          No tienes acceso?{" "}
          <Link href="#" className="underline">
            Crear cuenta
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
