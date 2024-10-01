"use client";
import { useParams } from "next/navigation";

const CarDetailsPage = ({ params }: { params: object }) => {
  console.log(params);
  const { id } = params;
  return <div>CarDetailsPage {id}</div>;
};

export default CarDetailsPage;
