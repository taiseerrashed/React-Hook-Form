import { UseFormRegister } from "react-hook-form";
import { BrightnessForm } from "../types";

interface SelectProps {
    name: keyof BrightnessForm;
    label: string;
    options: string[];
    register: UseFormRegister<BrightnessForm>;
}
const Select = ({name, label, options, register}: SelectProps) => {
  return (
    <div className="p-2 bg-white border-b border-gray-100 flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select {...register(name)} id={name} className="block w-1/2 mt-1 border-gray-300 rounded-md focus:border-blue-500 sm:text-sm">
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  );
};

export default Select;
