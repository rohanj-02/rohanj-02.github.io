import Navbar from './navbar/Navbar';
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
