import React from "react"
import styled from "@emotion/styled"

const SelectOptionWrapper = styled.form`
  display: flex;
  margin: 40px auto;
`

const HiddenOption = styled.input`
  display: none;

  :checked + label {
    background-color: #fecd60;
    box-sizing: content-box;
  }
`

const OptionWrapper = styled.label`
  display: flex;
  justify-content: center;
  max-width: 200px;
  flex-direction: column;
  margin-right: 50px;
  padding: 10px;
  cursor: pointer;
`

const Icon = styled.div`
  font-size: 40px;
  text-align: center;
`

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`

const Text = styled.div`
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
`

export default function OtherOptions({ projection, setProjection }) {
  return (
    <>
      <h2>What if...</h2>
      <p>
        This graph is a illustrates what population growth would look like if
        current trends in births, life expectancy, and migration hold. It is one
        of{" "}
        <a href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/3222.0Main+Features12017%20(base)%20-%202066?OpenDocument">
          72 projections
        </a>{" "}
        created by the ABS.
      </p>
      <SelectOptionWrapper>
        <HiddenOption
          type="radio"
          onChange={() => setProjection("A")}
          name="projection"
          value="A"
          id="optionA"
          checked={projection === "A"}
        />
        <OptionWrapper for="optionA">
          <Icon>
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </Icon>
          <Title>Higher Growth</Title>
          <Text>
            A more optimistic forecast, which assumes more favourable growth
            factors
          </Text>
        </OptionWrapper>
        <HiddenOption
          type="radio"
          onChange={() => setProjection("B")}
          name="projection"
          value="B"
          id="optionB"
          checked={projection === "B"}
        />
        <OptionWrapper for="optionB">
          <Icon>
            <span role="img" aria-label="shrug emoji">
              🤷
            </span>
          </Icon>
          <Title>Current Growth</Title>
          <Text>
            A more optimistic forecast, which assumes more favourable growth
            factors
          </Text>
        </OptionWrapper>
        <HiddenOption
          type="radio"
          onChange={() => setProjection("C")}
          name="projection"
          value="C"
          id="optionC"
          checked={projection === "C"}
        />
        <OptionWrapper for="optionC">
          <Icon>
            <span role="img" aria-label="turtle emoji">
              🐢
            </span>
          </Icon>
          <Title>Slower Growth</Title>
          <Text>
            A more optimistic forecast, which assumes more favourable growth
            factors
          </Text>
        </OptionWrapper>
      </SelectOptionWrapper>
    </>
  )
}
