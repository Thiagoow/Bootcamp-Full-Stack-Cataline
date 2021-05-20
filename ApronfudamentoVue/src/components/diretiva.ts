import { Directive } from "vue";

const diretiva: Directive = {
  beforeMount(el: HTMLElement, binding) {
    if (binding.arg === "background") {
      el.style.background = binding.value;
    } else {
      el.style.color = binding.value;
    }

    if (binding.modifiers.shadow) {
      el.style.boxShadow = "3px 3px 3px rgba(0,0,0, 0.5)";
    }
  },
};

export default diretiva;
