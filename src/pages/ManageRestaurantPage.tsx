import { useCreateMyRestaurant, useGetmyRestaurant, useGetMyRestaurantOrders, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderItemCard from "@/components/OrderItemCard";

const ManageRestaurantPage = () => {
  const { createRestaurat, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetmyRestaurant();
  const { updateRestaurat, isLoading: isUpdatedLoading } = useUpdateMyRestaurant();

  const { orders } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger  value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>

      <TabsContent  value="orders"
        className="space-y-5 bg-gray-50 p-10 rounded-lg">
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm onSave={isEditing ? updateRestaurat : createRestaurat} isLoading={isCreateLoading || isUpdatedLoading} restaurant={restaurant} />
      </TabsContent>
    </Tabs>

  )
}

export default ManageRestaurantPage;