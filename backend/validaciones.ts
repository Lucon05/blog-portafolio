export function esEmailValido(text: string): boolean {
  return text.includes("@");
}

export function esPasswordValido(pasword: string): boolean {
  const allowedChars = "1234567890".split("");
  return !!pasword
    .split("")
    .filter((char) => {
      return allowedChars.includes(char);
    })
    .join("");
}
