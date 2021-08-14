import React from "react";

export default function ListCars() {
  return (
    <div className="page-header">
      

      <div class="card text-center">
        <div class="card-header center"></div>
        <div class="card-body">
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
