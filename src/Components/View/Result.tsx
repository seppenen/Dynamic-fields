import { Element } from "../Element";
import React, { useContext } from "react";
import styled from "styled-components";
import { TContext, TConfig, TElements } from "../Types/Types";
import { TabContext } from "../../context/ContextProvider";

const Wrapper = styled.div<{ active: string }>`
  display: ${(props) => (props.active === "1" ? "flex" : "none")};
  flex-direction: column;
`;

const FieldWrapper = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-bottom: none;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: inherit;
  justify-content: flex-end;
  border: 1px solid black;
  border-top: none;
  padding: 20px;
`;

interface IResultProps {
  config: TConfig;
}

interface IDestruction {
  fields: TElements[];
  buttons: TElements[];
}

export const Result = ({ config }: IResultProps): JSX.Element => {
  const { activeTab }: TContext = useContext(TabContext);
  const { fields, buttons }: IDestruction = config;

  const getElements = (): JSX.Element[] => {
    return fields.map((element: TElements, index: number) => {
      return <Element key={index} fields={element} />;
    });
  };

  const getButtons = (): JSX.Element[] => {
    return buttons.map((element: TElements, index: number) => {
      return <Element key={index} fields={element} />;
    });
  };
  return (
    <Wrapper active={activeTab}>
      <FieldWrapper>
        {fields.length !== 0 ? getElements() : "No fields data"}
      </FieldWrapper>
      <ButtonWrapper>{buttons.length !== 0 ? getButtons() : ""}</ButtonWrapper>
    </Wrapper>
  );
};
