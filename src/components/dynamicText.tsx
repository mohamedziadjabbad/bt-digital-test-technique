import React, { ReactElement } from "react";

import { Link, Text, TextMarkup, TextVariantProps } from "@trilogy-ds/react";

export type DynamicTextParams = {
  text: string;
  weight: string;
  type: string;
};

type DynamicTextProps = {
  item: DynamicTextParams;
  linkColor?: string;
};

type Markup = "span" | "p" | TextMarkup;

const DynamicText = ({ item, linkColor }: DynamicTextProps) => {
  const type = item.type as Markup;

  const componentType: { [key: string]: string | ReactElement } = {
    p: item.text,
    span:
      item.weight == "semibold" ? (
        <Text markup={type} typo="has-text-weight-semibold">
          {item.text}
        </Text>
      ) : (
        <Text markup={type}>{item.text}</Text>
      ),
    a: <Link className={linkColor}>{item.text}</Link>,
  };

  return componentType[item.type];
};

export default function DynamicTextWrapper({
  data,
  linkColor = "has-text-info",
}: {
  data: DynamicTextParams[];
  linkColor?: string;
}) {
  return data.map((element: DynamicTextParams, index: number) => (
    <DynamicText
      linkColor={linkColor}
      key={`description-child-${index}`}
      item={element}
    />
  ));
}
