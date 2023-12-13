import { useState } from "react";

type PropsRenderData = {
  title: string;
  resetTitle: () => void;
};

type Props = {
  children: (props: PropsRenderData) => JSX.Element;
};

export default function ChildComponent({ children }: Props) {
  const [title, setTitle] = useState("");

  const resetTitle = () => {
    setTitle("");
  };

  return (
    <div style={{ padding: "12px", backgroundColor: "whitesmoke" }}>
      <h1>Title: {title}</h1>
      <div>
        <input
          type="text"
          placeholder="Input title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {children({ title, resetTitle })}
    </div>
  );
}
