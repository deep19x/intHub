import Navbar from "../components/layout/Navbar";

function Dashboard() {
    return (
        <>
            <Navbar/>

            <main className="mx-auto max-w-screen-2xl px-8 py-8">
                <h1 className="text-3xl font-bold">
                    Welcome back 👋
                </h1>
            </main>

        </>
    )
};

export default Dashboard;