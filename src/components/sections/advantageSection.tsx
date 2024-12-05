import { useData } from "@/data/data";
import {
  Column,
  Columns,
  Container,
  Row,
  Rows,
  Section,
  Title,
} from "@trilogy-ds/react";
import React from "react";
import CustomCard from "../customCard";

export default function AdvantageSection() {
  const { advantageSection } = useData();
  return (
    <Section backgroundColor="NEUTRAL_FADE">
      <Container>
        <Rows>
          <Title level={2} typo={["has-text-centered"]}>
            {advantageSection.headerTitle}
          </Title>
          <Row>
            <Columns marginless>
              {advantageSection.children.map((element, index) => (
                <Column size={4} key={`advantage-${index}`}>
                  <CustomCard
                    iconColor="MAIN"
                    fullheight
                    shadowless={false}
                    isBackgroundWhite
                    backgroundColor="WHITE"
                    item={element}
                    active={advantageSection.children.length - 1 == index}
                  />
                </Column>
              ))}
            </Columns>
          </Row>
        </Rows>
      </Container>
    </Section>
  );
}
