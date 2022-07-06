import { useEffect } from "react";
import { Form, useLoaderData } from "@remix-run/react";

export async function action({ request }) {
  const body = await request.formData();
  console.log("enviado", body.get("nome"));

  return null;
}

export async function loader() {
  // requisicao asyncrona.
  return { user: { name: "Reijan" } };
}

export default function Index() {
  const data = useLoaderData();
  useEffect(() => {
    console.log("data", data);
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Meu formulario, Oi {data.user.name}</h1>
      <Form method="post">
        <input name="nome" placeholder="Nome do usuario" />
        <button type="submit">Salvar</button>
      </Form>
    </div>
  );
}
