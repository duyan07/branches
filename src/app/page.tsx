import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-xl mt-20 mb-5">Welcome to Branches</h1>
      <p className="text-slate-500">
        The next-generation task management app for group work. Deligate tasks, set reminders for them, cross them off, and more, all in one place. Branches is the ultimate team-productivity tool.
      </p>
      <div className="my-20">
        <button className="bg-black text-white px-3 py-2 rounded-xl">Log-In</button>
        <p className="my-2">or</p>
        <button className="border-black">Create a New Account</button>
      </div>
    </main>
  );
}
