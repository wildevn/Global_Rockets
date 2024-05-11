
import ProductsList from "@/components/ProductsList";
import BannerItem from "@/components/BannerItem";

export default async function Home() {
	return (
		<main className="w-full h-full flex flex-col flex-wrap items-center justify-items-center bg-defaultBackground">
			<BannerItem/>
			<span className="text-white text-2xl self-start pl-5 pt-5">Produtos mais vendidos</span>
			<ProductsList/>
			<span className="text-white text-2xl self-start pl-5 pt-5">Produtos mais acessados na semana</span>
			<ProductsList/>
		</main>
	)
}
