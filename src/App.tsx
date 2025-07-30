import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const Root = React.lazy(() => import("./components/commonComponent/Root"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Home = React.lazy(() => import("./pages/Home"));
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./components/commonComponent/ErrorFallBack";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ErrorBoundary
                FallbackComponent={ErrorFallBack}
                // onReset={() => window.location.reload()}
                resetKeys={[location.pathname]}
              >
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Root />
                </Suspense>
              </ErrorBoundary>
            }
          >
            <Route
              index
              element={
                <ErrorBoundary FallbackComponent={ErrorFallBack}>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Home />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="/shop"
              element={
                <ErrorBoundary FallbackComponent={ErrorFallBack}>
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Shop />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
        </Routes>
        {/* <Routes></Routes> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
