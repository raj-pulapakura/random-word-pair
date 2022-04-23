import fs from "fs/promises";
import path from "path";

function random<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function* generator(bank1: string[], bank2: string[]) {
  while (true) {
    yield random(bank1) + " " + random(bank2);
  }
}

async function main() {
  const list1 = (
    await fs.readFile(path.join("bank", "list1.txt"), {
      encoding: "utf-8",
    })
  ).split("\r\n");
  const list2 = (
    await fs.readFile(path.join("bank", "list2.txt"), {
      encoding: "utf-8",
    })
  ).split("\r\n");

  const g = generator(list1, list2);

  while (true) {
    console.log(g.next().value);
  }
}

main();
