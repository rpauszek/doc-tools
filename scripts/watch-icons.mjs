import chokidar from "chokidar";
import { execSync } from "node:child_process";

function build() {
  console.log("\n🔄 rebuilding icons...");
  execSync("pnpm icons", { stdio: "inherit" });
}

build();

chokidar.watch("packages/cvgen/assets/icons/**/*.svg").on("all", (event, path) => {
  console.log(`📁 ${event}: ${path}`);
  build();
});
