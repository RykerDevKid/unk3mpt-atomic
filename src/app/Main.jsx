import './styles/Main.css';

import {
    Link,
} from 'react-router-dom';

export default function Main() {

    const fact = fetch('https://uselessfacts.jsph.pl/api/v2/facts/random').then(fact => {
        fact.json().then(fact => {
            document.getElementsByClassName('rf')[0].innerHTML = fact.text;
        });
    });

    return (
        <div className="Main">
            <img width='295' height='262' src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/svg/header-react-bg.svg" className="discord" />
            <h1>@unk3mpt atomic</h1>
            <p>psssst.. click the logo above to join my discord.</p>
            <p className="rf">
                Loading fact..
            </p>
            <div className="Main__column">
                <Link to='/tools'><button className='button'>Tools Page</button></Link>
                <button className='support'><a href="https://ko-fi.com/rykersage">Support me</a></button>
            </div>
        </div>
    )
}