window.systemImport = System.import;
System.import("single-spa").then(function (singleSpa) {
  window.singleSpa = singleSpa;
  singleSpa.start();
})

System.import('single-spa').then(function () {
  const template = `
  <style>
  .product-image {
    background: lightgrey;
    padding: 1em;
  }
  </style>
  <div class="product-image">
    Hi there Austin, I'm from Single SPA!
  </div>
  `;

  window.productImageParcel = window.singleSpaHtml.default({
    template,
  });

  singleSpa.registerApplication('product-image', window.productImageParcel, () => true);
});
