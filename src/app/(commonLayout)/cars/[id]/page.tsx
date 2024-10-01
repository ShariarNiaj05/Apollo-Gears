"use client";

const CarDetailsPage = ({ params }: { id: string }) => {
  console.log(params);
  const { id } = params;
  return <div>CarDetailsPage {id}</div>;
};

export default CarDetailsPage;
