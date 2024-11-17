
import Toggle from "@/components/toggle";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-300 dark:bg-slate-900">
    
    <div className="text-center">
      <h1 className="text-[150px] dark:text-white">Dark/Light Mode Toggle</h1>
      <p className="text-4xl dark:text-white">Click the button to switch between dark and light modes.</p>

    <div className="align-middle m-auto text-4xl mt-4">
      <Toggle /> 
    </div>
      

    </div>
  </main>
  );
}
