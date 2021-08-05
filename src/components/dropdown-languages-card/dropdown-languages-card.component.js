import React from "react";

import {
  ComponentContainer,
  TriangleUp,
  ComponentSubcontainer,
  Title,
  CheckboxInput,
  LanguageTag,
} from "./dropdown-languages-card.styles";

const LanguageCard = () => {
  return (
    <ComponentContainer>
      <TriangleUp></TriangleUp>
      <ComponentSubcontainer>
        <Title>Change Language</Title>
        <div>
          <div>
            <CheckboxInput type="checkbox" />
            <LanguageTag>English - EN</LanguageTag>
            <hr />
          </div>

          <div>
            <CheckboxInput type="checkbox" />
            <LanguageTag>Español - ES</LanguageTag>
          </div>

          <div>
            <CheckboxInput type="checkbox" />
            <LanguageTag>简体中文 - ZH </LanguageTag>
          </div>

          <div>
            <CheckboxInput type="checkbox" />
            <LanguageTag>Deutsch - DE </LanguageTag>
          </div>

          <div>
            <CheckboxInput type="checkbox" />
            <LanguageTag>Português - PT</LanguageTag>
          </div>

          <div>
            <CheckboxInput type="checkbox" />
            <LanguageTag>繁體中文 - ZH/span/</LanguageTag>
          </div>

          <div>
            <CheckboxInput type="checkbox" />
            <LanguageTag>한국어 - KO</LanguageTag>
          </div>

          <div>
            <CheckboxInput type="checkbox" />
            <LanguageTag>עברית - HE</LanguageTag>
          </div>

          <div>
            <CheckboxInput type="checkbox" />
            <LanguageTag>اللغة العربية - AR </LanguageTag>
          </div>
        </div>
      </ComponentSubcontainer>
    </ComponentContainer>
  );
};

export default LanguageCard;
