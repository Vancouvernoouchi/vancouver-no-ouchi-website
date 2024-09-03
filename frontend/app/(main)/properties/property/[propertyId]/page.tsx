import PropertyPage from "@/components/template/propertyPage/PropertyPage";
import { Suspense } from "react";

const PropertyDetailPage = ({ params }: { params: { propertyId: string } }) => {
  const { propertyId } = params;

  return (
    <div>
      <Suspense>
        <PropertyPage />
      </Suspense>
    </div>
  );
};

export default PropertyDetailPage;
