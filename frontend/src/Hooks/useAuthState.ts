import { useState } from "react";

const useAuthState = () => {
  const [isSignedUp, setIsSignedUp] = useState<boolean>(false);
  
  const toggleIsSignedUp = (): void => {
    if (isSignedUp) {
      setIsSignedUp(false);
      return;
    }
    setIsSignedUp(true);
  }

  return {isSignedUp, toggleIsSignedUp }
}

export default useAuthState;