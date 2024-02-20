import { component$, Slot } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import style from "./register.module.css";

export const RegisterForm = component$(() => {
  return (
    <section class={style.wrapper}>
      <Form class={[style.form, "container"]}>
        <Slot/>
      </Form>   
    </section>
  );
});
