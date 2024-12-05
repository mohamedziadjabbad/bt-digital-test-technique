import { useData } from "@/data/data";
import {
  Column,
  Columns,
  Container,
  Link,
  Rows,
  Section,
  Title,
  Text,
  Image,
  Box,
  GapSize,
} from "@trilogy-ds/react";
import React from "react";
import DynamicTextWrapper from "../dynamicText";

export default function LifeSpanSection() {
  const { lifeSpanSection } = useData();

  return (
    <Section backgroundColor="NEUTRAL_FADE">
      <Container>
        <Rows>
          <Title typo={"has-text-centered"} level={3}>
            {lifeSpanSection.headingTitle}
          </Title>
          <Box>
            <Columns align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
              <Column desktopSize={4} mobileSize={12}>
                <Image
                  src={lifeSpanSection.img}
                  alt="life-span"
                  height={132.01}
                  width={263}
                />
              </Column>
              <Column desktopSize={6} mobileSize={12}>
                <Rows gap={GapSize.FOUR}>
                  <Title level={4}>{lifeSpanSection.body.title}</Title>
                  <Text>
                    <DynamicTextWrapper
                      data={lifeSpanSection.body.description}
                    />
                  </Text>
                  <Link>{lifeSpanSection.body.cta}</Link>
                </Rows>
              </Column>
            </Columns>
          </Box>
        </Rows>
      </Container>
    </Section>
  );
}
