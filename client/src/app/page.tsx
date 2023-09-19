"use client";

import NumberDisplay from "./components/NumberDisplay";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Provider store={store}>
        <NumberDisplay />
      </Provider>
    </main>
  );
}
