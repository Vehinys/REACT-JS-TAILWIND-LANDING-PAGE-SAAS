import { Container } from "./Container";
import { Headings } from "./Headings";

export const Pricing = () => {
  return (
    <div id="pricing">
      <Headings title="Foxart" subtitle="Pricing" />
      <Container>
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16">
          {pricing.map((item) => 
          
          
          )}
        </div>
      </Container>
    </div>
  );
};
