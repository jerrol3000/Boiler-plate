import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import AppRoutes from "./components/AppRoutes";


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store}>
     < />
  </Provider>
);
