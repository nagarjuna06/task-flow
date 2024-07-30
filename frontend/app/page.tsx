import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-3 justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">
        Welcome to{" "}
        <span className="text-primary">{process.env.NEXT_PUBLIC_APP_NAME}</span>
        !
      </h1>
    </main>
  );
}
