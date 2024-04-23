import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ArticlePage from "../ArticlePage/ArticlePage";
// import NotFound from "../NotFound/NotFound";


const AppRoute = () => {

    return (

        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/article-page" element={<ArticlePage />} />

                    {/* <Route path="*" element={ <NotFound />} /> Fallback for unmatched routes */}

                </Routes>

            </Router>
        </>
    );
}


export default AppRoute;