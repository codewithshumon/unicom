import { useCallback, useMemo, useState } from "react";

import Modal from "./Modal";
import StepModalEntry from "./StepModalEntry";
import StepModalBasic from "./StepModalBasic";
import StepModalGrantOption from "./StepModalGrantOption";
import StepModalEnergyBills from "./StepModalEnergyBills";
import StepModalCapitalFinding from "./StepModalCapitalFinding";
import StepModalDone from "./StepModalDone";

const STEPS = {
  WELCOME: 0,
  BASIC: 1,
  GRANT_OPTION: 2,
  ENERGY_BILLS: 3,
  CAPITAL_FINDING: 4,
  DONE: 5,
};

const StepsModal = () => {
  let body;
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useMemo(() => {
    if (count > 0 && count <= 4) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [count]);

  const handleCount = useCallback(() => {
    if (count <= 4) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }, [count]);

  const handleCountBack = useCallback(() => {
    if (count <= 4) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }, [count]);

  console.log("count", count);

  if (count === STEPS.WELCOME) {
    // setLoading(true);
    body = <StepModalEntry handleCount={handleCount} />;
  }
  if (count === STEPS.BASIC) {
    body = <StepModalBasic handleCount={handleCount} />;
  }
  if (count === STEPS.GRANT_OPTION) {
    body = (
      <StepModalGrantOption
        handleCount={handleCount}
        handleCountBack={handleCountBack}
      />
    );
  }
  if (count === STEPS.ENERGY_BILLS) {
    body = (
      <StepModalEnergyBills
        handleCount={handleCount}
        handleCountBack={handleCountBack}
      />
    );
  }
  if (count === STEPS.CAPITAL_FINDING) {
    body = (
      <StepModalCapitalFinding
        handleCount={handleCount}
        handleCountBack={handleCountBack}
      />
    );
  }
  if (count === STEPS.DONE) {
    // setLoading(false);
    body = (
      <StepModalDone
        handleCount={handleCount}
        handleCountBack={handleCountBack}
      />
    );
  }

  return (
    <>
      <Modal
        disabled={loading}
        modalBody={body}
        count={count}
        setCount={setCount}
      />
    </>
  );
};

export default StepsModal;
