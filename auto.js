$(document).ready(() => {
  $.get("data.json", (data) => {
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      $("#listexe").append(
        "<a href='" +
          data[i].url +
          "' class='list-group-item list-group-item-action flex-column align-items-start'><div class='d-flex w-100 justify-content-between'><h5 class='mb-1'><i class='fa fa-home'></i> " +
          data[i].title +
          "</h5><span class='badge badge-primary badge-pill'>" +
          (i + 1) +
          "</span></div><p class='mb-1'>" +
          data[i].description +
          "</p></a>"
      );
    }
  });
});
