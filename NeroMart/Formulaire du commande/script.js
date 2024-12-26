const scriptURL =                       
      "https://script.google.com/macros/s/AKfycbz4UCTj65kRKgd8nwDKoPnB7iLQo8N9tWZz-13a3cMf52vsUIzOuU1RwCn9ocUvCGNh/exec";
      const form = document.forms["submit-to-google-sheet"];
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        var formData = new FormData(form);
        var ex = document.getElementById("ex").checked;

        fetch(scriptURL, { method: "POST", body: formData })
          .then((response) => {
            swal("Done", "Submitted Successfully.", "success");
          })
          .catch((error) => {
            swal("Error", "Something went wrong. please try again!", "error");
          });
      });