import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ClassPage from "./pages/classpage/ClassPage"; // Import the ClassPage
import Layout from "./layouts/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/class/:classId"
          element={
            <Layout>
              <ClassPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
