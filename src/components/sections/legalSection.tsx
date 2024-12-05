import { useData } from "@/data/data";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Rows,
  Section,
  Text,
} from "@trilogy-ds/react";
import React from "react";

export default function LegalSection() {
  const { lastSection } = useData();
  return (
    <Section backgroundColor="WHITE">
      <Container>
        <Rows>
          <Breadcrumb>
            {lastSection.breadCrumbs.map((element, index) => (
              <BreadcrumbItem
                key={`breadcrumb-${index}`}
                active={element.isActive}
              >
                {element.text}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <Accordion>
            <AccordionItem>
              <AccordionHeader>
                <Text level={1} typo={"has-text-right"}>
                  {lastSection.accordian.title}
                </Text>
              </AccordionHeader>
              <AccordionBody data-id="totooooo-test-id">
                <Text level={1}> {lastSection.accordian.body} </Text>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Rows>
      </Container>
    </Section>
  );
}
