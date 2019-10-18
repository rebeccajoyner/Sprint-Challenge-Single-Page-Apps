import React from "react";
import Header from "./components/Header.js";
import TabNav from "./components/TabNav.js";
import AppRouter from "./components/AppRouter.js";
import SearchForm from './components/SearchForm';



export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <TabNav />
      <AppRouter />
    </main>
  );
}
