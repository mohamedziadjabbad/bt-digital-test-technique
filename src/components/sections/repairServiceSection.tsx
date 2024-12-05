import React from "react";

// design system
import {
  Button,
  ButtonVariant,
  Column,
  Columns,
  Container,
  GapSize,
  Image,
  Row,
  Rows,
  Section,
  Text,
  Title,
} from "@trilogy-ds/react";

// hooks
import { Data, useData } from "@/data/data";
import { useMobile } from "@/hooks/useMobile";
import CustomCard from "../customCard";
import OutlinedBox from "../outlinedBox";

export default function RepairServiceSection() {
  const { repairServiceSection } = useData();
  const isMobile = useMobile();
  return (
    <Section backgroundColor="MAIN">
      <Container>
        <Rows gap={GapSize.SEVEN}>
          {/* i didn't find this icon in trilogy icons */}
          <Image
            align="ALIGNED_CENTER"
            src={repairServiceSection.header.iconImg}
            alt="repair-icon"
          />

          <Title level={3} typo={["has-text-white", "has-text-centered"]}>
            {repairServiceSection.header.title}
          </Title>

          {/* i didn't find the variant for the recommended color */}
          <Button type="button" variant={ButtonVariant.SECONDARY}>
            {repairServiceSection.header.cta}
          </Button>

          {/* i didn't find similar component for this item in trilogy design system */}
          <OutlinedBox
            title={repairServiceSection.benfits.title}
            titleProps={{
              level: 1,
              typo: ["has-text-white", "has-text-centered"],
              overline: true,
            }}
          >
            <DesktopRepairServiceWrapper data={repairServiceSection.benfits} />
          </OutlinedBox>

          <Text typo={["has-text-white", "has-text-centered"]} level={4}>
            {repairServiceSection.notion}
          </Text>
        </Rows>
      </Container>
    </Section>
  );
}

const DesktopRepairServiceWrapper = ({
  data,
}: {
  data: Data["repairServiceSection"]["benfits"];
}) => {
  return (
    <Columns>
      {data.children.map((element, index) => (
        <Column
          key={`repair-service-${index}`}
          align="ALIGNED_CENTER"
          desktopSize={3}
        >
          <CustomCard backgroundColor="MAIN" shadowless item={element} />
        </Column>
      ))}
    </Columns>
  );
};
