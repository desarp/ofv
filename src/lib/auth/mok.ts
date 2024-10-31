'use server'

export const login = async (body: any) => {
  return await fetch("https://apisesiones.grupomok.com/api/getLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(res => res.json())
}

// src/lib/auth/mok.ts
export const getSessions = async (id: string) => {
  const response = await fetch(`https://apisesiones.grupomok.com/api/getSesiones?tkn=${id}`);
  const data = await response.json();



  // Asegúrate de que estás accediendo a los datos correctamente
  if (data) {
    return data.data; // Devuelve solo los datos que necesitas
  }

  throw new Error('No se pudieron obtener las sesiones');
}

export const generateJWT = async (id: string, token: string) => {
  return await fetch(`https://apisesiones.grupomok.com/api/generateJWT`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idSesion: id,
      tkn: token,
    }),
  }).then(res => res.json())
}

export const getInfoUser = async (token: string) => {
  return await fetch(`https://apisesiones.grupomok.com/api/getInfoUser`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }).then(res => res.json())
}

export const getMenu = async (token: string) => {
  return await fetch(`https://apisesiones.grupomok.com/api/getMenu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }).then(res => res.json())
}


export async function getSubmenu(menuCod: number, token: string) {
  return await fetch(`https://apisesiones.grupomok.com/api/getMenuItems?menuCod=${menuCod}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }).then(res => res.json())
}


