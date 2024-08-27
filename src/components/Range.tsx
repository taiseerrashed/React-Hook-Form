import { UseFormRegister } from "react-hook-form";
import { BrightnessForm } from "../types";
import { BsBrightnessHigh, BsBrightnessHighFill } from "react-icons/bs";

interface RangeProps {
    name: keyof BrightnessForm;
    label: string;
    register: UseFormRegister<BrightnessForm>;
}
const Range = ({name, label, register}: RangeProps) => {
  return (
    <div className="p-2 bg-white border-b border-gray-100">
        <label className="block text-sm text-left font-medium text-gray-700">{label}</label>
        <div className="flex justify-between items-center gap-1">
            <BsBrightnessHigh />
            <input {...register(name)} type="range" min="0" max="100" className="w-full mt-1" />
            <BsBrightnessHighFill />
        </div>
    </div>
  );
};

export default Range;
