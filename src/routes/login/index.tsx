import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { RegisterForm } from "~/components/register-form/register-form";
import style from "./login.css?inline";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(style);
  return (
    <RegisterForm></RegisterForm>
  );
});

export const head: DocumentHead = {
  title: "Log In",
};