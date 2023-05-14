window.onload = function() {
  // 이 곳에 모든 HTML 요소가 로드된 후 실행할 코드를 작성합니다.
  var sectionA = document.getElementById("sectionA");
  var sectionB = document.getElementById("sectionB");
  var sectionC = document.getElementById("sectionC");
  var sectionZ = document.getElementById("sectionZ");

  var picA = document.querySelector(".pic-sectionA");
  var picB = document.querySelector(".pic-sectionB");
  var picC = document.querySelector(".pic-sectionC");
  var picZ = document.querySelector(".pic-sectionZ");


  var picNoA = document.querySelector(".picNo-sectionA");
  var picNoB = document.querySelector(".picNo-sectionB");
  var picNoC = document.querySelector(".picNo-sectionC");
  var picNoZ = document.querySelector(".picNo-sectionZ");

  var content1 = document.getElementById("content-1");
  var content2 = document.getElementById("content-2");
  var content3 = document.getElementById("content-3");
  var content0 = document.getElementById("content-0");

  
  function showInitialContent() {
    picA.setAttribute("src", "./i_map0.png");
    picNoA.innerHTML = "0";
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
  }
  
  function showContent(index) {
    if (index === 1) {
      content1.style.display = "block";
      content2.style.display = "none";
      content3.style.display = "none";
      content0.style.display = "none";

    } else if (index === 2) {
      content1.style.display = "none";
      content2.style.display = "block";
      content3.style.display = "none";
      content0.style.display = "none";

    } else if (index === 3) {
      content1.style.display = "none";
      content2.style.display = "none";
      content3.style.display = "block";
      content0.style.display = "none";

    }
  }

  // 초기 상태 설정
  showInitialContent();
  
  sectionA.addEventListener("click", function() {
    picA.setAttribute("src", "./i_ex1.png");
    picNoA.innerHTML = "1";
    showContent(1);
  });

  
  sectionB.addEventListener("click", function() {
    picB.setAttribute("src", "./i_ex2.png");
    picNoB.innerHTML = "2";
    showContent(2);
  });

  sectionC.addEventListener("click", function() {
    picC.setAttribute("src", "./i_ex3.png");
    picNoC.innerHTML = "3";
    showContent(3);
  });
};
