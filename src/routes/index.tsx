import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Style from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(Style);
  
  return (
    <>
      <h1>Money Transfer. Faster. More secure.</h1>
      <section></section>
      <button onClick$={() => {
          localStorage.setItem("theme", "hello")
        }}>click</button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Swiss Money transfer",
};
