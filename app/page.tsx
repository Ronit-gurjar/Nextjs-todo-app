import Addtask from "./components/Addtask";


export default function Home() {
  return (
    <main className="flex min-h-screen max-w-2xl mx-auto flex-col items-center justify-between mt-4">
      <div className="text-center my-2 flex flex-col gap-2">
        <h1 className="font-bold">todo app</h1>
        <Addtask/>
      </div>
    </main>
  )
}
