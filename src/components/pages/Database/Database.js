import React from 'react'
import BasicCard from '../../common/BasicCard/BasicCard'
import GridWrapper from '../../common/GridWrapper/GridWrapper'
import ProgressStepper from '../../common/ProgressStepper/ProgressStepper'

const steps = ['Step 1', 'Step 2', 'Step 3'];
const stepDescription = ['Description 1', 'Description 2', 'Description 3'];

export default function Database() {
  return (
    <GridWrapper>
      <BasicCard content={
        <ProgressStepper
          steps={steps}
          stepDescription={stepDescription}
        />}>

      </BasicCard>
    </GridWrapper>
  )
}
