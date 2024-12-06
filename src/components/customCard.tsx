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
  View,
  Alignable,
} from "@trilogy-ds/react";
import React from "react";
import DynamicTextWrapper, { DynamicTextParams } from "./dynamicText";

type CustomCardProps = {
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
  linkColor?: string;
};

export default function CustomCard({
  item,
  iconColor = IconColor.SUCCESS,
  isBackgroundWhite = false,
  linkColor,
  textAlign = "center",
  hideParamsOnMobile,
  ...props
}: CustomCardProps & BoxProps) {
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
        {/* when i use justify center i get in the inpect element that it takes justified start as a class name */}
        <View
          flexable
          className={textAlign == "center" ? "is-justified-center" : ""}
        >
          <Icon color={iconColor} size="large" name={iconName} />
        </View>
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
            <DynamicTextWrapper
              linkColor={linkColor}
              data={item?.description}
            />
          </Text>
        )}
        {item?.notion && hideUndesiredElements("notion") ? (
          <Text typo={"has-text-centered"} level={3}>
            {item?.notion}
          </Text>
        ) : null}
        {/* can't add color to the link tag */}
        {item?.cta && hideUndesiredElements("cta") ? (
          <Link className="has-text-info">{item?.cta}</Link>
        ) : null}
      </BoxContent>
    </Box>
  );
}
