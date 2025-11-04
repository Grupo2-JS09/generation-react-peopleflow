
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand as={Link} to='/home'>
                    <img
                        src='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/IOFMV6TTCNA6XJA5KYYRG6I55I.jpg'
                        className='mr-3 h-6 sm:h-9'
                        alt='Grande Snoop'
                    />
                    <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                        SNOOP DRUGG
                    </span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink as={Link} to='/categorias'>
                        Listar Categorias
                    </NavbarLink>
                    <NavbarLink as={Link} to='/cadastrarcategorias'>
                        Cadastrar Categoria
                    </NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}