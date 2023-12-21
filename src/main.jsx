import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster />
    </QueryClientProvider>
  </AuthProvider>
);
