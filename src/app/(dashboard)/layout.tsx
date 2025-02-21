export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className="p-4 md:p-8 m-3 rounded-lg bg-white min-h-screen ">
         {children}
      </div>
   );
}