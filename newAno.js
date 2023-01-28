
// new announcement slider
let newAnnounceBoes = [
  ...document.querySelectorAll(".new-announcement .container .box")
];
let returnBtn = [...document.querySelectorAll(
  ".new-announcement .container .box .btns .Return"
)]
let NextBtn = document.querySelectorAll(
  ".new-announcement .container .box .btns .next"
);
let AnounceBtn = document.querySelectorAll(
  ".new-announcement .container .box .btns a.Announce"
);

let i = 0;
if (i == 0) {
  returnBtn[0].style.opacity = "0";
  returnBtn[0].style.zIndex = "-2";
}

NextBtn.forEach((rI) => {
  rI.addEventListener("click", () => {
    window.scrollTo({
        top: 30,
        behavior: "smooth"
    });
    newAnnounceBoes.forEach((box) => {
      box.classList.remove("activeCenter");
    });
    newAnnounceBoes[i].classList.add("activeLeft");
    i +=1;
  console.log(i)

    newAnnounceBoes[i].classList.add("activeCenter");
    if (i == 4) {
      AnounceBtn[0].classList.remove("Announce");
      NextBtn[4].style.display = "none";
    }
  });
});

returnBtn.forEach((rI) => {
  rI.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    newAnnounceBoes.forEach((box) => {
      box.classList.remove("activeCenter");
    });
    i-=1;
    console.log(   document.documentElement.scrollTop )
    newAnnounceBoes[i].classList.add("activeCenter");
    newAnnounceBoes[i].classList.remove("activeLeft");
  console.log(i)
  });
});
// the value of the category
let categorySpan = document.querySelectorAll(
  ".new-announcement .container .box .category span"
);

let categorylis = document.querySelectorAll(
  ".new-announcement .container .categories li"
);
categorylis.forEach((li) => {
  li.addEventListener("click", () => {
    categorySpan[0].innerHTML = li.dataset.category;
     categorylis.forEach(li => {
      li.classList.remove("on")
    })
    li.classList.add("on");
    newAnnounceBoes.forEach((box) => {
      box.classList.remove("activeCenter");
    });
    newAnnounceBoes[0].classList.add("activeLeft") ;
    i++;
    newAnnounceBoes[1].classList.add("activeCenter");
  });
});

// select option
let optionHeader = [
  ...document.querySelectorAll(
    ".new-announcement .container .box form .custemoption"
  ),
];
let optionBody = document.querySelectorAll(
  ".new-announcement .container .box form .custemoption ul"
);
let optionI = document.querySelectorAll(
  ".new-announcement .container .box form .custemoption .optionHeader i"
);
console.log(optionI[0])

optionHeader.forEach((el) => {

  el.addEventListener("click", () => {
    el.classList.add("border");
    
    let dataOption = el.dataset.option;
    optionBody.forEach((el) => {
      if (el.dataset.option == dataOption) {
        el.classList.toggle("on");
      } else {
        el.classList.add("on");
      }
    });
  });
});
optionHeader.forEach(el => {
  el.addEventListener("click",handleBorder);
  el.addEventListener("click",()=> {
    let option = el.dataset.option;
    optionI.forEach(e=> {
      if (e.dataset.option == option ) {
        e.classList.add("animate");
      }
    })
  })
})
function handleBorder () {
  optionHeader.forEach((el) => {
      el.classList.remove("border");
      this.classList.add("border")
    })
}


// clicking everywhere to hide the dropdomn
document.addEventListener("click", (e) => {
  if (e.target.id !== "on") {
    optionBody.forEach((el) => {
      el.classList.add("on");
    });
    optionHeader.forEach(el => {
      el.classList.remove("border")
    })
    optionI.forEach(i => {
      i.classList.remove("animate")
    })
  
  } else if (e.target.id == "on") {
    optionBody.forEach((el) => {
      e.target.classList.remove("on");
    });
    
  }
});
// data management
let PriceUnit = document.querySelectorAll(
  ".new-announcement .container .price form .custemoption .unit li"
);
let PriceUnitSpans = document.querySelectorAll(
  ".new-announcement .container .price form .custemoption .unit li span"
);
let currencyUnit = document.querySelectorAll(
  ".new-announcement .container .price form .custemoption .currency li"
);
let currencyUnitInnerHtml = [...document.querySelectorAll(
  ".new-announcement .container .price form .custemoption .currency li"
)];
let labelUnite = document.querySelectorAll(
  ".new-announcement .container .box form .priceDA"
); 
let tilteUnit = document.querySelectorAll(
  ".new-announcement .container .box form .custemoption p"
);
let amountUnit = document.querySelectorAll(
  ".new-announcement .container .Description form .custemoption ul li"
);
let labelAmount = document.querySelectorAll(
  ".new-announcement .container .box form .amountKg"
); 

