import { ReactNode } from "react";

import Footer from "../components/footer";
import Header from "../components/header";

type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main className="pt-[120px]">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
