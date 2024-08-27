import { UseFormRegister } from "react-hook-form";
import { BrightnessForm } from "../types";

interface SwitchProps {
    name: keyof BrightnessForm;
    label: string;
    register: UseFormRegister<BrightnessForm>;
}
const Switch = ({name, label, register}: SwitchProps) => {
  return (
    <div className="flex items-center justify-between mb-4 p-2 bg-white">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <input type="checkbox"{...register(name)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:bg-blue-500" />
    </div>
  );
};

export default Switch;
