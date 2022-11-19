import tw, { styled } from "twin.macro";

export const PageTitle = tw.h1`transition-all text-6xl leading-tight sm:(text-7xl leading-normal) font-lexend font-black hocus:(font-bold) text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary`;

export const PageSubTitle = tw.h2`text-2xl font-bold`;

export const PageContent = styled("main", {
  ...tw`min-h-full flex flex-col items-center gap-4 py-4 px-6 text-center`,
  ...tw`sm:(text-left items-start gap-8 py-12 px-16)`,
  variants: {
    background: {
      radialGradients: {
        ...tw`relative z-[1] overflow-hidden before:(block absolute -inset-4 -z-[1] blur-2xl)`,
        "&:before": {
          background:
            "radial-gradient(circle at 4vw 4vh, hsla(var(--p) / 0.75), rgba(0, 0, 0, 0) 18vh), radial-gradient(circle at 20vw 90vh, hsla(var(--s) / 0.75), rgba(0, 0, 0, 0) 33vh), radial-gradient(circle at 85vw 30vh, hsla(var(--a) / 0.75), rgba(0, 0, 0, 0) 42vh)",
        },
      },
    },
  },
});

export const ResponsiveFixedContainer = tw.div`fixed z-10 flex flex-col sm:flex-row gap-6`;
