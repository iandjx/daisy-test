import { GetStaticProps, NextPage } from "next";

import { RouteLoader } from "@/components/RouteLoader";
import { makeStaticTranslationProps } from "@/helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const Test: NextPage = () => {
  return <RouteLoader />;
};

export default Test;
