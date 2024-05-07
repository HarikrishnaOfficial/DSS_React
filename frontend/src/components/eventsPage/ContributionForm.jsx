import './cotributionfrom.css'
function ContributionForm() {

    const containerStyle = {
        width: '100%',
        height: '300px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('https://www.dharmasamsthan.com/images/menuimg/7.png')`,
    };

    return (
        <>
            <section className='bredcrumSection' style={containerStyle}>
                <div>
                    <h2 className=''>EVENT CONTRIBUTE</h2>
                    <hr />
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item "><a href="/home">Home</a></li>
                            <li className="breadcrumb-item active text-light" aria-current="page">Billing Address</li>
                        </ol>
                    </nav>
                </div>
            </section>


            <form className='contributionForm'>
                <br />
                <div className="container">
                    <h2 className='heading'>BILLING ADDRESS</h2>
                    <h1>Please enter your billing details.</h1>
                    <hr />
                    <div className="form">

                        <div className="fields fields--2">
                            <label className="field">
                                <span className="field__label" htmlFor="firstname">First name</span>
                                <input className="field__input" type="text" id="firstname" value="Radha" />
                            </label>
                            <label className="field">
                                <span className="field__label" htmlFor="lastname">Last name</span>
                                <input className="field__input" type="text" id="lastname" value="Krishna" />
                            </label>
                        </div>
                        <label className="field">
                            <span className="field__label" htmlFor="address">Address</span>
                            <input className="field__input" type="text" id="address" />
                        </label>
                        <div className="fields fields--2">
                            <label className="field">
                                <span className="field__label" htmlFor="cityTown">City / Town</span>
                                <input className="field__input" type="text" id="cityTown" />
                            </label>
                            <label className="field">
                                <span className="field__label" htmlFor="Postcode">Post code</span>
                                <input className="field__input" type="text" id="Postcode" />
                            </label>
                        </div>
                        <div className="fields fields--2">
                            <label className="field">
                                <span className="field__label" htmlFor="Country">Country</span>
                                <input className="field__input" type="text" id="Country" />
                            </label>
                            <label className="field">
                                <span className="field__label" htmlFor="emailAddress">Email Address</span>
                                <input className="field__input" type="text" id="emailAddress" />
                            </label>
                        </div>
                        <div className="fields fields--2">
                            <label className="field">
                                <span className="field__label" htmlFor="Phone">Phone</span>
                                <input className="field__input" type="text" id="Phone" />
                            </label>
                            <label className="field">
                                <span className="field__label" htmlFor="Gotra">Gotra</span>
                                <input className="field__input" type="text" id="Gotra" />
                            </label>
                        </div>
                        <div className="fields fields--2">
                            <label className="field">
                                <span className="field__label" htmlFor="dob">Date of birth</span>
                                <input className="field__input" type="text" id="dob" />
                            </label>
                            <label className="field">
                                <span className="field__label" htmlFor="family">family members names</span>
                                <input className="field__input" type="text" id="family" />
                            </label>
                        </div>

                        <label className="field">
                            <span className="field__label" htmlFor="contributionAmount">contribution amount</span>
                            <input className="field__input" type="text" id="contributionAmount" />
                        </label>
                    </div>
                    <hr />

                    <div className='d-flex justify-content-center'>
                        <table className="infotable">
                            <thead className='text-center'>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col" className='heading'>EVENT</th>
                                    <th className='p-3' scope="col">EVENT DATE</th>
                                    <th className='p-3' scope="col">EVENT TIME</th>
                                    <th className='p-3' scope="col">THITHI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img className='HomaImage' src="https://www.dharmasamsthan.com/images/event/16877943438019.png" alt="" />
                                    </td>
                                    <td className='text-center'>Heramba Ganapathi Homa</td>
                                    <td className='p-5 text-center'>2023-07-07</td>
                                    <td className='p-5 text-center'>03:30 AM</td>
                                    <td className='p-5 text-center'>Chavithi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <button className="Submitbutton">Continue</button>
                </div>
            </form >
        </>
    );
}

export default ContributionForm;