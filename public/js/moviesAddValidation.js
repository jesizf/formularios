console.log("moviesAddValidation.js sucess");

const $ = (id) => document.getElementById(id);

const validation = (id, texto) => {
  if (!$(id).value) {
    $(id).classList.add("is-invalid");
    $("error-" + id).innerText = texto;
  } else {
    $(id).classList.remove("is-invalid");
    $(id).classList.add("is-valid");
    $("error-" + id).innerText = null;
  }
};

window.addEventListener("load", () => {
  $("title").focus();

  $("form-add-movies").addEventListener("submit", function (e) {
    e.preventDefault();
  });

  $("title").addEventListener("blur", function () {
    validation("title", "El titulo es obligatorio");
  });

  $("rating").addEventListener("blur", function () {
    switch (true) {
      case !this.value:
        validation("rating", "¿tan mala fue?");
        break;

      case this.value < 0 || this.value > 10:
        this.classList.add("is-invalid");
        $("error-rating").innerText = "Debe tener un valor entre 0 y 10";
        break;
      default:
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        $("error-rating").innerText = null;
    }
  });

  $("awards").addEventListener("blur", function () {
    switch (true) {
      case !this.value:
        validation("awards", "¿No gano nada?");
        break;
      case this.value < 0 || this.value > 10:
        this.classList.add("is-invalid");
        $("error-awards").innerText = "Debe tener un valor entre 0 y 10";
        break;
      default:
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        $("error-awards").innerText = null;
    }
  });
  $("length").addEventListener("blur", function () {
    switch (true) {
      case !this.value:
        validation("length", "¿Tan corta fue?");
        break;
      case this.value < 60 || this.value > 360:
        this.classList.add("is-invalid");
        $("error-length").innerText = "Debe tener un valor entre 60 y 360";
        break;
      default:
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        $("error-length").innerText = null;
    }
  });

  $("release_date").addEventListener("blur", function () {
    validation("release_date", "¿Cuando se estreno?");
  });

  $("genre").addEventListener("blur", function () {
    validation("genre", "Debe clasificarla");
  });



  // cuando se esta por enviar
  $("form-add-movies").addEventListener("submit", function (e) {
    e.preventDefault();

    let error = false;

    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].classList.contains("is-invalid")) {
        error = true;
        $("error-msg").innerText = "Los campos señalados son obligatorios";
      }

      !error && this.submit();
    }
  });
});
