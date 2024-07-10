import { Badge, Table } from "@mantine/core";
import { voidFragments } from "../../assets/data/voidFragments";
import { Link } from "react-router-dom";

export function VoidFragments() {

    return (
        <div>
            <h1>Void Fragments</h1>
            <Table maw='50%' align="center" ta='left'>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Zone</Table.Th>
                        <Table.Th>Area</Table.Th>
                        <Table.Th>Type</Table.Th>
                        <Table.Th>Monomer</Table.Th>
                        <Table.Th>Polymer</Table.Th>
                        <Table.Th>Inorganic</Table.Th>
                        <Table.Th>Organic</Table.Th>
                        <Table.Th>Solenoid</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{getTableRows()}</Table.Tbody>
            </Table>
        </div>
    )
}

function getTableRows() {
    const tableRows = voidFragments.map((fragment) => (
        <Table.Tr key={fragment.area}>
            <Table.Td><Link to={`/world/${fragment.zone.key}`}>{fragment.zone.name}</Link></Table.Td>
            <Table.Td>{fragment.area}</Table.Td>
            <Table.Td><Badge color={fragment.type.color}>{fragment.type.name}</Badge></Table.Td>
            <Table.Td>{fragment.loot.monomer}</Table.Td>
            <Table.Td>{fragment.loot.polymer}</Table.Td>
            <Table.Td>{fragment.loot.inorganic}</Table.Td>
            <Table.Td>{fragment.loot.organic}</Table.Td>
            <Table.Td>{fragment.loot.solenoid}</Table.Td>
        </Table.Tr>
    ))

    return tableRows
}