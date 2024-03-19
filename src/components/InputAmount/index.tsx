import { Minus, Plus, } from "@phosphor-icons/react";
import { InputWrapper } from "./styles";

export function InputAmount() {
  return (
    <InputWrapper>
      <button type="button"><Plus /></button>
      <input type="number" min={1}/>
      <button type="button"><Minus /></button>
    </InputWrapper>
  );
}
