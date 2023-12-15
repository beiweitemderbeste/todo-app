import type { InputFormButtonProps } from "../ts/interfaces/InputFormButton.interfaces"

const InputFormButton: React.FC<InputFormButtonProps> = ({ handleSubmit }) => {
  return (
    <button
      type="submit"
      onSubmit={handleSubmit}
      className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
    >
      Add
    </button>
  );
}

export default InputFormButton