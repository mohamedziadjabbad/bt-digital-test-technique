import { useData } from "@/data/data";
import { useMobile } from "@/hooks/useMobile";
import {
  Container,
  Section,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Title,
} from "@trilogy-ds/react";
import React from "react";

export default function TabSection() {
  const { tabSection } = useData();
  const isMobile = useMobile();
  return (
    !isMobile && (
      <Section backgroundColor="WHITE">
        <Container>
          <Tabs>
            <TabList>
              {tabSection.map((element, index) => (
                <Tab
                  active={element.isActive}
                  label={element.label}
                  key={`tab-${index}`}
                />
              ))}
            </TabList>
          </Tabs>
        </Container>
      </Section>
    )
  );
}
