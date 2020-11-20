import React from 'react';
import '../jobs.css';

const JobGrid = () => {
  return (
    <div className="gridBG">
      <div className="container gridInnards">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Position</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img src="https://via.placeholder.com/100x100" />
              </th>
              <td>Actor</td>
              <td colspan="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                quos reiciendis dolores rerum praesentium doloremque laboriosam
                id sequi quibusdam nihil tempora nemo voluptatum vel, in error
                amet ratione velit. Tenetur?
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img src="https://via.placeholder.com/100x100" />
              </th>
              <td>Guitarist</td>
              <td colspan="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                quos reiciendis dolores rerum praesentium doloremque laboriosam
                id sequi quibusdam nihil tempora nemo voluptatum vel, in error
                amet ratione velit. Tenetur?
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img src="https://via.placeholder.com/100x100" />
              </th>
              <td>Emcee</td>
              <td colspan="2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus fugiat ea, aperiam, totam doloribus necessitatibus
                sint ex possimus facere dolorem dolor et quidem alias commodi
                iste tempore obcaecati fuga quia!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobGrid;
