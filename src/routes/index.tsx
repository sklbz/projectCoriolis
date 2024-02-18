import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { routeAction$, routeLoader$, type DocumentHead, zod$, z, Form } from "@builder.io/qwik-city";
import Style from "./index.css?inline";
import { useLocalStorage } from '~/hooks/useLocalStorage';
/* import { useFirestore } from "~/hooks/useFirestore"; */

export let money = 208147;

export const useMoneyLoader = routeLoader$(() => {
  return money;
});

export const useAddMoney = routeAction$(() => {
    money++;
    return {
      success: true,
    }
  },
);

// ! Test

interface ListItem {
  text: string;
}

export const list: ListItem[] = [];

export const useListLoader = routeLoader$(() => {
  return list;
});

export const useAddToListAction = routeAction$(
  (item) => {
    list.push(item);
    return {
      success: true,
    }
  },
  zod$({
    text: z.string().trim().min(1),
  }),
);

/* ----------------------------------------------------------------------- */

export default component$(() => {
  useStylesScoped$(Style);
  const [value, setValue$] = useLocalStorage("name", "Guest");

  const addMoney = useAddMoney()
  const money = useMoneyLoader();
  
  /* ------------------------------------------------------------ */
  
  const list = useListLoader();
  const action = useAddToListAction();

  /* ------------------------------------------------------------ */

/*   useFirestore(); */

  return (
    <>
      <h1 class="main-title">Money Transfer. Faster. More <span>secure</span>.</h1>
      <section class="money-transferred">
        <h2> Déja <span> {money} € </span> envoyés grâce à nous !</h2>
        
        
        <button onClick$={() => {
          addMoney;
          console.log(money);
        }}>Hello</button>
      </section>
      <section>

        {/* ----------------------------------------------------------------- */}

        {list.value.length === 0 ? (
          <span>No items found</span>
          ) : (
            <ul>
            {list.value.map((item, index) => (
              <li key={`items-${index}`}>{item.text}</li>
              ))}
          </ul>
        )}

        <Form action={action} spaReset>
          <input type="text" name="text" />{" "}
          <button type="submit" class="button-dark">
            Add item
          </button>
        </Form>
        {/* ----------------------------------------------------------------- */}
      </section>
      <button onClick$={() => {
          localStorage.setItem("theme", "hello")
        }}>click</button>
        <input type="button" value="Reload Page" onClick$={() => window.location.reload() } />
        <button onClick$={() => setValue$("hi")}>{value.value}</button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Swiss Money transfer",
};
