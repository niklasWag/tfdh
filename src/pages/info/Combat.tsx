import { Badge, Table } from "@mantine/core"
import { Element } from "../../assets/data/constants"

export function Combat() {
    return (
        <div>
            <h1>Combat</h1>
            <h2>Resistances</h2>
            <Table maw='50%' align="center" ta='left'>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Element</Table.Th>
                        <Table.Th>Resistant against</Table.Th>
                        <Table.Th>Weak against</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{getTableRows()}</Table.Tbody>
            </Table>
        </div>
    )
}

function getTableRows() {
    const tableRows = Element.allElements.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td><Badge color={element.color}>{element.name}</Badge></Table.Td>
            <Table.Td>{createElementList(element.hasResistanceAgainst())}</Table.Td>
            <Table.Td>{createElementList(element.isWeakAgainst())}</Table.Td>
        </Table.Tr>
    ))

    return tableRows
}

function createElementList(arr: Element[]) {
    const elementList = arr.map(element => (
        <Badge color={element.color}>{element.name}</Badge>
    ))

    return elementList
}