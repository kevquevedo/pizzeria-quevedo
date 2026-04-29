import { afterNextRender, DestroyRef, Directive, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  host: {
    class: 'scroll-reveal',
    '[class.is-visible]': 'isVisible()',
  },
})
export class ScrollRevealDirective {
  private readonly el        = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly isVisible = signal(false);

  constructor() {
    let observer: IntersectionObserver | undefined;

    afterNextRender(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
            observer?.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      observer.observe(this.el.nativeElement);
    });

    this.destroyRef.onDestroy(() => observer?.disconnect());
  }
}
