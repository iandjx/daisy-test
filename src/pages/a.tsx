import { GetStaticProps, NextPage } from "next";

import Example from "@/components/Example";
import { PageContent } from "@/components/Layout/Page";
import { makeStaticTranslationProps } from "@/helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const A: NextPage = () => {
  return (
    <PageContent background={"radialGradients"}>
      <Example text="A" />
      <div style={{ height: "150vh" }}></div>
      <Example text="A" />
    </PageContent>
  );
};

export default A;
