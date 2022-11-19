import { PageTitle } from "./Layout/Page";

export default function Example({ text }: { text: string }) {
  return <PageTitle>Example page {`"${text}"`}</PageTitle>;
}
