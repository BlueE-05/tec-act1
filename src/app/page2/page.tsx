import Rectangle from "@/components/Rectangle";

export default function Page2() {
    return (
        <main className="bg-black min h-screen flex flex-col items-center justify-center gap-4">
            
            <Rectangle color="blue" />

            <div className="flex justify-center items-center h-screen">
                <a href="..">
                <button className="flex items-center justify-center bg-blue-500 w-40 h-16 rounded-full text-white">Back to Home</button>
                </a>
            </div>
        </main>
    );
}