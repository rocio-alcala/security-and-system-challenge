import Link from "next/link";

export default function NotFound() {
  return (
    <>
      Ruta no encontrada
      <Link href={"/"}>Volve a la pagina principal</Link>
    </>
  );
}
