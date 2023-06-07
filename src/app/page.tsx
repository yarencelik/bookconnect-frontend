/* eslint-disable react/no-children-prop */
// eslint-disable-next-line react/no-children-prop
import Image from "next/image";
import SidebarWithHeader from "./Navigation";

export default function Home() {
   return (
      <>
         <SidebarWithHeader children={undefined} />
      </>
   );
}
