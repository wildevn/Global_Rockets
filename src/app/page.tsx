
import ProductItem from "@/components/ProductItem";
import ProductsList from "@/components/ProductsList";

export default async function Home() {
	return (
		<main className="w-full flex h-screen bg-defaultBackground">
			<ProductsList/>
		</main>
	)
}
