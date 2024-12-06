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
  View,
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
        <View flexable className="is-justified-center">
          {icons.map((element, index) => (
            <Icon
              key={`icon-${index}`}
              color={IconColor.MAIN}
              size="large"
              name={element}
            />
          ))}
        </View>
        <Title typo={["has-text-centered"]} level={3}>
          {item.title}
        </Title>
        <Text typo={["has-text-centered"]}>{item.description}</Text>
      </BoxContent>
      <BoxFooter>
        <View flexable className="is-justified-center">
          <Button variant="CONVERSION">{item?.cta}</Button>
        </View>
      </BoxFooter>
    </Box>
  );
}
