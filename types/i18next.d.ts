// import the original type declarations
import "react-i18next";

// import all namespaces (for the default language, only)
import common from "../public/locales/en/common.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    // custom namespace
    defaultNS: "common";
    // custom resources type
    resources: {
      common: typeof common;
    };
  }
}
