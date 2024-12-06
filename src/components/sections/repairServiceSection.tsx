import React from "react";

// design system
import {
  Button,
  Column,
  Columns,
  Container,
  GapSize,
  Image,
  Rows,
  Section,
  Text,
  Title,
  View,
} from "@trilogy-ds/react";

import { Data, useData } from "@/data/data";
import { useMobile } from "@/hooks/useMobile";

// components
import CustomCard from "../customCard";
import OutlinedBox from "../outlinedBox";
import Slider from "../slider";
import { SwiperSlide } from "swiper/react";

export default function RepairServiceSection() {
  const { repairServiceSection } = useData();
  const isMobile = useMobile();
  return (
    <Section backgroundColor="MAIN">
      <Container>
        <Rows gap={GapSize.SEVEN}>
          <Rows gap={GapSize.THREE}>
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
            <View flexable className="is-justified-center">
              <Button className="has-background-info" type="button">
                {repairServiceSection.header.cta}
              </Button>
            </View>
          </Rows>

          {/* i didn't find similar component for this item in trilogy design system */}
          <OutlinedBox
            title={repairServiceSection.benfits.title}
            titleProps={{
              level: 4,
              typo: ["has-text-white"],
            }}
          >
            <Columns>
              {/* i used slider because i couldn't find slider inside of trilogy */}
              {!isMobile ? (
                <DesktopRepairServiceWrapper
                  data={repairServiceSection.benfits}
                />
              ) : (
                <MobileRepairServiceWrapper
                  data={repairServiceSection.benfits}
                />
              )}
            </Columns>
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
  return data.children.map((element, index) => (
    <Column key={`repair-service-${index}`} align="ALIGNED_CENTER" size={3}>
      <CustomCard backgroundColor="MAIN" shadowless item={element} />
    </Column>
  ));
};

const MobileRepairServiceWrapper = ({
  data,
}: {
  data: Data["repairServiceSection"]["benfits"];
}) => {
  return (
    <Slider id={1}>
      {data.children.map((element, index) => (
        <SwiperSlide key={`repair-service-${index}`}>
          <Column align="ALIGNED_CENTER" size={12}>
            <CustomCard backgroundColor="MAIN" shadowless item={element} />
          </Column>
        </SwiperSlide>
      ))}
    </Slider>
  );
};
