import { defineConfig, defaultPlugins } from "@hey-api/openapi-ts";
import { defineConfig as myDefineConfig } from "./src/my-plugin/index";

export default defineConfig({
  input: "https://get.heyapi.dev/hey-api/backend",
  output: "src/client",
  plugins: [...defaultPlugins, "@tanstack/svelte-query", myDefineConfig({})],
});
