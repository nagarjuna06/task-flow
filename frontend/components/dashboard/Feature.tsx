import Image from "next/image";
type Props = {
  name: string;
};
const Feature = ({ name }: Props) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center text-gray-500">
        <Image src="/feature.svg" alt="feature" width={300} height={300} />
        <p>
          This <b>{name}</b> feature will be added in future updates.
        </p>
      </div>
    </div>
  );
};

export default Feature;
