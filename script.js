
  const humburger = document.querySelector(".humburger");
  const navLinks = document.querySelector(".navlink");

  humburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!humburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("show");
    }
  });

  const light = document.querySelector(".light");
  light.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    light.classList.toggle("dark");
  });
  
//   navbar finisshed

