type Runtime = import("@astrojs/cloudflare").Runtime<AI.env>;

declare namespace App {
  interface Locals extends Runtime {AI}
}
