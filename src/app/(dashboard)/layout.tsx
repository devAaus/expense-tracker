import Sidebar from "@/components/sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className="grid md:grid-cols-6 gap-10 px-4 md:px-8">
         <div className="md:col-span-2 lg:col-span-1 border-b md:border-b-0 md:border-r border-zinc-400">
            <Sidebar />
         </div>
         <main className="md:col-span-4 lg:col-span-5 p-4 lg:p-8">
            {children}
         </main>
      </div>
   );
}