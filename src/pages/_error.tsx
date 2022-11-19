import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import { ErrorPage } from "@/components/Error";

interface FiveOhProps {
  statusCode?: number;
}

export const getServerSideProps: GetServerSideProps<FiveOhProps> = async ({
  res,
  locale,
}) => {
  const statusCode = res ? res.statusCode : undefined;

  return {
    props: {
      statusCode,
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

const FiveOh: NextPage = ({ statusCode }: FiveOhProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{statusCode}</title>
      </Head>

      <ErrorPage
        statusCode={statusCode}
        title={t("error.default.title")}
        buttonText={t("global.goToHomepage")}
      />
    </>
  );
};

export default FiveOh;
