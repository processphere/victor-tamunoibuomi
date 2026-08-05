export function scrollToSection(href: string, delay = 120) {
  const id = href.replace("#", "");
  window.dispatchEvent(new CustomEvent("vv:open-accordion", { detail: id }));
  window.setTimeout(() => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, delay);
}
