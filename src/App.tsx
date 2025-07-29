import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Root from "./components/commonComponent/Root";
import Shop from "./pages/Shop";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./components/commonComponent/ErrorFallBack";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<Root />}>
            <Route
              index
              element={
                <ErrorBoundary FallbackComponent={ErrorFallBack}>
                  <Home />
                </ErrorBoundary>
              }
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
        </Routes>
        {/* <Routes></Routes> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
