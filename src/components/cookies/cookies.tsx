import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import Style from "./cookies.css?inline";

export default component$(() => {

  useStylesScoped$(Style);

  const modalVisible = useSignal(true);

  return (
    <>
      {modalVisible.value && (
        <div class="cookie-container">
          <div id="cookies" class="cookie">
            <p>
            Si vous acceptez les cookies, nous les utiliserons pour améliorer votre expérience et permettre à nos partenaires de vous présenter des publicités personnalisées lorsque vous visitez d'autres sites.
            </p>
            <div class="btns">
            <button onClick$={() => modalVisible.value = false}> Accepter </button>
            <button onClick$={() => modalVisible.value = false}> Refuser </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
})