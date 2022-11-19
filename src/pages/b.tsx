import { GetStaticProps, NextPage } from "next";

import Example from "@/components/Example";
import { PageContent } from "@/components/Layout/Page";
import { makeStaticTranslationProps } from "@/helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const B: NextPage = () => {
  return (
    <PageContent>
      <Example text="B" />
    </PageContent>
  );
};

export default B;
