import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemsInput from "./MenuItemsInput";

const MenuSection = () => {
  const {control} = useFormContext(); // helps us link our form fiels to the form

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="sapce-y-2">
        <div className="mb-2">
            <h2 className="text-2xl font-bold">Menu</h2>
            <FormDescription>
                Cereate your menu and give name and price for each item
            </FormDescription>
        </div>
        <FormField control={control} name="menuItems" render={()=>(
            <FormItem className="flex flex-col gap-2">
                {fields.map((field, index)=>(
                    <MenuItemsInput key={field.id} index={index} removeMenuItem={()=> remove(index)} />
                ))}
            </FormItem>
        )} 
        />
        <Button className="bg-black text-white mt-2" type='button' onClick={() => append({name:"", price:""})}>Add Menu Item</Button>
    </div>
  )
}



export default MenuSection;