// Create a file named types.d.ts (or any other suitable name) in your project

import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any; // Define 'ion-icon' as any
    }
  }
}
