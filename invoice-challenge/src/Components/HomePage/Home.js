import React, { useState, useCallback } from "react";
import Form from "../Form/Form";
import Table from "../Table/Table";
import "./HomePage.css";
import { HiMinus, HiPlus } from "react-icons/hi";
import data from "../../documents.json";

function Home() {
    const [show, setShow] = useState(false);
    const [hidden, setHidden] = useState(false);

    const [invoicesFiltered, setInvoicesFiltered] = useState(data.invoices);

    const callback = useCallback((newFilteredInvoices) => {
        setInvoicesFiltered(newFilteredInvoices);
    }, []);
    
    return (
        <div>
            <div className="div_home">
                <div>
                    <button className="buttonshow busqueda" onClick={() => setShow(!show)}>{show ? <HiMinus className="minus" /> : <HiPlus className="minus"/>} Search criteria</button>
                    <div>
                        {show && <Form parentCallback={callback} invoiceList={data.invoices} />}
                    </div>
                </div>
            </div>

            <div className="div_home">
                <div>

                    <button className="buttonshow busqueda" onClick={() => setHidden(!hidden)}>{hidden ? <HiMinus className="minus" /> : <HiPlus className="minus"/>} Results </button>
                    <div>
                        {hidden && <Table invoiceList={invoicesFiltered} />}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
