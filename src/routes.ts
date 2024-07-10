export const routes: Route[] = [
    {
        path: "world",
        label: "World",
        links: [
            {
                path: 'world/kingston',
                label: 'Kingston'
            },
            {
                path: 'world/sterileLand',
                label: 'Sterile Land'
            },
            {
                path: 'world/vespers',
                label: 'Vespers'
            },
            {
                path: 'world/echoSwamp',
                label: 'Echo Swamp'
            },
            {
                path: 'world/agnaDesert',
                label: 'Agna Desert'
            },
            {
                path: 'world/whitenightGulch',
                label: 'White-night Gulch'
            },
            {
                path: 'world/hegios',
                label: 'Hegios'
            },
            {
                path: 'world/fortress',
                label: 'Fortress'
            }
        ]
    },
    {
        path: "descendants",
        label: "Descendants",
        links: [
            {
                path: 'descendants/lepic',
                label: 'Lepic'
            },
            {
                path: 'descendants/ajax',
                label: 'Ajax'
            }
        ]
    },
    {
        path: "farming",
        label: "Farming",
        links: [
            {
                path: 'farming/voidFragments',
                label: 'Void Fragments'
            }
        ]
    }
]

type Route = {
    path: string
    label: string
    links?: Route[]
}