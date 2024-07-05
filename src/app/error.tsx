"use client";

import Link from "next/link";
import React from "react";

export default function error({ error }: { error: Error }) {
  return (
    <>
      {error?.message || "Ocurrio un error"}
      <Link href={"/"}>Volve a la pagina principal</Link>
    </>
  );
}
