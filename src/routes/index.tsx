import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Style from "./index.css?inline";
import { useLocalStorage } from '~/hooks/useLocalStorage';

export default component$(() => {
  useStylesScoped$(Style);
  const [value, setValue$] = useLocalStorage("name", "Guest");
  
  return (
    <>
      <h1>Money Transfer. Faster. More secure.</h1>
      <section></section>
      <button onClick$={() => {
          localStorage.setItem("theme", "hello")
        }}>click</button>
        <input type="button" value="Reload Page" onClick$={() => window.location.reload() } />
        <button onClick$={() => {
          setValue$("hi");
          console.log(value);
        }}>{value.value}</button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Swiss Money transfer",
};
