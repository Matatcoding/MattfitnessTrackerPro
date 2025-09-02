import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Activity from "./activities/Activity.jsx";
import Error404 from "./Error404.jsx";
import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activities/:id" element={<Activity />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
