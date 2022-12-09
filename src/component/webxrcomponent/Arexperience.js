import React, { useState, useEffect } from 'react';
import { XR, XrButton } from 'webxr-system';

const ARExperience = () => {
  const [xrSupported, setXrSupported] = useState(false);
  const [arSession, setArSession] = useState(null);

  useEffect(() => {
    XR.isSupported().then(supported => {
      setXrSupported(supported);
    });
  }, []);

  const onStartAR = () => {
    XR.requestSession({
      optionalFeatures: ['local-floor'],
      requiredFeatures: ['local']
    }).then(session => {
      setArSession(session);
    });
  };

  const onEndAR = () => {
    if (arSession) {
      arSession.end();
      setArSession(null);
    }
  };

  return (
    <>
      {xrSupported && (
        <>
          {arSession ? (
            <XrButton onClick={onEndAR}>End AR</XrButton>
          ) : (
            <XrButton onClick={onStartAR}>Start AR</XrButton>
          )}

          {arSession && (
            <XR.XrScene>
              <XR.XrReferenceSpace type="local-floor">
                {/* Add 3D models or other AR content here */}
              </XR.XrReferenceSpace>
            </XR.XrScene>
          )}
        </>
      )}
    </>
  );
};


export default ARExperience

