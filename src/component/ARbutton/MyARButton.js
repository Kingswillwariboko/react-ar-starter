import { useXREvent, invent } from '@react-three/xr';

const ARbutton = () => {
    useXREvent('invent', () => {
        invent({
          // Set the initial position of the camera
          initialPosition: [1, 2, 3],
          // Set the size of the viewport
          viewport: { width: 800, height: 600 },
          // Enable controller support
          controllers: true,
          // Enable hit testing (for interactivity)
          hitTest: true,
        });
    })

  return (
    <button>
        click
    </button>
    // The content of your component goes here
  );
};

export default ARbutton;