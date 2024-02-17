import { component$, useStylesScoped$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Style from "./index.css?inline";
import { useLocalStorage } from '~/hooks/useLocalStorage';
import internal from "stream";
/* import { useFirestore } from "~/hooks/useFirestore"; */

export default component$(() => {
  useStylesScoped$(Style);
  const [value, setValue$] = useLocalStorage("name", "Guest");

/*   useFirestore(); */
  let initialMoney;
  try {
    initialMoney = window?.localStorage.getItem("money") || 208147;
  } catch {
    console.log("window is not defined\n");
  }
  

  const [money, setMoney$] = useLocalStorage("money", initialMoney);

  const extraMoney = Math.ceil(Math.random() * 10**Math.floor(Math.random() * 3));

  useTask$(() => setMoney$(money.value + extraMoney))

  console.log(money);

  return (
    <>
      <h1 class="main-title">Money Transfer. Faster. More <span>secure</span>.</h1>
      <section class="money-transferred">
        <h2> Déja <span> {money.value} € </span> envoyés grâce à nous !</h2>
      </section>
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
