/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const CarDetailsPage = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) => {
  console.log(params);
  const { id } = params;
  console.log(id);
  console.log(searchParams);
  return <div>CarDetailsPage {id}</div>;
};

export default CarDetailsPage;
