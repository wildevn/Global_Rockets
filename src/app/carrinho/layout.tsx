import HeaderComponent from "@/components/HeaderComponent"

export const metadata = {
  title: 'Carrinho',
  description: 'Carrinho de compras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
					<HeaderComponent/>
				</header>
        {children}
      </body>
    </html>
  )
}
