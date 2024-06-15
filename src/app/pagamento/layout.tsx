import ReducedHeaderComponent from "@/components/ReducedHeaderComponent"

export const metadata = {
  title: 'Pagamento',
  description: 'Compre agora seu produto',
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
					<ReducedHeaderComponent/>
				</header>
        {children}
      </body>
    </html>
  )
}
