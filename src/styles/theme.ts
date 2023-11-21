import { DefaultTheme, RuleSet } from "styled-components";
import { css } from "styled-components";

export type Colors = {
  GREEN: string;
  RED: string;
  GRAY1: string;
  GRAY2: string;
  GRAY3: string;
};

export type TypoGraphies = {
  title1: () => RuleSet<object>;
  body1: () => RuleSet<object>;
};

export const theme: DefaultTheme = {
  Color: {
    GREEN: "#31F396",
    RED: "#FF6868",
    GRAY1: "#51515C",
    GRAY2: "#AFAFBC",
    GRAY3: "#DEDEE8",
  },
  Typography: {
    title1: () => css`
      font-size: 20px;
      font-weight: 700;
      line-height: 26px;
    `,
    body1: () => css`
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    `,
  },
};
