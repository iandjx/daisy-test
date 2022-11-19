import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import "twin.macro";

import { ErrorPage } from "@/components/Error";
import { makeStaticTranslationProps } from "@/helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const FiveOhFive: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>500</title>
      </Head>

      <ErrorPage
        statusCode={500}
        title={t("error.500.title")}
        // subTitle={t("error.500.subtitle")}
        buttonText={t("global.goToHomepage")}
      />
    </>
  );
};

export default FiveOhFive;
