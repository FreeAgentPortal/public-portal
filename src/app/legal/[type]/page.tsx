"use client";
import { Loading } from "@/components/loading";
import { useLegalType } from "@/state/useLegal";
import parse from "html-react-parser";
import he from "he";
import { useParams } from "next/navigation";

type Props = {};

const Legal = (props: Props) => {
  const params = useParams();
  const { data, isLoading } = useLegalType(params.type as string);

  if (isLoading || !data) {
    return <Loading />;
  }

  const decodedContent = he.decode(data.payload.content || "");

  return (
    <div className='prose mx-auto p-6'>
      <h1 className='text-3xl font-bold w-full mb-4'>{data.payload.title}</h1>
      <div>{parse(decodedContent)}</div>
    </div>
  );
};

export default Legal;
