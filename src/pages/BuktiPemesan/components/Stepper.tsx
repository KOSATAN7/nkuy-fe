import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { BiFoodMenu } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { IoReceipt } from "react-icons/io5";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(136deg, #7EC7FF 0%, #7EC7FF 100%)'
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(136deg, #7EC7FF 0%, #7EC7FF 100%)'
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    background: theme.palette.grey[300],
  },
}));

// Styled Component for ColorlibStepIcon
const ColorlibStepIconRoot = styled('div')<{ ownerState: { completed?: boolean; active?: boolean } }>(
  ({ ownerState }) => ({
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage:
      ownerState.active || ownerState.completed
        ? 'linear-gradient(136deg, #7EC7FF 0%, #216BFE 100%)'
        : '#ccc',
    boxShadow: ownerState.active ? '0 4px 10px 0 rgba(0,0,0,.25)' : 'none',
  })
);

// StepIcon Component
function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;
  const icons: { [key: string]: React.ReactElement } = {
    1: <BiFoodMenu style={{ width: 25 , height: 25 }} />,
    2: <MdPayments style={{ width: 25 , height: 25 }} />,
    3: <IoReceipt style={{ width: 25 , height: 25 }} />
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

interface StepperProps {
  activeStep: number;
}

const steps = ['Daftar Menu', 'Pembayaran', 'Bukti Pemesanan'];

const StepperComponent: React.FC<StepperProps> = ({ activeStep }) => {
  return (
    <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
