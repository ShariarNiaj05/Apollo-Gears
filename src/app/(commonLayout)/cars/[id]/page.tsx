"use client";

const CarDetailsPage = ({ params }: { params: { id: string } }) => {
  console.log(params);
  const { id } = params;
  console.log(id);
  return <div>CarDetailsPage {id}</div>;
};

export default CarDetailsPage;
