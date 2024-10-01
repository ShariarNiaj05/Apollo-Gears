"use client";
import { useParams } from "next/navigation";

const CarDetailsPage = () => {
  const { id } = useParams();
  return <div>CarDetailsPage {id}</div>;
};

export default CarDetailsPage;
