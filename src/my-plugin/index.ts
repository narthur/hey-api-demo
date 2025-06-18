import type { Plugin } from "@hey-api/openapi-ts";

interface Config {
  name: "my-plugin";
  output?: string;
}

const defaultConfig: Plugin.Config<Config> = {
  name: "my-plugin",
  output: "my-plugin",
  _dependencies: ["@hey-api/typescript"],
  _handler: () => void 0,
  _handlerLegacy: () => void 0,
};

export const defineConfig: Plugin.DefineConfig<Config> = (config) => {
  return { ...defaultConfig, ...config };
};
