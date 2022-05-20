import React, { useState } from "react";
import "./Table.css";
import ReactPaginate from 'react-paginate';

function Table(props) {
  const [pageNumber, setPageNumber] = useState(0); 
  const invoicePerPage = 7;
  const pagesVisited = pageNumber * invoicePerPage;

  const displayInvoices = props.invoiceList.slice(pagesVisited, pagesVisited + invoicePerPage).map((invoice, index) =>{
    return(
    <tr>
      <th className="tcell" scope="row">{index}</th>
      <td className="tcell">{invoice.documentStatus}</td>
      <td className="tcell">{invoice.documentType}</td>
      <td className="tcell">{invoice.documentNumber}</td>
      <td className="tcell">{invoice.clientName}</td>
      <td className="tcell">{invoice.date}</td>
      <td className="tcell">{invoice.TotalWithoutVAT}</td>
    </tr>
    )
    })

    const pageCount= Math.ceil(props.invoiceList.length / invoicePerPage);
    const changePage = ({selected}) =>{
      setPageNumber(selected);
    };
  return (
    <div>
    <div className="tableContainer">
       <div className="results"><p>Mostrando {props.invoiceList.length} de {props.invoiceList.length} resultados</p></div>
      <div className="table_wrapper">
      <table className="table">
        <thead>
          <tr>
            <th className="tcell" scope="col"> #
            </th>
            <th className="tcell" scope="col">Document status
            </th>
            <th className="tcell" scope="col">Document type
            </th>
            <th className="tcell" scope="col">Document Number
            </th>
            <th className="tcell" scope="col">Client name
            </th>
            <th className="tcell" scope="col">Date
            </th>
            <th className="tcell" scope="col">Total without VAT
            </th>
          </tr>
        </thead>
        <tbody className="list">
          {displayInvoices}
        </tbody>
      </table>
      </div>
    </div>
    <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
    </div>);
}

export default Table;
