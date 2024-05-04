
import ProductsList from "@/components/ProductsList";
import BannerItem from "@/components/BannerItem";

export default async function Home() {
	return (
		<main className="w-full flex flex-col items-center justify-items-center h-screen bg-defaultBackground">
			<BannerItem/>
			<ProductsList/>
		</main>
	)
}
