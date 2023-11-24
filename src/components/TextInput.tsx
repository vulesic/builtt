interface TextInputIC {
  value: string;
  type: string;
  label: string;
  autoComplete: string;
  error: boolean;
  handleFunction(event: React.ChangeEvent<HTMLInputElement>): void;
}

const TextInput = ({ value, type, label, autoComplete, error, handleFunction }: TextInputIC) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFunction(event);
  };

  return (
    <div className={`input-container ${error ? "input-with-error" : ""}`}>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        required={type !== "password"}
        autoComplete={autoComplete}
      />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
};

export default TextInput;
