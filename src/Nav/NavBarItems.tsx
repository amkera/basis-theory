export type NavBarItemsProps = {
  title: string
  url: string
}

export const NavBarItems: NavBarItemsProps[] = [
  { title: "All Customers", url: "/" },
  { title: "Checkout", url: "/checkout" },
  { title: "Search", url: "/search" },
]
