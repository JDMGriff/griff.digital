import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
	return (
		<header className="absolute left-0 top-0 w-full p-8 flex justify-end">
			<div className="hidden md:block">
				<Nav />
			</div>
			<div className="block md:hidden">
				<MobileNav />
			</div>
		</header>
	)
}

export default Header