import { Container, Title } from "@trilogy-ds/react";
import { TitleProps } from "@trilogy-ds/react/lib/components/title/TitleProps";
import React from "react";

type OutlinedBoxProps = {
  children: React.ReactNode;
  title: string;
  titleProps?: TitleProps;
};

export default function OutlinedBox({
  children,
  title,
  titleProps,
}: OutlinedBoxProps & TitleProps) {
  return (
    <div className="outlined-box_wrapper">
      <Title className="outlined-box_title" {...titleProps}>
        {title}
      </Title>
      <div className="outlined-box_content">{children}</div>
    </div>
  );
}
