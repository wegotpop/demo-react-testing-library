import * as React from "react";
import { getJSON } from "./popsss";

export function MyButton({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  React.useEffect(() => {
    console.log(getJSON("url"));
  }, []);

  return (
    <div>
      <button
        data-testid="button-to-be-clicked"
        onClick={onClick}
        // onClick={() => {
        //   console.log("i was called");
        // }}
      >
        Click me!
      </button>
    </div>
  );
}
