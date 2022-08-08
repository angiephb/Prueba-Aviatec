import styles from './menu.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import data from '../../data/data';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'


const Menu = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [dropdown, setDropdown] = useState(false);
    const [drop, setDrop] = useState('Medellín, Colombia');

    const openClose = () => {
        setDropdown(!dropdown);
    }
    return (
        <>
            <section className={styles.container_search} >
                <section className={styles.btnOption}>
                    <button className={styles.flight} type='submit'><i className='fa-solid fa-plane-departure'></i>  Vuelos</button>
                    <button className={styles.hotel} type='submit'><i className='fa-solid fa-hotel'></i>  Hotel</button>
                    <button className={styles.car} type='submit'><i className="fa-solid fa-car"></i>  Autos</button>
                </section>
                <section className={styles.container_options}>
                    <section className={styles.container_radioButtons}>
                        <section className={styles.inputs}>
                            <input type='radio' name='ida' id='idayvuelta' value='idayvuelta' />
                            <label htmlFor='idayvuelta'>Ida y vuelta</label>
                            <input type='radio' name='ida' id='soloida' value='soloida' />
                            <label htmlFor='soloida'>Solo ida</label>
                            <input type='radio'name='ida' id='multidestino' value='multidestino' />
                            <label htmlFor='multidestino'>Multidestino</label>
                        </section>

                    </section>
                    <section className={styles.container_dropsearch}>
                        <section className={styles.container_dropdown} >

                            <Dropdown isOpen={dropdown} toggle={openClose} >
                                <DropdownToggle value={drop}>
                                    <section className={styles.text}>
                                        <i className='fa-solid fa-location-dot'></i>
                                        {drop}
                                    </section>
                                    <i className="fa-solid fa-angle-down"></i>
                                </DropdownToggle>
                                <DropdownMenu style={{overflowY: 'auto'}} value={drop} onChange={(e) => {setDrop(e.target.value); }} >
                                    {data.map(item =>
                                        <DropdownItem  key={`item_${item.id}`}>
                                            {item.name_city}
                                        </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                        </section>
                        <section className={styles.calendar}>
                            <i className="fa-regular fa-calendar-check"></i>
                            <DatePicker className={styles.date} selected={startDate} onChange={(date) => setStartDate(date)} />
                            <i className="fa-solid fa-angle-down calendar"></i>
                        </section>

                        <button type='submit' className={styles.btnsearch}> Buscar</button>
                    </section>

                </section>
            </section>
        </>
    )
}

export default Menu;