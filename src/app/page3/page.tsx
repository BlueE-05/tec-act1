import Link from "next/link";
import Grid from "@/components/Grid";

export default function Page3() {
    return (
        <main className="min h-screen flex flex-col items-center justify-center">

            <Grid width={3} height={3} whiteColor="bg-gray-100" />
            
            <Link href=".." className="flex items-center justify-center bg-blue-500 w-40 h-16 rounded-full text-white mt-6">Back to Home</Link>
                
        </main>
    );
}