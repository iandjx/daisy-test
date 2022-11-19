import "twin.macro";

import { PageContent, PageSubTitle, PageTitle } from "./Layout/Page";
import { Button } from "./shared/Buttons";
import { CustomLink } from "./shared/CustomLink";

interface ErrorPageProps {
  statusCode?: number;
  title?: string;
  subTitle?: string;
  buttonText: string;
}

export const ErrorPage = ({
  statusCode,
  title,
  subTitle,
  buttonText,
}: ErrorPageProps) => {
  return (
    <PageContent
      background={"radialGradients"}
      tw="pt-20 items-center gap-12 sm:(flex-row pt-12 pl-32)"
    >
      {statusCode && (
        <PageTitle tw="text-7xl sm:(text-9xl)">{statusCode}</PageTitle>
      )}

      <div tw="hidden sm:(block) rounded-full h-64 w-1 bg-secondary" />

      <div tw="flex flex-col items-center gap-8 sm:(items-start)">
        {title && <PageSubTitle>{title}</PageSubTitle>}
        {subTitle && <p>{subTitle}</p>}

        <CustomLink href={"/"}>
          <Button type={"gradient"}>{buttonText}</Button>
        </CustomLink>
      </div>
    </PageContent>
  );
};
