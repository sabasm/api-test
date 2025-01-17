import { PokeProvider } from "@/contexts/PokeContext"
import "./globals.css"
export const metadata = {
  title: "My Pokedex App",
  description: "A simple Pokédex app built with React"
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PokeProvider>
          <main>
            {children}
          </main>
        </PokeProvider>
      </body>
    </html>
  )
}
