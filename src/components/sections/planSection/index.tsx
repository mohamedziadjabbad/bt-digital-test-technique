import { useData } from "@/data/data";
import {
  Column,
  Columns,
  Container,
  GapSize,
  Row,
  Rows,
  Section,
  Title,
} from "@trilogy-ds/react";
import React from "react";
import PlanComponent from "./planComponent";

export default function PlanSection() {
  const { plansSection } = useData();
  return (
    <Section backgroundColor="MAIN_FADE">
      <Container>
        <Rows gap={GapSize.THREE}>
          <Title level={2} typo={["has-text-centered"]}>
            {plansSection.headingtitle}
          </Title>
          <Row>
            <Columns align="ALIGNED_CENTER">
              {plansSection.children.map((element, index) => (
                <Column key={`plan-${index}`} size={4}>
                  <PlanComponent fullheight item={element} />
                </Column>
              ))}
            </Columns>
          </Row>
        </Rows>
      </Container>
    </Section>
  );
}
