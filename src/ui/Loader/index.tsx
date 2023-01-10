import { Center, CircularProgress } from "@chakra-ui/react";

interface PropsLoader {
  value?: number;
  size: string;
}

const Loader = ({ value, size }: PropsLoader) => {
  return (
    <Center w="100%">
      <CircularProgress isIndeterminate value={value} size={size} />
    </Center>
  );
};

export default Loader;
