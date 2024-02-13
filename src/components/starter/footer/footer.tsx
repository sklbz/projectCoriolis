import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <container class="container bottom-center">
        <div class={styles.anchor}>
          <span>Copyright © 2011</span>
          <span class={styles.spacer}>|</span>
          <span>{serverTime.value.date}</span>
        </div>
      </container>
    </footer>
  );
});
