import { Data, useData } from "@/data/data";
import {
  Alignable,
  Card,
  CardContent,
  CardImage,
  Column,
  Columns,
  Container,
  Justifiable,
  Link,
  Rows,
  Section,
  Text,
  Title,
  View,
} from "@trilogy-ds/react";
import React from "react";
import Slider from "../slider";
import { SwiperSlide } from "swiper/react";
import { useMobile } from "@/hooks/useMobile";

export default function TipSection() {
  const { tipsSection } = useData();
  const isMobile = useMobile();
  return (
    <Section backgroundColor="NEUTRAL_FADE">
      <Container>
        <Rows>
          <Title level={2} typo={"has-text-centered"}>
            {tipsSection.headingTitle}
          </Title>
          <View>
            <Columns>
              {!isMobile ? (
                <DesktopTipsWrapper data={tipsSection} />
              ) : (
                <MobileTipsWrapper data={tipsSection} />
              )}
            </Columns>
          </View>
        </Rows>
      </Container>
    </Section>
  );
}

const DesktopTipsWrapper = ({ data }: { data: Data["tipsSection"] }) => {
  return data.children.map((element, index) => (
    <TipComponent
      key={`tip-${index}`}
      img={element.img}
      title={element.title}
      cta={element.cta}
    />
  ));
};

const MobileTipsWrapper = ({ data }: { data: Data["tipsSection"] }) => {
  return (
    <Slider id={2}>
      {data.children.map((element, index) => (
        <SwiperSlide key={`repair-service-${index}`}>
          <TipComponent
            isMobile
            img={element.img}
            title={element.title}
            cta={element.cta}
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

const TipComponent = ({
  img,
  title,
  cta,
  isMobile = false,
}: {
  img: string;
  title: string;
  cta: string;
  isMobile?: boolean;
}) => {
  return (
    <Column size={isMobile ? 12 : 4}>
      <Card fullheight>
        <CardImage src={img} />
        <CardContent>
          <Text level={1} typo={"has-text-weight-semibold"}>
            {title}
          </Text>
          <Link className="has-text-info">{cta} </Link>
        </CardContent>
      </Card>
    </Column>
  );
};
