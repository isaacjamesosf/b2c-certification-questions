import { Label } from "./styled";

const Option = ({ letter, description, checked, onClick }) => (
  <div key={letter}>
    <Label>
      {letter})
      <input type="radio" checked={checked} onClick={onClick} />
      {description}
    </Label>
  </div>
);

export default Option;
