import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import SignUp from "./components/SignUp/SignUp.js";
import TransactionsScreen from "./components/TransactionsScreen/TransactionsScreen.js";
import NewIncome from "./components/NewIncome/NewIncome.js";
import UserNameContext from "./contexts/UserNameContext.js";
import Login from "./components/Login/Login.js";
import NewOutcome from "./components/NewOutcome/NewOutcome.js";
import UserTokenContext from "./contexts/UserTokenContext.js";

export default function App() {
	const [userToken, setUserToken] = useState("");
	const [userName, setUserName] = useState("");
	return (
		<BrowserRouter>
			<UserTokenContext.Provider value={{ userToken, setUserToken }}>
				<UserNameContext.Provider value={{ userName, setUserName }}>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/cadastro" element={<SignUp />} />
						<Route path="/atividades" element={<TransactionsScreen />} />
						<Route path="/nova-entrada" element={<NewIncome />} />
						<Route path="/nova-saida" element={<NewOutcome />} />
					</Routes>
				</UserNameContext.Provider>
			</UserTokenContext.Provider>
		</BrowserRouter>
	);
}
