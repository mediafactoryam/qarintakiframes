const dataSource = {
  chart: {
    caption: "Քարին տակ",
    subcaption:
      "2020 թվականի արցախյան պատերազմի հետևանքով Քարին Տակի բնակչության միգրացիան",
    theme: "fusion",

    orientation: "vertical",
    linkalpha: 30,
    linkhoveralpha: 60,
    nodelabelposition: "start",
    legendItemFontSize: 12,
    legendNumColumns: 5,
    legendNumRows: 10,
    showNodeLabels: false
  },
  nodes: [
    { label: "Քարին տակ" },
    { label: "Պռոշյան" },
    { label: "Երևան" },
    { label: "Աբովյան" },
    { label: "Արթիկ" },
    { label: "Ծաղկաձոր" },
    { label: "Ջերմուկ" },
    { label: "Մասիս" },
    { label: "Գորիս" },
    { label: "Ջրվեժ" },
    { label: "Աշտարակ" },
    { label: "Արագյուղ" },
    { label: "Նորագյուղ" },
    { label: "Բյուրավան" },
    { label: "Հրազդան" },
    { label: "Տանձավեր" },
    { label: "Դիլիջան" },
    { label: "Ռուսաստանի Դաշնություն" },
    { label: "Մարտունի" },
    { label: "Մարտակերտ" },
    { label: "Թալին" },
    { label: "Ասկերան" },
    { label: "Գյումրի" },
    { label: "Քաջարան" },
    { label: "Խնածախ" },
    { label: "Ջերմուկ" },

    { label: "Հարավ" },
    { label: "Ստեփանակերտ" },
    { label: "Ջրաշեն" },
    { label: "Հեր-Հեր" },
    { label: "Անհայտ" }
  ],

  links: [
    { from: "Քարին տակ", to: "Ստեփանակերտ", value: 333 },
    { from: "Քարին տակ", to: "Ծաղկաձոր", value: 7 },
    { from: "Քարին տակ", to: "Աբովյան", value: 14 },
    { from: "Քարին տակ", to: "Աղթամար հյուրանոց ", value: 1 },
    { from: "Քարին տակ", to: "Աշտարակ", value: 9 },
    { from: "Քարին տակ", to: "Ասկերան", value: 11 },
    { from: "Քարին տակ", to: "Արագյուղ", value: 3 },
    { from: "Քարին տակ", to: "Արթիկ", value: 7 },
    { from: "Քարին տակ", to: "Բյուրավան", value: 33 },
    { from: "Քարին տակ", to: "Գյումրի", value: 2 },
    { from: "Քարին տակ", to: "Գորիս", value: 7 },
    { from: "Քարին տակ", to: "Դիլիջան", value: 12 },
    { from: "Քարին տակ", to: "Երևան", value: 90 },
    { from: "Քարին տակ", to: "Թալին", value: 8 },
    { from: "Քարին տակ", to: "Խնածախ", value: 3 },
    { from: "Քարին տակ", to: "Հարավ", value: 2 },
    { from: "Քարին տակ", to: "Հեր-Հեր", value: 4 },
    { from: "Քարին տակ", to: "Հրազդան", value: 14 },
    { from: "Քարին տակ", to: "Մասիս", value: 17 },
    { from: "Քարին տակ", to: "Մարտակերտ", value: 25 },
    { from: "Քարին տակ", to: "Մարտունի", value: 5 },
    { from: "Քարին տակ", to: "Նորագյուղ", value: 7 },
    { from: "Քարին տակ", to: "Պռոշյան", value: 13 },
    { from: "Քարին տակ", to: "Ջերմուկ", value: 5 },
    { from: "Քարին տակ", to: "Ջրաշեն", value: 3 },
    { from: "Քարին տակ", to: "Ջրվեժ", value: 4 },
    { from: "Քարին տակ", to: "Ռուսաստանի Դաշնություն", value: 8 },
    { from: "Քարին տակ", to: "Սայաթ Նովա", value: 7 },
    { from: "Քարին տակ", to: "Տանձավեր", value: 13 },
    { from: "Քարին տակ", to: "Քաջարան", value: 3 },
    { from: "Քարին տակ", to: "Անհայտ", value: 46 }
  ]
};

FusionCharts.ready(function () {
  var myChart = new FusionCharts({
    type: "sankey",
    renderAt: "chart-container",
    width: "100%",
    height: "490",
    dataFormat: "json",
    dataSource
  }).render();
});
