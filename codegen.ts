require("dotenv").config();
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_API_URL,
  documents: "src/graphql/client/**/*.graphql",
  generates: {
    "src/graphql/client/generated/client.ts": {
      plugins: [
        "typescript",
        "typescript-operations"
      ],
    }
  },
};

export default config;
