import React from "react";

declare module "react" {
  interface CSSProperties {
    "--active"?: string | number;
    "--offset"?: string | number;
    "--direction"?: string | number;
    "--abs-offset"?: string | number;
  }
}
