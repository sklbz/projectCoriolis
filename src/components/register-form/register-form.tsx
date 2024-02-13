import { component$, useStyles$ } from "@builder.io/qwik";
import style from "./register.css?inline";

export const RegisterForm = component$(() => {
  useStyles$(style);
  return (
    <section class="wrapper">
      <form action="">
        <input type="text" />
      </form>
    </section>
  );
});