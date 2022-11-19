import Link, { LinkProps } from "next/link";

import { HasChildren } from "@/types/GeneralTypes";

export const CustomLink = (props: HasChildren & LinkProps) => {
  return <Link scroll={false} {...props} />;
};
