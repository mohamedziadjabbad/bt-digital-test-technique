import React, { ReactElement } from "react";

import { Link, Text, TextMarkup } from "@trilogy-ds/react";

export type DynamicTextParams = {
  text: string;
  weight: string;
  type: string;
};

type DynamicTextProps = {
  item: DynamicTextParams;
  markup?: "span" | "p" | TextMarkup;
};

const DynamicText = ({ item }: DynamicTextProps) => {
  const type = item.type as DynamicTextProps["markup"];

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
    a: <Link>{item.text}</Link>,
  };

  return componentType[item.type];
};

export default function DynamicTextWrapper({
  data,
}: {
  data: DynamicTextParams[];
}) {
  return data.map((element: DynamicTextParams, index: number) => (
    <DynamicText key={`description-child-${index}`} item={element} />
  ));
}
