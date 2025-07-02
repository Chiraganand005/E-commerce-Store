import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
// This code initializes a React application with Chakra UI for styling and React Router for navigation.
// It renders the main App component inside a ChakraProvider and BrowserRouter, allowing for responsive design
// and client-side routing, respectively. The application is mounted to the root element in the HTML