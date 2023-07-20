import Image from "next/image";

const CloudImg = (props) => {
  return (
    <Image
      {...props}
      src={process.env.NEXT_PUBLIC_STRAPI_SERVER + props.src}
    />
  );
};

export default CloudImg;
