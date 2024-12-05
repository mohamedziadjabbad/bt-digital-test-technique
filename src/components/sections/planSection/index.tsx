import { useData } from "@/data/data";
import {
  Columns,
  Container,
  GapSize,
  Row,
  Rows,
  Section,
  Title,
} from "@trilogy-ds/react";
import React from "react";

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
            <Columns></Columns>
          </Row>
        </Rows>
      </Container>
    </Section>
  );
}
