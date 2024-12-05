import { useData } from "@/data/data";
import {
  Column,
  Columns,
  Container,
  Rows,
  Section,
  Title,
} from "@trilogy-ds/react";
import React from "react";
import RepairComponent from "../repairComponent";
import { useMobile } from "@/hooks/useMobile";

export default function SolutionSection() {
  const { solutionsSection } = useData();
  const isMobile = useMobile();
  return (
    <Section backgroundColor="INFO">
      <Container>
        <Rows>
          <Title level={3} typo={["has-text-centered", "has-text-white"]}>
            {solutionsSection.headingTitle}
          </Title>
          <Columns marginless>
            {solutionsSection.children.map((element, index) => (
              <Column key={`solution-${index}`} desktopSize={6} mobileSize={12}>
                <RepairComponent
                  hideParamsOnMobile={isMobile ? ["cta"] : []}
                  fullheight
                  iconColor="MAIN"
                  textAlign={isMobile ? "center" : "left"}
                  isBackgroundWhite
                  item={element}
                />
              </Column>
            ))}
          </Columns>
        </Rows>
      </Container>
    </Section>
  );
}
