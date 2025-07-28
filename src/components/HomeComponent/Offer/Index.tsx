import React from "react";
import Container from "../../commonComponent/Container";
import OfferItem from "../../commonComponent/OfferItem";
import {
  useBestSellerData,
  useFlashSaleOffer,
  useNewArrivalData,
  useTopRatedData,
} from "../../../hooks/UseQuery";
import OfferItemSkeleton from "../../Skeleton/OfferItemSkeleton";
import FeatureProductError from "../../Error/FeatureProductError";

const offers: React.FC = () => {
  const FlashSale = useFlashSaleOffer();
  const BestSale = useBestSellerData();
  const TopRated = useTopRatedData();
  const NewArrival = useNewArrivalData();
  console.log(FlashSale);

  if (
    FlashSale.isPending ||
    BestSale.isPending ||
    TopRated.isPending ||
    NewArrival.isPending
  ) {
    return <OfferItemSkeleton />;
  }
  if (
    FlashSale.isError ||
    BestSale.isError ||
    TopRated.isError ||
    NewArrival.isError
  ) {
    return (
      <div className="">
        <Container>
          {" "}
          <FeatureProductError
            className="h-[400px]"
            errorMessage="Something went wrong in fetching offer Item"
            onTry={FlashSale.refetch()}
          />
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <div className="grid grid-cols-4 gap-x-3">
          <OfferItem title={"FLASH SALE TODAY"} wholeData={FlashSale} />
          <OfferItem title={"BEST SELLERS"} wholeData={BestSale} />
          <OfferItem title={"TOP RATED"} wholeData={TopRated} />
          <OfferItem title={"NEW ARRIVAL"} wholeData={NewArrival} />
        </div>
      </Container>
    </div>
  );
};

export default React.memo(offers) || offers;

// BEST SELLERS
// TOP RATED
// NEW ARRIVAL
