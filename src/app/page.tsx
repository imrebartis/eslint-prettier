import Button from "./Button";
import Counter from "./Counter";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-3xl">Button & Counter Test</h1>
      <Counter />
      <Button>Foo</Button>
      <Button>Bar</Button>
      <Button>Baz</Button>
    </main>
  );
}
