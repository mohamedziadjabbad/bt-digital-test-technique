import { useData } from "@/data/data";
import { useMobile } from "@/hooks/useMobile";
import { Box, Container, Section, Title } from "@trilogy-ds/react";
import React from "react";

export default function RememberSection() {
  const isMobile = useMobile();
  const { rememberSection } = useData();
  return (
    isMobile && (
      <Section backgroundSrc={rememberSection.img}>
        <Container>
          <Box>
            <Title typo={"has-text-centered"} level={4}>
              {rememberSection.title}
            </Title>
          </Box>
        </Container>
      </Section>
    )
  );
}
