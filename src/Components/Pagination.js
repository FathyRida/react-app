import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { pageSize, itmes, onPageChane, currentPage } = this.props;
    const pageCount = Math.ceil(itmes / pageSize);
    // console.log("pageCount", pageCount);

    if (pageCount <= 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page, i) => {
            return (
              <li
                key={i}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
                onClick={() => onPageChane(page)}
              >
                <a className="page-link" href="\#">
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Pagination;
