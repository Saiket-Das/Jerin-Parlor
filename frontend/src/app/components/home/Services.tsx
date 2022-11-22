import AppButton from "../shared/AppButton";
import Card from "../shared/Card";

const Services = () => {
  return (
    <div className="mt-32 mb-24 mx-6 md:mx-20 lg:mx-36">
      <h2 className="text-[34px] font-semibold text-center">
        Our Awesome <span className="text-primary">Services</span>
      </h2>

      <div className="mt-[72px] grid grid-cols-3  gap-10">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Services;
