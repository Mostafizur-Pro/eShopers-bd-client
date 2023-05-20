import { RouterProvider } from "react-router-dom";
import router from "./Routes/NormalRoute/Routes";

function App() {
  return (
    // <div className="max-w-screen-xl mx-auto">
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