amountUnit.forEach(li => {
  li.addEventListener("click",() => {
    tilteUnit[0].innerHTML = li.innerHTML;
    labelAmount[0].innerHTML = li.innerHTML;
    amountUnit.forEach(el => {
      el.classList.remove("on");
    })
    li.classList.add("on")
  })
})

currencyUnit.forEach(li => {
  li.addEventListener("click",() => {
    currencyUnit.forEach(li => {
      li.classList.remove("on")
    })
    li.classList.add("on");
    labelUnite[0].innerHTML = li.innerHTML;
    tilteUnit[1].innerHTML = li.innerHTML;
    chosenCurrency = li.innerHTML;
    PriceUnitSpans.forEach(li => {
      li.innerHTML = chosenCurrency;
      labelUnite[0].innerHTML = li.innerHTML;
    tilteUnit[2].innerHTML = li.innerHTML;
    })
  })
})

PriceUnit.forEach(li => {
  li.addEventListener("click",() => {
    labelUnite[0].innerHTML = li.innerHTML;
    tilteUnit[2].innerHTML = li.innerHTML;
      PriceUnit.forEach(li => {
      li.classList.remove("on")
    })
    li.classList.add("on");
  })
})

let exchangeLis = document.querySelectorAll(".new-announcement .container .price form .custemoption .exchange li") ;
exchangeLis.forEach((li) => {
  li.addEventListener("click", () => {
    tilteUnit[3].innerHTML = li.innerHTML;
     exchangeLis.forEach(li => {
      li.classList.remove("on")
    })
    li.classList.add("on");
  
  });
});
// upload files 
let fileInput = document.querySelectorAll(".new-announcement .container .images .img-input");
let fileList = document.querySelectorAll(".new-announcement .container .images .fileList");
let numOfFiles = document.querySelectorAll(".new-announcement .container .images .nbrOfFiles");
fileInput[0].addEventListener("change",() => {
  fileList[0].innerHTML ="";
  if (fileInput[0].files.length == 0) {
    numOfFiles[0].innerHTML = `no chosen pictures`
  }else if (fileInput[0].files.length ==1) {
    numOfFiles[0].innerHTML = `${fileInput[0].files.length} selected picture`
  }else {
    numOfFiles[0].innerHTML = `${fileInput[0].files.length} selected pictures`
  }
  for(j of fileInput[0].files){
    let render = new FileReader();
    let listItem = document.createElement("li");
    let fileName = j.name;
    let fileSize = (j.size / 1024).toFixed(1);
      let dataUnit;
    if (fileSize >=1024) {
       dataUnit = "MB";
    }else  {
       dataUnit = "KB";

    }
    listItem.innerHTML = `<p>${fileName}</p> <p>${fileSize} ${dataUnit}</p>`  ;
  fileList[0].appendChild(listItem);
  }
})
// alert + overlay01
const alertPup = document.querySelectorAll(".new-announcement .alert");
const aletrCloseBtn = document.querySelectorAll(".new-announcement .alert a");
const overLay = document.querySelectorAll(".new-announcement .overlay");

AnounceBtn[0].addEventListener("click",()=> {
  alertPup[0].classList.add("on");
  overLay[0].classList.add("on");
})
aletrCloseBtn[0].addEventListener("click",() => {
  alertPup[0].classList.remove("on");
  overLay[0].classList.remove("on");
})

// click effect
let uploadArea = document.querySelectorAll(".new-announcement .container .box .custom-file-upload");
uploadArea[0].addEventListener("click",() => {
  uploadArea[0].classList.add("one");
})
// the menu movement
let categoriesList = document.querySelectorAll(".nav .categoriesList");
let navBar = [...document.getElementsByClassName("nav")];
let menuIcon = document.querySelectorAll(" .nav .container .logo .fa-bars");
let xIcon = document.querySelectorAll(".categoriesList .container .nav .fa-x");
menuIcon[0].addEventListener("click", () => {
  categoriesList[0].classList.add("moveRight");
  navBar[0].classList.add("clicked");
});

xIcon[0].addEventListener("click", () => {
  categoriesList[0].classList.remove("moveRight");
  navBar[0].classList.remove("clicked");
});
// clicking everywhere
document.addEventListener("click", (e) => {
  if (e.target.id !== "categoriesList" && e.target.id !== "fa-bars") {
    categoriesList[0].classList.remove("moveRight");
    navBar[0].classList.remove("clicked");
  }
});
// hide navBar on scroll
let recomendation = document.querySelectorAll(".nav .recomendation");
var lastScrollTop;
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (!recomendation[0].classList.contains("delete")) {
    if (scrollTop > lastScrollTop) {
      navBar[0].style.top = "-80px";
    } else {
      navBar[0].style.top = "0";
    }
  }
  lastScrollTop = scrollTop;
});
//loeder
let loeder = [...document.getElementsByClassName("parentLoeder")];
console.log(loeder)
window.addEventListener("load", function () {
  loeder.forEach((leoder) => {
    leoder.classList.add("hide-loader");
  });
});