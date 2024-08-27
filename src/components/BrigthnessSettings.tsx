import { useForm } from "react-hook-form";
import { BrightnessForm } from "../types";
import Range from "./Range";
import Switch from "./Switch";
import Select from "./Select";


const BrightnessSettings = () => {
    const {register, handleSubmit, reset} = useForm<BrightnessForm>({
        defaultValues: {
            brightness: 50,
            autoBrightness: true,
            nightShift: false,
            autoLock: "1 Minute",
            raiseToWake: true,
            textSize: "12pt",
            boldText: false,
            displayZoom: false,
        }
    });

    const onSubmit = (data: BrightnessForm) => {
        console.log(data);
    };
    const resetValues = () => {
        reset();
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto my-5 p-4 bg-gray-100 rounded-sm shadow-md">
        <Range name="brightness" label="BRIGHTNESS" register={register}/>
        <Switch name="autoBrightness" label="Auto-Brightness" register={register}/>
        <Switch name="nightShift" label="Night Shift" register={register}/>
        <Select name="autoLock" label="Auto-Lock" options={["1 Minute", "2 Minutes", "5 Minutes"]} register={register}/>
        <Switch name="raiseToWake" label="Raise to Wake" register={register}/>
        <h2 className="text-sm font-medium text-gray-500 mb-2 uppercase">Fonts And Display</h2>
        <Select name="textSize" label="Text Size" options={["10pt", "12pt", "14pt"]} register={register}/>
        <Switch name="boldText" label="Bold Text" register={register}/>
        <Switch name="displayZoom" label="Display Zoom" register={register}/>

        <div className="flex justify-between gap-2 items-center">
            <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none " >Submit</button>
            <button onClick={resetValues} className="mt-4 w-full bg-white text-blue-600 py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 hover:text-white focus:outline-none " >Reset</button>
        </div>
    </form>
    
  );
};

export default BrightnessSettings;
