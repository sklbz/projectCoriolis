import { component$, useStylesScoped$ } from "@builder.io/qwik";
import {
  routeAction$,
  routeLoader$,
  type DocumentHead,
  zod$,
  z,
  Form,
} from "@builder.io/qwik-city";
import style from "./index.css?inline";
/* import { useLocalStorage } from "~/hooks/useLocalStorage"; */
/* import { useFirestore } from "~/hooks/useFirestore"; */

export const money = 208147;

/* export const useMoneyLoader = routeLoader$(() => {
  return money;
});

export const useAddMoney = routeAction$(() => {
  money++;
  return {
    success: true,
  };
});
 */
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
    };
  },
  zod$({
    text: z.string().trim().min(1),
  }),
);

/* ----------------------------------------------------------------------- */
// ! Test 2
/* interface ListNumber {
  num: number;
} */

export const moneyList: number[] = [];

export const useMoneyLoader = routeLoader$(() => {
  return moneyList;
});

export const useAddToMoneyAction = routeAction$(() => {
  moneyList.push(Math.floor(Math.random() * 10 ** (Math.random() * 3)));
  return {
    success: true,
  };
});
/* ----------------------------------------------------------------------- */

export default component$(() => {
  useStylesScoped$(style);
  /* const [value, setValue$] = useLocalStorage("name", "Guest"); */

  const addMoney = useAddToMoneyAction();
  const money = useMoneyLoader();

  /* ------------------------------------------------------------ */

  const list = useListLoader();
  const action = useAddToListAction();

  /* ------------------------------------------------------------ */

  /*   useFirestore(); */

  let text = "hi";

  return (
    <>
      <h1 class="main-title">
        Money Transfer. Faster. More <span>secure</span>.
      </h1>
      <section class="money-transferred">
        <h2>
          {" "}
          Déja <span> {money} € </span> envoyés grâce à nous !
        </h2>

        <button
          onClick$={() => {
            addMoney;
            console.log(money);
          }}
        >
          Hello
        </button>
      </section>
      <section>
        {/* ----------------------------------------------------------------- */}

        {list.value.length === 0 ? (
          <span>No items found</span>
        ) : (
          <ul>
            {list.value.map((item, index) => {
              if (index === 0) text = "";
              text += item.text;
              return <li key={`items-${index}`}>{item.text}</li>;
            })}
            <li key="galilean">{text}</li>
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
    </>
  );
});

export const head: DocumentHead = {
  title: "Swiss Money transfer",
};
