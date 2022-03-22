import fetch from "cross-fetch";

const world = 'world';

function hello(world: string): string {
  return `Hello ${world} fdff! `;
}

async function main() {
  console.log(hello(world));
  const date = new Date('05 October 2011 14:48 UTC');
  console.log(date.getDay(), "????");

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  console.log(json);
}

main().then(() => console.log("done"));