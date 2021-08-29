import { MenuItem, Select } from "@material-ui/core";

const OPTIONS = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "30", value: 30 },
  { label: "40", value: 40 },
  { label: "50", value: 50 },
  { label: "80", value: 80 },
  { label: "100", value: 100 },
  { label: "All", value: 1000 },
];

const DropdownNumber = ({ value, onChange }) => (
  <Select
    labelId="label"
    id="select"
    value={value}
    IconComponent="feGaussianBlur"
    onChange={onChange}
  >
    {OPTIONS.map((option, idx) => (
      <MenuItem key={idx} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </Select>
);

export default DropdownNumber;
