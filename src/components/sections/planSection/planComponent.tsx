import {
  Box,
  BoxContent,
  Text,
  Title,
  IconName,
  BoxProps,
  BoxFooter,
  IconColor,
  Button,
  Icon,
} from "@trilogy-ds/react";
import React from "react";

type PlanComponentProps = {
  item: {
    icons: string[];
    title: string;
    description: string;
    cta: string;
  };
};

export default function PlanComponent({
  item,
  ...props
}: PlanComponentProps & BoxProps) {
  const icons = item.icons as IconName[];

  return (
    <Box {...props}>
      <BoxContent>
        {icons.map((element, index) => (
          <Icon
            key={`icon-${index}`}
            color={IconColor.MAIN}
            size="large"
            name={element}
          />
        ))}
        <Title typo={["has-text-centered"]} level={3}>
          {item.title}
        </Title>
        <Text typo={["has-text-centered"]}>{item.description}</Text>
      </BoxContent>
      <BoxFooter>
        <Button variant="CONVERSION">{item?.cta}</Button>
      </BoxFooter>
    </Box>
  );
}
