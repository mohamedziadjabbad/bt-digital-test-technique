import {
  Box,
  BoxContent,
  Icon,
  IconColor,
  Text,
  Title,
  IconName,
  BoxFooter,
  Button,
  BackgroundProps,
  TrilogyColor,
  BoxProps,
  IconColorValues,
} from "@trilogy-ds/react";
import React, { ReactElement } from "react";

type RepairComponentProps = {
  item: {
    icon: string;
    title: string;
    body: string;
    notion?: string;
    cta?: string;
  };
  iconColor?: IconColorValues;
  isBackgroundWhite?: boolean;
};

export default function RepairComponent({
  item,
  iconColor = IconColor.SUCCESS,
  isBackgroundWhite = false,
  ...props
}: RepairComponentProps & BoxProps) {
  const iconName = item.icon as IconName;

  return (
    <Box {...props}>
      <BoxContent>
        <Icon color={iconColor} size="large" name={iconName} />
        <Title
          typo={[
            !isBackgroundWhite ? "has-text-white" : "",
            "has-text-centered",
          ]}
          level={3}
        >
          {item.title}
        </Title>
        <Text
          typo={[
            !isBackgroundWhite ? "has-text-white" : "",
            "has-text-centered",
          ]}
        >
          {item.body}
        </Text>
      </BoxContent>
      {item?.notion && (
        <BoxFooter>
          <Text typo={"has-text-centered"} level={3}>
            {item?.notion}
          </Text>
        </BoxFooter>
      )}
    </Box>
  );
}
