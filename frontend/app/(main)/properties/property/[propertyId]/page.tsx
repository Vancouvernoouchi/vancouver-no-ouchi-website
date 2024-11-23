import PropertyPage from "@/components/template/propertyPage/PropertyPage";
import { apiClient } from "@/config/apiClient";
import { FormattedPropertyData, NotionProperty } from "@/types/notionTypes";
import { formatPropertyData } from "@/utlis/getPropertyValue";
import { AxiosResponse } from "axios";

/**
 * 物件詳細ページに必要なデータをfetchし整理するコンポーネント
 *
 * @param params { propertyId: string }
 *
 */
const PropertyDetailPage = async ({
  params,
}: {
  params: { propertyId: string };
}) => {
  const { propertyId } = params;
  try {
    const response: AxiosResponse = await apiClient.get(
      `/properties/${propertyId}`
    );
    const data: NotionProperty = response.data;
    const propertyData: FormattedPropertyData | null = formatPropertyData(data);

    if (propertyData !== null) {
      return (
        <div>
          <PropertyPage property={propertyData} />
        </div>
      );
    } else {
      return (
        <div className="h-[88vh] p-2 flex flex-col justify-center items-center text-center text-red-500 text-xl">
          物件情報が見つかりませんでした。URLをお確かめください。
        </div>
      );
    }
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return (
      <div className="h-[88vh] p-2 flex flex-col justify-center items-center text-center text-red-500 text-xl">
        データの取得中にエラーが発生しました。もう一度お試しください。
      </div>
    );
  }
};

export default PropertyDetailPage;
