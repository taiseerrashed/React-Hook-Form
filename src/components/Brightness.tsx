// import { useForm, Controller } from 'react-hook-form';
// import { BsBrightnessHigh, BsBrightnessHighFill } from 'react-icons/bs';

// interface FormValues {
//     brightness: number;
//     autoBrightness: boolean;
//     nightShift: boolean;
//     autoLock: string;
//     raiseToWake: boolean;
//     textSize: string;
//     boldText: boolean;
//     displayZoom: boolean;
// };

// const BrightnessSettings = () => {
//     const {control, handleSubmit, reset} = useForm<FormValues>({
//         defaultValues: {
//             brightness: 50,
//             autoBrightness: true,
//             nightShift: false,
//             autoLock: "1 Minute",
//             raiseToWake: true,
//             textSize: "12pt",
//             boldText: false,
//             displayZoom: false,
//         }
//     });

//     const submitForm = (data: FormValues) => {
//         console.log(data);
//     }
    // const resetValues = () => {
    //     reset();
    // }

//   return (
//     <form onSubmit={handleSubmit(submitForm)} className="max-w-sm mx-auto my-5 p-4 bg-gray-100 rounded-sm shadow-md">
//         <div className="p-2 bg-white border-b border-gray-100">
//             <label className="block text-sm text-left font-medium text-gray-700">Brightness</label>
//             <Controller name="brightness" control={control} render={({field})=> <div className="flex justify-between items-center gap-1"><BsBrightnessHigh /> <input type="range" min="0" max="100" {...field} className="w-full mt-1"/> <BsBrightnessHighFill /></div>} />
//         </div>

//         <div className="flex items-center justify-between mb-4 p-2 bg-white">
//             <label className="text-sm font-medium text-gray-700">Auto-Brightness</label>
//             <Controller name="autoBrightness" control={control} render={({field})=> <input type="checkbox" checked={field.value} onChange={(e)=> field.onChange(e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />} />
//         </div>

//         <div className="flex items-center justify-between mb-4 p-2 bg-white">
//             <label className="text-sm font-medium text-gray-700">Night Shift</label>
//             <Controller name="nightShift" control={control} render={({field}) => <input type="checkbox" checked={field.value} onChange={(e)=> field.onChange(e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />} />
//         </div>

//         <div className="p-2 bg-white border-b border-gray-100 flex justify-between items-center">
//             <label className="block text-sm font-medium text-gray-700">Auto-Lock</label>
//             <Controller name="autoLock" control={control}
//                 render={({ field }) => (
//                     <select {...field} className="mt-1 block w-1/2 border-gray-300 rounded-md focus:border-blue-500 sm:text-sm">
//                         <option value="30 Seconds">30 Seconds</option>
//                         <option value="1 Minute">1 Minute</option>
//                         <option value="5 Minutes">5 Minutes</option>
//                         <option value="Never">Never</option>
//                     </select>
//                 )}
//             />
//         </div>

//         <div className="flex items-center justify-between mb-4 p-2 bg-white">
//             <label className="text-sm font-medium text-gray-700">Raise to Wake</label> 
//             <Controller name="raiseToWake" control={control} render={({field}) => <input type="checkbox" checked={field.value} onChange={(e)=> field.onChange(e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />} />
//         </div>

//         <div className="mb-4">
            // <h2 className="text-sm font-medium text-gray-500 mb-2 uppercase">Fonts And Display</h2>
//             <div className="p-2 bg-white border-b border-gray-100 flex justify-between items-center">
//                 <label className="block text-sm font-medium text-gray-700">Text Size</label>
//                 <Controller name="textSize" control={control}
//                     render={({ field }) => (
//                         <select {...field} className="mt-1 block w-1/2 border-gray-300 rounded-md  focus:border-blue-500 sm:text-sm">
//                             <option value="12pt">12pt</option>
//                             <option value="14pt">14pt</option>
//                             <option value="16pt">16pt</option>
//                             <option value="18pt">18pt</option>
//                         </select>
//                     )}
//                 />
//             </div>

//             <div className="flex items-center justify-between mb-4 p-2 bg-white">
//                 <label className="text-sm font-medium text-gray-700">Bold Text</label>
//                 <Controller name="boldText" control={control} render={({field}) => <input type="checkbox" checked={field.value} onChange={(e)=> field.onChange(e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />} />
//             </div>
//         </div>

//         <div className="flex items-center justify-between mb-4 p-2 bg-white">
//             <label className="text-sm font-medium text-gray-700">Display Zoom</label>
//             <Controller name="displayZoom" control={control} render={({field}) => <input type="checkbox" checked={field.value} onChange={(e)=> field.onChange(e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />} />
//         </div>
        
        // <div className="flex justify-between gap-2 items-center">
        //     <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" >Submit</button>
        //     <button type="reset" onClick={resetValues}  className="mt-4 w-full bg-white text-blue-600 py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" >Reset</button>
        // </div>
//     </form>
//   );
// };

// export default BrightnessSettings;
