import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
    cuisine: string;
    field: ControllerRenderProps<FieldValues, "cuisines">;
};
// This component is used to render a single cuisine checkbox. Example usage:
// field.value = ['Italian', 'Chinese']
// cuisine = 'Italian' 
// field.value.includes(cuisine) = true
const CuisineCheckbox = ({ cuisine, field }: Props) => {

    // const selectedCuisines = field.value || [];

    return (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
                <Checkbox className="bg-white"
                    checked={field.value.includes(cuisine)} // Safely access `includes`
                    onCheckedChange={(checked) => {
                        if (checked) {
                          field.onChange([...field.value, cuisine]);
                        } else {
                          field.onChange(
                            field.value.filter((value: string) => value !== cuisine)
                          );
                        }
                      }}
                />
            </FormControl>
            <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>

        </FormItem>
    )
}

export default CuisineCheckbox;