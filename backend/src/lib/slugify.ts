const allowedChars = "abcdefghijklmnopqrstuvwxyz-".split("");

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("ñ", "n")
    .split("")
    .filter((char) => {
      return allowedChars.includes(char);
    })
    .join("");
}
