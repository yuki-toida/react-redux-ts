import React, { useState } from "react";

type Props = {
  onSubmit: (text: string) => void;
};

export const AddTodo: React.FC<Props> = props => {
  // React Hooks を使用し関数内でinput.valueをState管理する
  const [inputText, setInputText] = useState("");
  // OnSubmitイベント
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = inputText.trim();
    if (text === "") {
      return;
    }
    props.onSubmit(text);
    setInputText("");
  };
  // OnChangeイベント
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.currentTarget.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={inputText} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
