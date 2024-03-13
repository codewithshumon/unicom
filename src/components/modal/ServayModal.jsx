import { useCallback, useEffect, useState } from "react";

import useModal from "../../hooks/useModal";
import Modal from "./Modal";

const STEPS = {
  WELCOME: 0,
  LOCATION: 1,
  INFO: 2,
  IMAGES: 3,
  DESCRIPTION: 4,
  PRICE: 5,
};

const ServayModal = () => {
  let body;
  const modal = useModal();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    if (count < 5) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }, [count]);

  if (count === STEPS.WELCOME) {
    body = (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[40vw] h-full bg-red-300">Left Side</div>
        <div className="w-[60vw] h-full bg-blue-500">Right Side</div>
      </div>
    );
  }

  return (
    <>
      <Modal
        disabled={loading}
        modalBody={
          <div className="w-full h-24">
            <button onClick={handleCount}></button>
          </div>
        }
      />
    </>
  );
};

export default ServayModal;
