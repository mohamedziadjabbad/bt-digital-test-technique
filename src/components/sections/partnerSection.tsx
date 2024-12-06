import { useData } from "@/data/data";
import { useMobile } from "@/hooks/useMobile";
import {
  Column,
  Columns,
  Container,
  GapSize,
  Image,
  Link,
  Rows,
  Section,
  Text,
  Title,
} from "@trilogy-ds/react";
import React from "react";

export default function PartnerSection() {
  const { partnerSection } = useData();
  const isMobile = useMobile();
  return (
    <Section backgroundColor="NEUTRAL_FADE">
      <Container>
        <Rows gap={GapSize.THREE}>
          <Title level={3} typo={["has-text-centered"]}>
            {partnerSection.headingTitle}
          </Title>
          <Columns verticalAlign="ALIGNED_CENTER">
            <Column desktopSize={6} mobileSize={12}>
              <Image src={partnerSection.img} alt="partner-image" />
            </Column>
            <Column desktopSize={6} mobileSize={12}>
              <Rows gap={GapSize.FOUR}>
                <Text typo={["has-text-weight-semibold"]}>
                  {partnerSection.title}
                </Text>
                <Text typo={["has-text-main"]}>
                  {partnerSection.description}
                </Text>
                <Link className="has-text-info">{partnerSection.cta}</Link>
              </Rows>
            </Column>
          </Columns>
        </Rows>
      </Container>
    </Section>
  );
}
