import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

const Page404 = () => {
    const navigate = useNavigate()
    return (
        <>
        <MainLayout>
            <section>
                <div className="text-center">
                    <div className="text-center text-4xl my-4">404 page not found</div>
                    <button className="rounded px-4 py-2 hover:bg-gray-50 text-base font-medium" onClick={() => navigate('/')}>Go to Home</button>
                </div>
            </section>
        </MainLayout>
        </>
    )
}

export default Page404