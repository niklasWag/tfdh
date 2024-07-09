import classes from "./Header.module.css"
import { Container, Group, Burger, Menu, Center } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"
import routes from "../../routes.json"

export function HeaderMenu() {
    const [opened, { toggle }] = useDisclosure(false, {
        onOpen: () => console.log("Menu opened"),
        onClose: () => console.log("Menu closed") 
    })
    const items = generateItems()

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <div>LOGO</div>
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
            <Menu.Item key={link.path}>{link.label}</Menu.Item>
        ))

        if (menuItems) {
            return (
                <Menu key={route.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={route.path}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{route.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5}/>
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            )
        }

        return (
            <a
                key={route.label}
                href={route.path}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {route.label}
            </a>
        )
    })

    return items
}