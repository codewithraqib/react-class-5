import React from 'react';

import MyComponent from './MyComponent';

class SecondPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <MyComponent message={'I am from second page'} />
      </div>
    );
  }
}

export default SecondPage;

// export default function SecondPage() {
//   return (
//     <div>
//       <MyComponent message={'I am from second page'} />
//     </div>
//   );
// }
