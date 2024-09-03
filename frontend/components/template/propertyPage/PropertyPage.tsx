"use client";
import PropertyImage from "@/components/atoms/propertyPage/PropertyImage";
import { useFetchPropertyData } from "@/hooks/useFetchPropertyData";
import { getPropertyValue } from "@/utlis/getPropertyValue";
import React from "react";
import { useParams } from "next/navigation";
import PropertyTitle from "@/components/atoms/propertyPage/PropertyTitle";
import CommentAndInquirySection from "@/components/molecules/propertyPage/CommentAndInquirySection";
import { PropertyTabs } from "@/components/organisms/propertyPage/PropertyTabs";
const PropertyPage = () => {
  const { properties } = useFetchPropertyData();

  const params = useParams();

  return (
    <div>
      {properties
        .filter((p) => p.id === params.propertyId)
        .map((p) => {
          const { id, properties: propertyData } = p;

          const imgUrl = getPropertyValue(propertyData.サムネイル, "file");
          const title = getPropertyValue(propertyData.タイトル, "title");
          const imgLink = getPropertyValue(propertyData.物件写真, "url");
          const rent = getPropertyValue(propertyData.家賃, "number");
          const inquiryForm = getPropertyValue(
            propertyData.お問い合わせフォーム,
            "url"
          );

          return (
            <div key={id}>
              <PropertyImage imgUrl={imgUrl} title={title} imgLink={imgLink} />
              <div className="max-w-[1200px] lg:h-[60lvh] flex flex-col lg:flex-row mx-auto">
                <div className="w-full lg:w-[60%] py-8 lg:pr-2">
                  <PropertyTitle title={title} rent={rent} />
                  <PropertyTabs propertyData={propertyData} />
                </div>
                <div className="w-full lg:w-[40%] py-8 lg:pl-2">
                  <div className="flex flex-col justify-between items-center bg-slate-300 rounded-lg p-2 lg:h-full h-[50lvh]">
                    <div className="overflow-y-auto">スタッフからの一言</div>
                    <CommentAndInquirySection inquiryForm={inquiryForm} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PropertyPage;
