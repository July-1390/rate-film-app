import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  rootElement
);
