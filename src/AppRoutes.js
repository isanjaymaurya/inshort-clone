import { Routes, Route } from "react-router-dom"
import ArticlesPage from "./pages/ArticlesPage"
import SingleArticlePage from './pages/SingleArticlePage'
import Page404 from './pages/Page404'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ArticlesPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/article/:slug" element={<SingleArticlePage />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

export default AppRoutes