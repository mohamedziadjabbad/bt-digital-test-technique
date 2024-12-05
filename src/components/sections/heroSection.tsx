import React from "react";

// design system
import {
  Column,
  Columns,
  Container,
  Section,
  Title,
  Text,
  Image,
  RadiusValues,
} from "@trilogy-ds/react";

// hooks
import { useData } from "@/data/data";

// components
import DynamicText from "@/components/dynamicText";
import { useMobile } from "@/hooks/useMobile";

export default function HeroSection() {
  const { heroSection } = useData();
  const isMobile = useMobile();

  return (
    <Section backgroundColor="MAIN">
      <Container>
        <Columns verticalAlign="ALIGNED_CENTER">
          <Column desktopSize={6} mobileSize={12}>
            <Title
              level={2}
              typo={[isMobile ? "has-text-centered" : "", "has-text-white"]}
            >
              {heroSection.title}
            </Title>
            <Text
              typo={[isMobile ? "has-text-centered" : "", "has-text-white"]}
            >
              {heroSection.description}
            </Text>
            <Text
              typo={[isMobile ? "has-text-centered" : "", "has-text-white"]}
            >
              {heroSection.subDesctiption.map((element, index) => (
                <DynamicText
                  key={`description-child-${index}`}
                  item={element}
                />
              ))}
            </Text>
          </Column>
          <Column desktopSize={6} mobileSize={12}>
            <Image
              src={heroSection.img}
              alt="hero-image"
              radius={RadiusValues.SMALL}
            />
          </Column>
        </Columns>
      </Container>
    </Section>
  );
}
