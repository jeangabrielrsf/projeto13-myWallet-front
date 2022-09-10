import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import TransactionsScreen from "./TransactionsScreen/TransactionsScreen";
import NewIncome from "./NewIncome/NewIncome";
import NewOutcome from "./NewOutcome/NewOutcome";
import UserTokenContext from "./contexts/UserTokenContext";
import UserNameContext from "./contexts/UserNameContext";

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
