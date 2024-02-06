import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Money Transfer. Faster. More secure.</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Swiss Money transfer",
};
