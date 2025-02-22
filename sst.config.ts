// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "nextjs-sst-poc",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: { aws: { accessKey: "AKIA5SSFPLXHFKRSH7DR", secretKey: "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" } }
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb");
  },
});
