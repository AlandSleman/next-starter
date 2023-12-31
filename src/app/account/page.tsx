import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import LogOutBtn from "./LogoutBtn";

export default async function Page() {
  let session = await getServerAuthSession();
  if (!session?.user) redirect("/login");
  return (
    <main className="flex min-h-screen flex-col   text-white">
      <div className="container flex max-w-xl flex-col items-center justify-center gap-6 px-4 py-10 ">
        id: {session?.user.id}
        <br />
        username: {session?.user.username}
        <br />
        provider: {session?.user.provider}
        <LogOutBtn />
      </div>
    </main>
  );
}
