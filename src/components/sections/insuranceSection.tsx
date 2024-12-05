import { useData } from "@/data/data";
import { useMobile } from "@/hooks/useMobile";
import {
  Button,
  Column,
  Columns,
  Container,
  GapSize,
  Image,
  Rows,
  Section,
  Title,
} from "@trilogy-ds/react";
import React from "react";
import CustomCard from "../customCard";

export default function InsuranceSection() {
  const { insuranceSection } = useData();
  const isMobile = useMobile();

  return (
    <Section backgroundColor="NEUTRAL_FADE">
      <Container>
        <Rows>
          <Title level={3} typo={["has-text-centered"]}>
            {insuranceSection.headingTitle}
          </Title>
          <Columns>
            {!isMobile && (
              <Column desktopSize={8}>
                <Image src={insuranceSection.img} alt="insurance-image" />
              </Column>
            )}
            <Column desktopSize={4} mobileSize={12}>
              <Rows gap={GapSize.TWO}>
                {insuranceSection.children.map((element, index) => (
                  <CustomCard
                    key={`insurance-card-${index}`}
                    fullheight
                    iconColor="MAIN"
                    isBackgroundWhite
                    textAlign={isMobile ? "center" : "left"}
                    item={element}
                  />
                ))}
              </Rows>
            </Column>
          </Columns>
          <Button type="button" variant="PRIMARY">
            {insuranceSection.cta}
          </Button>
        </Rows>
      </Container>
    </Section>
  );
}
