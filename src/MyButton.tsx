import * as React from "react";

export function MyButton({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
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
