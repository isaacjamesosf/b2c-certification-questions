import { Label, InputRadio } from "./Styled";

const Option = ({ description, checked, value }) => (
  <Label>
    <InputRadio type="radio" checked={checked} value={value} />
    {description}
  </Label>
);

export default Option;
