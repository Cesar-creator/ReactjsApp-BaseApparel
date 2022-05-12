import React from 'react';
import logo from './images/logo.svg';
import arrow from './images/icon-arrow.svg';
import iconError from './images/icon-error.svg';

export const AppApparel = () => {

    const [error, setError] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    const handleChange = (e) => {
        setError(false);
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pattern.test(email)) {
            setError(true);
        }
    };

    return (
        <div className="nft__container">
            <div className="nft__container-left">
                <div className="nft__header">
                    <img src={logo} alt='logo' />
                </div>
                <p className="nft__title-container">WE'RE<br /> <span className="nft__span">COMING <br /> SOON</span></p>
                <p className="nft__text-container">Hello fellow shoppers! We're currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <form onSubmit={handleSubmit}>
                    <label for="Email">Email Address</label>

                    <input name='Email' id="Email" value={email} type="text" placeholder="Email Address" autoFocus autoComplete='off' onChange={handleChange} className={`${error ? 'error' : null}`} />

                    <img src={iconError} className={`${error ? 'error-icon' : 'error-ocult'}`} alt="" />

                    <button type="submit" className=""><img src={arrow} alt="arrow" className="form__arrow" /></button>

                    <span className={`${error ? 'error-text' : 'error-ocult'}`}>
                        Please provide a valid email!

                    </span>
                </form>

            </div>


            <div className="nft__image-right">

            </div>
        </div>
    )
}
