(() => {
  const envelope = document.querySelector("[data-envelope]");
  const seal = document.querySelector("[data-seal]");
  const letter = document.querySelector("[data-letter]");
  const toggleButton = document.querySelector("[data-toggle]");
  const instruction = document.querySelector("[data-instruction]");

  if (!envelope || !seal || !letter || !toggleButton || !instruction) {
    return;
  }

  const closedText = "Hacé click en el sello para abrir y ver tu regalo";
  const openText = "Hacé click para cerrar la carta";
  let isOpen = false;

  const setOpen = (nextState) => {
    isOpen = Boolean(nextState);

    envelope.classList.toggle("is-open", isOpen);
    toggleButton.classList.toggle("is-open", isOpen);
    seal.setAttribute("aria-expanded", String(isOpen));
    seal.setAttribute(
      "aria-label",
      isOpen ? "La carta está abierta" : "Abrir la carta y ver tu regalo"
    );
    letter.setAttribute("aria-hidden", String(!isOpen));
    instruction.textContent = isOpen ? openText : closedText;
  };

  seal.addEventListener("click", () => {
    setOpen(true);
  });

  toggleButton.addEventListener("click", () => {
    setOpen(!isOpen);
  });

  letter.addEventListener("click", () => {
    if (isOpen) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen) {
      setOpen(false);
      seal.focus({ preventScroll: true });
    }
  });
})();
