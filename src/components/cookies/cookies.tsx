import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {

  const modalVisible = useSignal(true);

  return (
    <>
      {modalVisible.value && (
        <div id="cookies">
          <p>
          Si vous acceptez les cookies, nous les utiliserons pour améliorer votre expérience et permettre à nos partenaires de vous présenter des publicités personnalisées lorsque vous visitez d'autres sites.
          </p>
          <button onClick$={() => modalVisible.value = false}> Accepter </button>
          <button onClick$={() => modalVisible.value = false}> Refuser </button>
        </div>
      )}
    </>
  )
})