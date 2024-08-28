import Image from "next/image";
import styles from "./page.module.css";
import Location from "./components/Location";

export default function Home() {
	return (
		<main>
			<Location />
		</main>
	);
}
