import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
    const { control, watch } = useFormContext();

    const existingImgeUrl = watch("imgUrl");

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Image</h2>
                <FormDescription>
                    Add an image that will be displayed on your restaurant listing int the search results. Adding a new image will overwrite the ezisting one.
                </FormDescription>
            </div>

            <div className="flex flex-col gap-8 md:w-[50%]">
                {
                    existingImgeUrl && (
                        <AspectRatio ratio={16/9}>
                            <img src={existingImgeUrl} className="rounded-md object-cover h-full w-full"/>
                        </AspectRatio>
                    )
                }
                <FormField control={control} name='imageFile'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    className="bg-white"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={(event) => field.onChange(event.target.files ? event.target.files[0] : null)}
                                />
                            </FormControl>
                            <FormMessage className="text-red-500"/>
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}

export default ImageSection;