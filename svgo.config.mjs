export default {
  multipass: true,

  plugins: [
    // baseline cleanup
    "preset-default",

    // remove width/height so icons scale cleanly
    {
      name: "removeDimensions",
      active: true,
    },

    // remove all inline style attributes
    {
      name: "removeAttrs",
      params: {
        attrs: ["style"],
      },
    },

    // remove hardcoded fill/stroke attributes
    {
      name: "removeAttrs",
      params: {
        attrs: ["fill", "stroke", "stroke-width", "fill-rule", "stroke-linecap", "stroke-linejoin"],
      },
    },

    // ensures no <title>, <desc>, etc from Inkscape
    {
      name: "removeUnknownsAndDefaults",
      active: true,
    },

    // optional but useful for Inkscape exports
    {
      name: "removeXMLNS",
      active: true,
    },
  ],
};
