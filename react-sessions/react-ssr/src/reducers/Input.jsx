import { forwardRef, useImperativeHandle, useRef } from "react";

function Input(props, ref) {
  let inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      value: inputRef.current.value,
      reset() {
        inputRef.current.value = "";
      },
      focus() {
        inputRef.current.focus();
      },
    };
  });

  return <input type="text" ref={inputRef} />;
}

export default forwardRef(Input);
