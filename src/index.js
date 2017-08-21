import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// const element = React.createElement('div', 
// {className: 'welcome'}
// , 'Hello World');



// const list = React.createElement('ol', null,
    
//     // React.createElement('li', null, 'Yazhini'),
//     // React.createElement('li', null, 'Tamil'),
//     // React.createElement('li', null, 'Vetri')
    
//     family.map((person, index) => (
//         React.createElement('li', {key: index}, person.name)
//     ))
// )

// class FamilyTree extends React.Component {
//     render() {
//         const family = [
//             {name: 'Yazhini'},
//             {name: 'Tamil'},
//             {name: 'Vetri'}
//         ];

//         return <ol>
//                 {family.map((person, index) => (
//                 <li key={index}>{person.name}</li>
//             ))}
//             </ol>
//     }
// }




ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
