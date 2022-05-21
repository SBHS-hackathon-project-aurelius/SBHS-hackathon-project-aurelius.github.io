const themeMap = {
    dark: "light",
    light: "dark",
    // solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
  
  console.log(gsap)
  
  let sections = gsap.utils.toArray(".panel");
  
  console.log("hello world: " + sections)
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
  });

gsap.from("#project-title", { scrollTrigger: {scrub: 1 }, x: 400});
gsap.from("#cloud1", { scrollTrigger: {scrub: 1}, x: 60})
gsap.from("#cloud2", { scrollTrigger: {scrub: 1}, x: -500})

gsap.to(".panel.one_0", { scrollTrigger: { scrub: 1 }, scale: 1.5 });
gsap.to("#cloud2", { scrollTrigger: {scrub: 1}, x: 200})
gsap.to("#cloud1", { scrollTrigger: {scrub: 1}, x: -1500})