jQuery(document).ready(function() {
  var myCS = {
    thumbnail: {
      background: "#444",
      backgroundImage: "linear-gradient(315deg, #111 10%, #557 70%)",
      borderColor: "#fff",
      labelOpacity: 1,
      labelBackground: "rgba(34, 34, 34, 0.7)",
      titleColor: "#eee",
      titleBgColor: "transparent",
      titleShadow: "",
      stackBackground: "#aaa"
    }
  };
  jQuery("#nanogallery2").nanogallery2({
    galleryTheme: myCS,
    thumbnailHeight: 200,
    thumbnailWidth: 300,
    thumbnailAlignment: "center",
    thumbnailLabel: {
      position: "overImageOnBottom",
      hideIcons: true,
      titleFontSize: "2em"
    },
    items: [
      {
        src: "https://source.unsplash.com/M4EcjtmE01k",
        srct: "https://source.unsplash.com/M4EcjtmE01k",
        title: "Amsterdam"
      },
      {
        src: "https://source.unsplash.com/nnzkZNYWHaU",
        srct: "https://source.unsplash.com/nnzkZNYWHaU",
        title: "Paris"
      },
      {
        src: "https://source.unsplash.com/McAUsp58jME",
        srct: "https://source.unsplash.com/McAUsp58jME",
        title: "Berlin"
      },
      {
        src: "https://source.unsplash.com/zunQwMy5B6M",
        srct: "https://source.unsplash.com/zunQwMy5B6M",
        title: "Venice"
      },
      {
        src: "https://source.unsplash.com/hmXtDtmM5r0",
        srct: "https://source.unsplash.com/hmXtDtmM5r0",
        title: "Santorini"
      }
    ]
  });
});
