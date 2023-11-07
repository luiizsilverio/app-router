export const metadata = {
  title: "Painel do site",
  description: "Este é o painel administrativo do site"
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <p>Header do dashboard</p>
      {children}
    </>
  )
}
