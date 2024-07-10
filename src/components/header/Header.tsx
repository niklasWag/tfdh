import classes from "./Header.module.css"
import { Container, Group, Burger, Menu, Center } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"
import { routes } from "../../routes"
import { Link, useNavigate } from "react-router-dom"

export function HeaderMenu() {
    const [opened, { toggle }] = useDisclosure(false, {
        onOpen: () => console.log("Menu opened"),
        onClose: () => console.log("Menu closed") 
    })
    const items = generateItems()
    const navigate = useNavigate()

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <div onClick={() => navigate('/')}>LOGO</div>
                    <Group gap={5} visibleFrom="sm">{items}</Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </header>
    )
}


function generateItems(): JSX.Element[] {
    const items = routes.map((route) => {
        const menuItems = route.links?.map((link) => (
            <Link to={link.path} className={classes.link}>
                {link.label}
            </Link>
        ))

        if (menuItems) {
            return (
                <Menu key={route.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <Link
                            to={route.path}
                            className={classes.link}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{route.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5}/>
                            </Center>
                        </Link>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            )
        }

        return (
            <Link
                key={route.label}
                to={route.path}
                className={classes.link}
            >
                {route.label}
            </Link>
        )
    })

    return items
}