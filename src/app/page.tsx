
import ProductsList from "@/components/produto/ProductsList";
import BannerItem from "@/components/BannerItem";
import HeaderComponent from "@/components/HeaderComponent";
import MarketsListComponent from "@/components/MarketsListComponent";

export default async function Home() {
	return (
		<main className="w-full h-full flex flex-col flex-wrap items-center justify-items-center bg-defaultBackground">
			<HeaderComponent/>
			<MarketsListComponent/>
			<BannerItem/>
			<span className="text-white text-2xl self-start pl-5 pt-5">Produtos mais vendidos</span>
			<ProductsList/>
			<span className="text-white text-2xl self-start pl-5 pt-5">Produtos mais acessados na semana</span>
			<ProductsList/>
		</main>
	)
}
