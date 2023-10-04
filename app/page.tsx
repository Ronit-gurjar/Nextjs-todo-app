import Addtask from "./components/Addtask";
import Todolist from "./components/Todolist";


export default function Home() {
  return (
    <main className="flex min-h-screen max-w-2xl mx-auto flex-col items-center justify-start mt-4">
      <div className="text-center my-2 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">todo app</h1>
        <Addtask/>
      </div>
      <Todolist/>
    </main>
  )
}
