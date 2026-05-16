export function sendMessage(form: HTMLFormElement) {
  const formData = new FormData(form);
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const material = formData.get("material")?.toString() || "Nao especificado";
  const message = formData.get("message")?.toString() || "";

  const whatsappMessage = [
    `Ola! Meu nome e ${name}.`,
    "",
    `Email: ${email}`,
    `Telefone: ${phone}`,
    `Material: ${material}`,
    "",
    `Mensagem: ${message}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/5542991454793?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");
  form.reset();
  alert("Redirecionando para WhatsApp...");
}
