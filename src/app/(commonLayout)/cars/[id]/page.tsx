"use client";
import { useParams } from "next/navigation";

const CarDetailsPage = ({ params }: { params: object }) => {
  console.log(params);
  const { id } = useParams();
  return <div>CarDetailsPage {id}</div>;
};

export default CarDetailsPage;
