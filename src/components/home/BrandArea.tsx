"use client"
import React, { useEffect } from 'react'

export default function BrandArea() {

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Marcas que confiam</h2>
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">

                    <img src="assets/images/final/marcas/logo2.png" alt="Company" />
                    <img src="assets/images/final/marcas/logo3.png" alt="Company" />
                    <img src="assets/images/final/marcas/logo4.png" alt="Company" />
                    <img src="assets/images/final/marcas/logo5.png" alt="Company" />
                    <img src="assets/images/final/marcas/logo6.png" alt="Company" />
                    <img src="assets/images/final/marcas/logo7.png" alt="Company" />
                    <img src="assets/images/final/marcas/logo8.png" alt="Company" />
                    <img src="assets/images/final/marcas/logo1.png" alt="Company" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
