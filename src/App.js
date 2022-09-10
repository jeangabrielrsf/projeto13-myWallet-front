import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import TransactionsScreen from "./TransactionsScreen/TransactionsScreen";
import NewIncome from "./NewIncome/NewIncome";
import NewOutcome from "./NewOutcome/NewOutcome";
import UserTokenContext from "./contexts/UserTokenContext";

export default function App() {
	const [userToken, setUserToken] = useState("");
	return (
		<BrowserRouter>
			<UserTokenContext.Provider value={{ userToken, setUserToken }}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/cadastro" element={<SignUp />} />
					<Route path="/atividades" element={<TransactionsScreen />} />
					<Route path="/nova-entrada" element={<NewIncome />} />
					<Route path="/nova-saida" element={<NewOutcome />} />
				</Routes>
			</UserTokenContext.Provider>
		</BrowserRouter>
	);
}
