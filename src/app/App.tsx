import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
