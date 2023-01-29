import { Image } from "@chakra-ui/react";

interface PropsImg {
  borderRaduis?: string;
  src: string | undefined;
  alt?: string | undefined;
  boxSize?: string;
}

const Img = ({ borderRaduis, src, alt, boxSize }: PropsImg) => {
  return (
    <Image borderRadius={borderRaduis} boxSize={boxSize} src={src} alt={alt} />
  );
};

export default Img;
