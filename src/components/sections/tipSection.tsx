import { useData } from "@/data/data";
import {
  Card,
  CardContent,
  CardImage,
  Column,
  Columns,
  Container,
  Link,
  Rows,
  Section,
  Text,
  Title,
} from "@trilogy-ds/react";
import React from "react";

export default function TipSection() {
  const { tipsSection } = useData();
  return (
    <Section backgroundColor="NEUTRAL_FADE">
      <Container>
        <Rows>
          <Title level={2} typo={"has-text-centered"}>
            {tipsSection.headingTitle}
          </Title>
          <Columns>
            {tipsSection.children.map((element, index) => (
              <Column key={`tip-${index}`} desktopSize={4} mobileSize={12}>
                <Card fullheight>
                  <CardImage src={element.img} />
                  <CardContent>
                    <Text level={1} typo={"has-text-weight-semibold"}>
                      {element.title}
                    </Text>
                    <Link>{element.cta} </Link>
                  </CardContent>
                </Card>
              </Column>
            ))}
          </Columns>
        </Rows>
      </Container>
    </Section>
  );
}
