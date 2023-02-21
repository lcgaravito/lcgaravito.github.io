import React from "react";

type CoverProps = {
  test: boolean;
};

export default function Cover(props: CoverProps) {
  return (
    <div>
      <h1 className="font-bold text-4xl">Luis Carlos Garavito Romero</h1>
      <h2 className="text-xl">🖥 Software Developer 🖥</h2>
    </div>
  );
}
