import { useCreateMyRestaurant, useGetmyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const {createRestaurat, isLoading: isCreateLoading} = useCreateMyRestaurant();
  const {restaurant} = useGetmyRestaurant();
  const { updateRestaurat, isLoading: isUpdatedLoading } = useUpdateMyRestaurant();
 
  const isEditing = !!restaurant;
  
  return (
    <ManageRestaurantForm  onSave={isEditing? updateRestaurat : createRestaurat} isLoading={isCreateLoading || isUpdatedLoading} restaurant={restaurant}  />
  )
}

export default ManageRestaurantPage;