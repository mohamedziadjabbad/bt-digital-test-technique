import {
  Box,
  BoxContent,
  Text,
  Title,
  IconName,
  BoxProps,
  BoxFooter,
} from "@trilogy-ds/react";
import React from "react";

type RepairComponentProps = {
  item: {
    icon: string;
    title: string;
    body: string;
    notion?: string;
  };
};

export default function RepairComponent({
  item,
  ...props
}: RepairComponentProps & BoxProps) {
  const iconName = item.icon as IconName;

  return (
    <Box {...props}>
      <BoxContent>
        {/* <Icon color={iconColor} size="large" name={iconName} /> */}
        <Title typo={["has-text-centered"]} level={3}>
          {item.title}
        </Title>
        <Text typo={["has-text-centered"]}>{item.body}</Text>
      </BoxContent>
      <BoxFooter>
        <Text typo={"has-text-centered"} level={3}>
          {item?.notion}
        </Text>
      </BoxFooter>
    </Box>
  );
}
