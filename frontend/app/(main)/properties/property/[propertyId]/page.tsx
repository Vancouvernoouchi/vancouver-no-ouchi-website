import PropertyPage from "@/components/template/propertyPage/PropertyPage";
import { apiClient, apiClientFetch } from "@/config/apiClient";
import { FormattedPropertyData, PropertyData } from "@/types/notionTypes";
import { getPropertyValue } from "@/utlis/getPropertyValue";

const PropertyDetailPage = async ({
  params,
}: {
  params: { propertyId: string };
}) => {
  const { propertyId } = params;
  try {
    const { data: property } = await apiClient.get(`/properties/${propertyId}`);
    const propertyData: PropertyData = property.properties;

    const formattedPropertyData: FormattedPropertyData = {
      id: property.id,
      moveInDate: getPropertyValue(propertyData.入居可能日, "date"),
      image: getPropertyValue(propertyData.物件写真, "url"),
      hasSauna: getPropertyValue(propertyData.サウナ, "checkbox"),
      minimumStay: getPropertyValue(propertyData.ミニマムステイ, "select"),
      bathroomShareCount: getPropertyValue(
        propertyData.バスルームのシェア人数,
        "select"
      ),
      rent: getPropertyValue(propertyData.家賃, "number"),
      status: getPropertyValue(propertyData.ステータス, "select"),
      forCouple: getPropertyValue(propertyData.カップル可, "checkbox"),
      deposit: getPropertyValue(propertyData.デポジット, "number"),
      inquiryForm: getPropertyValue(propertyData.お問い合わせフォーム, "url"),
      closestStation: getPropertyValue(propertyData.最寄り駅, "select"),
      targetGender: getPropertyValue(propertyData.住居人の性別, "select"),
      hasKey: getPropertyValue(propertyData.鍵付き, "checkbox"),
      area: getPropertyValue(propertyData.エリア, "select"),
      forMale: getPropertyValue(propertyData.男性限定, "checkbox"),
      staffComment: getPropertyValue(
        propertyData.スタッフからのコメント,
        "rich_text"
      ),
      hasPool: getPropertyValue(propertyData.プール, "checkbox"),
      moveOutDate: getPropertyValue(propertyData.退去予定日, "date"),
      forFemale: getPropertyValue(propertyData.女性限定, "checkbox"),
      hasWifi: getPropertyValue(propertyData.Wifi込み, "checkbox"),
      hasUtilities: getPropertyValue(propertyData.光熱費込み, "checkbox"),
      timeToStation: getPropertyValue(propertyData.最寄り駅まで, "select"),
      kitchenShareCount: getPropertyValue(
        propertyData.キッチンのシェア人数,
        "select"
      ),
      hasLaundry: getPropertyValue(propertyData.ランドリー無料, "checkbox"),
      hasGym: getPropertyValue(propertyData.ジム, "checkbox"),
      thumbnail: getPropertyValue(propertyData.サムネイル, "file"),
      zone: getPropertyValue(propertyData.ゾーン, "select"),
      houseShareCount: getPropertyValue(
        propertyData.物件のシェア人数,
        "select"
      ),
      title: getPropertyValue(propertyData.タイトル, "title"),
    };

    return (
      <div>
        <PropertyPage property={formattedPropertyData} />
      </div>
    );
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
