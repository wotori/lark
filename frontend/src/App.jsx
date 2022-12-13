import { LarkHead } from "./components/header";
import { TextBox } from "./components/textbox";

export function App() {
  return (
    <>
      <LarkHead />
      <div class="p5">
        <div class="flex flex-row flex-wrap justify-between">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => {
            console.log(i);
            return <TextBox />;
          })}
        </div>
      </div>
    </>
  );
}
