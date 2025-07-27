import { RouterProvider } from "react-router";
import AuthProvider from "./Context/AuthContext";
import GlobalProvider from "./Context/GlobalContext";
import router from "./routes/routes";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
