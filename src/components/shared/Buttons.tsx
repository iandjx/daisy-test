import tw, { styled } from "twin.macro";

export const Button = styled("button", {
  ...tw`transition-all font-lexend btn`,
  variants: {
    type: {
      gradient: tw`text-primary-content bg-gradient-to-br from-primary to-secondary`,
    },
  },
});
