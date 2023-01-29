import { Table, Thead, Tr, Th, TableContainer } from "@chakra-ui/react";
import { colsProps } from "./entities";
import Rows from "./Rows";

interface PropsTable {
  size?: string;
  cols: colsProps;
  data: any;
  maxHeight: string;
}

const TableApp = ({ size, cols, data, maxHeight }: PropsTable) => {
  return (
    <TableContainer
      maxHeight={maxHeight}
      overflowY={"auto"}
      overflowX={"hidden"}
      borderRadius={"5px"}
      border={"1px solid #7AC1E4"}
      display={"flex"}
      alignSelf={"center"}
    >
      <Table variant="simple" size={size} colorScheme={"telegram"}>
        <Thead position="sticky" top={0} bgColor={"telegram.300"} zIndex={999}>
          <Tr>
            {cols.map((col) => {
              return (
                <Th
                  color={"white"}
                  fontSize={"16px"}
                  textAlign={col.name === "actions" ? "center" : "left"}
                >
                  {col.name}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Rows cols={cols} data={data} />
      </Table>
    </TableContainer>
  );
};

export default TableApp;
