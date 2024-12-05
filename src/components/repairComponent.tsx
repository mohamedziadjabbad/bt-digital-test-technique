import {
  Box,
  BoxContent,
  Icon,
  IconColor,
  Text,
  Title,
  IconName,
  BoxFooter,
  BoxProps,
  IconColorValues,
  Link,
} from "@trilogy-ds/react";
import React from "react";
import DynamicTextWrapper, { DynamicTextParams } from "./dynamicText";

type RepairComponentProps = {
  item: {
    icon: string;
    title: string;
    body?: string;
    description?: DynamicTextParams[];
    notion?: string;
    cta?: string;
  };
  iconColor?: IconColorValues;
  textAlign?: "left" | "center";
  isBackgroundWhite?: boolean;
  hideParamsOnMobile?: string[];
};

export default function RepairComponent({
  item,
  iconColor = IconColor.SUCCESS,
  isBackgroundWhite = false,
  textAlign = "center",
  hideParamsOnMobile,
  ...props
}: RepairComponentProps & BoxProps) {
  const iconName = item.icon as IconName;

  const hideUndesiredElements = (value: string | undefined) => {
    if (!value) {
      return;
    }
    if (
      hideParamsOnMobile &&
      hideParamsOnMobile.length !== 0 &&
      hideParamsOnMobile.includes(value)
    ) {
      return false;
    }
    return true;
  };

  return (
    <Box {...props}>
      <BoxContent>
        <Icon color={iconColor} size="large" name={iconName} />
        <Title
          typo={[
            !isBackgroundWhite ? "has-text-white" : "",
            textAlign == "center" ? "has-text-centered" : "",
          ]}
          level={3}
        >
          {item.title}
        </Title>
        {item?.body && (
          <Text
            typo={[
              !isBackgroundWhite ? "has-text-white" : "",
              textAlign == "center" ? "has-text-centered" : "",
            ]}
          >
            {item.body}
          </Text>
        )}
        {item?.description && (
          <Text
            typo={[
              !isBackgroundWhite ? "has-text-white" : "",
              textAlign == "center" ? "has-text-centered" : "",
            ]}
          >
            <DynamicTextWrapper data={item?.description} />
          </Text>
        )}
      </BoxContent>
      {item?.notion && hideUndesiredElements("notion") ? (
        <Text typo={"has-text-centered"} level={3}>
          {item?.notion}
        </Text>
      ) : null}
      {/* can't add color to the link tag */}
      {item?.cta && hideUndesiredElements("cta") ? (
        <Link blank>{item?.cta}</Link>
      ) : null}
    </Box>
  );
}
