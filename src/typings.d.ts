declare module 'jquery' {
  interface JQuery<TElement = HTMLElement> {
    owlCarousel(options?: any): JQuery<TElement>;
  }
}
