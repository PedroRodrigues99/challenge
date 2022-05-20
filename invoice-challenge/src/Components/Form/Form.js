import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FcSearch, FcInfo } from "react-icons/fc";
import { MdCleaningServices } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

function Form(props) {
  const [documentStatusList, setDocumentStatusList] = useState(["Select an option"]);
  const [documentStatusSelected, setDocumentStatusSelected] = useState("Select an option");
  const [documentTypeList, setDocumentTypeList] = useState(["Select an option"]);
  const [documentTypeSelected, setDocumentTypeSelected] = useState("Select an option");
  const [documentNumberSelected, setDocumentNumberSelected] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  const [totalWithoutVATSelected, setTotalWithoutVATSelected] = useState("");
  const [clientNameSelected, setClientNameSelected] = useState("");
  const [disabledSearch, setDisabledSearch] = useState(true);
  
  useEffect(() => {
    props.invoiceList.map((invoice, index) => {
      //Populate instalacionList
      if (documentStatusSelected !== "Select an option" || documentTypeSelected!=="Select an option" || documentNumberSelected!=="" || dateSelected!=="" || totalWithoutVATSelected!=="" || clientNameSelected!==""){
        setDisabledSearch(false);
      } else{
        setDisabledSearch(true);
      }
      if (documentStatusList.includes(invoice.documentStatus));
      else {
        setDocumentStatusList(documentStatusList.concat(invoice.documentStatus));
      }
      //Populate estadolist
      if (documentTypeList.includes(invoice.documentType));
      else {
        setDocumentTypeList(documentTypeList.concat(invoice.documentType));
      }
      //Populate tipologiaList
    });
  });

  const handleCleanDocumentStatus = () => {
    setDocumentStatusSelected("Select an option");
  };
  const handleCleanTotalWithoutVAT = () => {
    setTotalWithoutVATSelected("");
  };
  const handleCleanDocumentNumber = () => {
    setDocumentNumberSelected("");
  };
  const handleCleanDate = () => {
    setDateSelected("");
  }
  const handleCleanDocumentType = () => {
    setDocumentTypeSelected("Select an option");
  };
  const handleCleanClientName = () => {
    setClientNameSelected("");
  };

  const handleCleanAll = () => {
    setDocumentStatusSelected("Select an option");
    setTotalWithoutVATSelected("");
    setDocumentNumberSelected("");
    setDateSelected("");
    setDocumentTypeSelected("Select an option");
    setClientNameSelected("");
    setDisabledSearch("true");
    

    props.parentCallback(props.invoiceList);
  };
  const handleFilter = () => {
    var newFilteredInvoices = props.invoiceList;
    if (documentStatusSelected !== "Select an option") {
      newFilteredInvoices = newFilteredInvoices.filter((invoice) => {
        return invoice.documentStatus === documentStatusSelected;
      });
    }
    if (documentTypeSelected !== "Select an option") {
      newFilteredInvoices = newFilteredInvoices.filter((invoice) => {
        return invoice.documentType === documentTypeSelected;
      });
    }
    if (documentNumberSelected !== "") {
      newFilteredInvoices = newFilteredInvoices.filter((invoice) => {
        return invoice.documentNumber == documentNumberSelected;
    });
  }
  if (totalWithoutVATSelected !== ""){
    newFilteredInvoices = newFilteredInvoices.filter((invoice) =>{
      return invoice.totalWithoutVAT == totalWithoutVATSelected;
    })
  }
  if (clientNameSelected !== ""){
    newFilteredInvoices = newFilteredInvoices.filter((invoice) =>{
      return invoice.clientName.toLocaleLowerCase().includes(clientNameSelected.toLocaleLowerCase());
    })
  }
  if(dateSelected !== ""){
    newFilteredInvoices = newFilteredInvoices.filter((invoice) => {
      return invoice.date == dateSelected;
    });
  }
  props.parentCallback(newFilteredInvoices);
}

  return (
      <div>
        <form>
          <div className="form">
            <p className="generaltext"> General </p>
            <Row>
              <Col md={12}>
                <div className="input_icon">
                  <label>
                  <div className="title_label ">Document Status:</div>
                    <select
                      type="text"
                      name="name"
                      className="input_normal"
                      value={documentStatusSelected}
                      onChange={(e) => setDocumentStatusSelected(e.target.value)}>
                      {documentStatusList.map((documentStatus, index) => (
                        <option>{documentStatus}</option>
                      ))}
                    </select>
                  </label>
                  <div className="icon">
                    <MdCleaningServices onClick={handleCleanDocumentStatus} />
                    <FcInfo />
                  </div>
                </div>
                <div className="input_icon">
                  <label>
                  <div className="title_label ">Document Number:</div>
                    <input
                      type="text"
                      name="name"
                      className="input_normal"
                      value={documentNumberSelected}
                      onChange={(e) => setDocumentNumberSelected(e.target.value)}
                    />
                  </label>
                  <div className="icon">
                    <MdCleaningServices onClick={handleCleanDocumentNumber} />
                  </div>
                </div>
                <div className="input_icon">
                  <label>
                  <div className="title_label ">Date:</div>
                    <input
                      type="date"
                      className="input_normal"
                      value={dateSelected}
                      onChange={(e) => setDateSelected(e.target.value)}
                    />
                  </label>
                  <div className="icon">
                    <MdCleaningServices onClick={handleCleanDate} />
                  </div>
                </div>
                <div className="input_icon">
                  <label>
                  <div className="title_label ">Document Type:</div>
                    <select
                      type="text"
                      name="name"
                      className="input_normal"
                      value={documentTypeSelected}
                      onChange={(e) => setDocumentTypeSelected(e.target.value)}>
                      {documentTypeList.map((documentType) => (
                        <option>{documentType}</option>
                        ))}
                    </select>
                  </label>
                  <div className="icon">
                    <MdCleaningServices onClick={handleCleanDocumentType} />
                    <FcInfo />
                  </div>
                </div>
                <div className="input_icon">
                  <label>
                  <div className="title_label ">Client Name:</div>
                    <input type="text" name="name" className="input_normal" value={clientNameSelected}  onChange={(e) => setClientNameSelected(e.target.value)}/>
                  </label>
                  <div className="icon">
                  <MdCleaningServices onClick={handleCleanClientName} />
                  </div>
                </div>
                <div className="input_icon">
                  <label>
                  <div className="title_label ">Total Without VAT:</div>
                    <input type="text" name="name" className="input_normal" value={totalWithoutVATSelected}  onChange={(e) => setTotalWithoutVATSelected(e.target.value)}/>
                  </label>
                  <div className="icon">
                  <MdCleaningServices onClick={handleCleanTotalWithoutVAT} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
  
          <div className="buttons">
          <div className={ (disabledSearch ? "disabled" : "button")} onClick={(disabledSearch ? ()=>{} : handleFilter)}>
              <FcSearch />
              Buscar
            </div>
            <div className="button" onClick={handleCleanAll}>
              <MdCleaningServices />
              Limpiar
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  export default Form;
  