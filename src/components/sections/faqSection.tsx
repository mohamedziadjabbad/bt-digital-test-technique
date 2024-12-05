import { useData } from "@/data/data";
import { useMobile } from "@/hooks/useMobile";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Column,
  Columns,
  Container,
  Rows,
  Section,
  Text,
  Title,
} from "@trilogy-ds/react";
import React from "react";

export default function FaqSection() {
  const { faq } = useData();
  const isMobile = useMobile();
  return (
    <Section backgroundColor="WHITE">
      <Container>
        <Columns>
          <Column desktopSize={6} mobileSize={12}>
            <Title level={3} typo={isMobile ? "has-text-centered" : ""}>
              {faq.headingTitle}
            </Title>
          </Column>
          <Column desktopSize={6} mobileSize={12}>
            <Accordion>
              {faq.accordianChildren.map((element, index) => (
                <AccordionItem key={`accordian-${index}`}>
                  <AccordionHeader>
                    <Text level={1}> {element.title} </Text>
                  </AccordionHeader>
                  <AccordionBody data-id="totooooo-test-id">
                    <Text level={1}> {element.body} </Text>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Column>
        </Columns>
      </Container>
    </Section>
  );
}
