import React, { useState } from 'react';
import { Country, State, City } from 'country-state-city';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

    
    const { shippingInfo } = useSelector(state => state.cart);


    const [address, setAddress] = useState(shippingInfo.address);
    const [country, setCountry] = useState(shippingInfo.country);
    const [state, setState] = useState(shippingInfo.state);
    const [city, setCity] = useState(shippingInfo.city);
    const [pincode, setPincode] = useState(shippingInfo.pincode);
    const [mobile, setMobile] = useState(shippingInfo.mobile);


    const dispatch = useDispatch();
    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();

        dispatch({
            type: "addShippingInfo",
            payload: { address, country, state, city, pincode, mobile }
        })

        localStorage.setItem("shippingInfo", JSON.stringify({ address, country, state, city, pincode, mobile }))

        navigate("/confirmorder");
    }

    return (
        <section className='shipping'>
            <main>
                <h2>Shipping Details</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Address</label>
                        <input type="text" name="address" id="address" placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>

                    <div>
                        <label>Country</label>
                        <select name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required>
                            <option value="">Country</option>
                            {Country && Country.getAllCountries().map(i => (
                                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            ))}
                        </select>
                    </div>

                    {
                        country && (
                            <div>
                                <label>State</label>
                                <select name="state" id="state" value={state} onChange={(e) => setState(e.target.value)} required>
                                    <option value="">State</option>
                                    {State && State.getStatesOfCountry(country).map(i => (
                                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                                    ))}
                                </select>
                            </div>
                        )
                    }

                    {
                        state && (
                            <div>
                                <label>City</label>
                                <select name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} required>
                                    <option value="">City</option>
                                    {City && City.getCitiesOfState(country, state).map(i => (
                                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                                    ))}
                                </select>
                            </div>
                        )
                    }

                    <div>
                        <label>Pincode</label>
                        <input type="text" name="pincode" id="pincode" placeholder='Enter Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                    </div>

                    <div>
                        <label>Mobile No.</label>
                        <input type="number" name="mobile" id="mobile" placeholder='Enter Mobile Number' value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                    </div>

                    <button type="submit">Confirm Order</button>
                </form>
            </main>
        </section>
    )
}

export default Shipping;