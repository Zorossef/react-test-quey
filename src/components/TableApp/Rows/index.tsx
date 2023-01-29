import Img from "@/pages/Admin/components/Img";
import Actions from "@/ui/Actions/Actions";
import { Tbody, Tr, Td } from "@chakra-ui/react";

interface colsProps {
  cols: {
    name: string;
    key: string;
  }[];
  data: any;
}

const Rows = ({ cols, data }: colsProps) => {
  console.log("cols", cols);
  return (
    <>
      <Tbody>
        {data?.map((d: any) => {
          return (
            <Tr>
              {cols.map((col) => {
                if (col.key === "actions") {
                  return (
                    <Td cursor={"pointer"} position="relative">
                      <Actions id={d.id} />
                    </Td>
                  );
                }
                if (col.key === "thumbnail") {
                  return (
                    <Td cursor={"pointer"} position="relative">
                      <Img
                        src={d.thumbnail}
                        alt={d.title}
                        borderRaduis={"full"}
                        boxSize="50px"
                      />
                    </Td>
                  );
                }
                return (
                  <Td color={"#064A6D"} fontWeight={"600"}>
                    {d[col.key]}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </>
  );
};
export default Rows;
