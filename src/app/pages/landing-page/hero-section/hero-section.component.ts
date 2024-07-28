import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements AfterViewInit {
  ngAfterViewInit() {
    document.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrolled = window.scrollY;
    const parallaxElement = document.querySelector(
      '.hero::before'
    ) as HTMLElement;
    if (parallaxElement) {
      parallaxElement.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  }
}
