import React from "react";
import Container from "../../commonComponent/Container";
import OfferItem from "../../commonComponent/OfferItem";

const offers: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-4 gap-x-6">
          <OfferItem title={"FLASH SALE TODAY"} />
        </div>
      </Container>
    </div>
  );
};

export default offers;

// BEST SELLERS
// TOP RATED
// NEW ARRIVAL
