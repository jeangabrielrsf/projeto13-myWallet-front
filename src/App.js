import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import TransactionsScreen from "./TransactionsScreen/TransactionsScreen";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/cadastro" element={<SignUp />} />
				<Route path="/atividades" element={<TransactionsScreen />} />
			</Routes>
		</BrowserRouter>
	);
}
