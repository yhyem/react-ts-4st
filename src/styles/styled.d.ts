// styled.d.ts
import { Colors, TypoGraphies } from "./theme";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    Color: Colors;
    Typography: TypoGraphies;
  }
}
