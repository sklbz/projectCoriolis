import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Money Transfer. Faster. More secure.</h1>
      <dialog id="cookies">
        Si vous acceptez les cookies, nous les utiliserons pour améliorer votre expérience et permettre à nos partenaires de vous présenter des publicités personnalisées lorsque vous visitez d'autres sites.
      </dialog>
    </>
  );
});

export const head: DocumentHead = {
  title: "Swiss Money transfer",
};
