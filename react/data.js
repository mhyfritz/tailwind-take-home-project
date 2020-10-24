export const product = {
  headings: {
    main: `Get your Kemper Profiling Amp`,
    sub: `All your favorite amps and effects, together in one little box.`,
  },
  images: [
    {
      src: `/img/kemper-front.jpg`,
      alt: `Front view of Kemper Profiling Amp`,
    },
    {
      src: `/img/kemper-angle.jpg`,
      alt: `Side view of Kemper Profiling Amp`,
    },
    {
      src: `/img/kemper-rear.jpg`,
      alt: `Rear view of Kemper Profiling Amp`,
    },
  ],
  description: {
    kicker: `The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and all-in-one effects processor.`,
    paragraphs: [
      `Hailed as a game-changer by guitarists the world over, the PROFILER™ is the first digital guitar amp to really nail the full and dynamic sound of a guitar or bass amp.`,
      `This is made possible by a radical, patented technology and concept which we call "PROFILING".`,
    ],
  },
  configuration: {
    base: { price: 1799 },
    modules: [
      {
        name: `Form Factor`,
        options: [
          {
            name: `Profiler Head`,
            description: `Compact amplifier head, perfect for a speaker cabinet or desk.`,
            price: 0,
          },
          {
            name: `Profiler Rack`,
            description: `3U rackmount version of the classic profiling amplifier.`,
            price: 0,
          },
        ],
        meta: { layout: `row` },
      },
      {
        name: `Power Amp`,
        options: [
          {
            name: `None`,
            description: `Use in the studio or with your own power amp.`,
            price: 0,
          },
          {
            name: `Powered`,
            description: `Built-in 600W solid state power amp.`,
            price: 449,
          },
        ],
        meta: { layout: `column` },
      },
      {
        name: `Foot Controller`,
        options: [
          {
            name: `None`,
            description: ``,
            price: 0,
          },
          {
            name: `Profiler Remote Foot Controller`,
            description: ``,
            price: 449,
          },
        ],
        meta: { layout: `column` },
      },
    ],
  },
  specifications: [
    { name: `Amp Models`, value: 200 },
    { name: `Effects Loop`, value: `Yes` },
    { name: `Inputs`, value: `2 x 1/4”` },
    { name: `Outputs`, value: `1 x 1/4”, 2 x XLR, 2 x 1/4”` },
    { name: `MIDI I/O`, value: `In/Out/Thru` },
    { name: `Height`, value: `8.54”` },
    { name: `Width`, value: `14.88”` },
    { name: `Depth`, value: `6.81”` },
    { name: `Weight`, value: `11.73 lbs` },
  ],
};
