import { prisma } from "@repo/db/client";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div className="bg-black text-white h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-2">
        <div>{user?.username}</div>
        <div>{user?.password}</div>
      </div>
    </div>
  );
}
