(async function main() {
  const src = document.scripts[document.scripts.length - 1].src;
  console.log("start " + src);
  await new Promise((r) => setTimeout(r, 100));
  console.log("end " + src);
})();
