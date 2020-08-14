import React from 'react';
import { storeContext } from './contexts';

// export default {
//   homeStore: new HomeStore(),
//   aboutStore: new AboutStore()
// }

export const useStores = () => React.useContext(storeContext);
