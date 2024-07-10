export const routes: Route[] = [
    {
        path: "demo",
        label: "Demo",
    },
    {
        path: "test2",
        label: "Test2",
        links: [
            {
                path: "test2/subtest",
                label: "Subtest"
            }
        ]
    },
    {
        path: "test3",
        label: "Test3",
        links: [
            {
                path: "test3/subtest",
                label: "Subtest"
            },
            {
                path: "test3/subtest2",
                label: "Subtest2"
            }
        ]
    }
]

type Route = {
    path: string
    label: string
    links?: Route[]
}