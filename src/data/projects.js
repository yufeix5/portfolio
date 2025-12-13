// src/data/projects.js

// ---- image imports (from src/assets/img/...) ----
import alps1 from "../assets/img/Alps/Alps-1.jpg";

import queer1 from "../assets/img/queer/queer-1.jpg";

import tlbi1 from "../assets/img/TLBI/TLBI-1.jpg";
import tlbi2 from "../assets/img/TLBI/TLBI-2.jpg";

import vgi1 from "../assets/img/vgi/vgi-1.jpg";
import vgi2 from "../assets/img/vgi/vgi-2.jpg";

import waCascades from "../assets/img/Washington_cascade_mountains.jpg";
import africaMap from "../assets/img/africa_map.jpg";
import usLibrary from "../assets/img/US_library_visit.jpg";
import chinaWestEthnic from "../assets/img/china_west_ethinic.jpg";

import storymapCover from "../assets/img/storymap.jpg";

import ukiyoInspo from "../assets/img/custom-map-style/Inspiration_board.jpg";
import ukiyoStyle from "../assets/img/custom-map-style/map-style.png";

// ---- projects ----
export const projects = [
  {
    slug: "alpine-ridgeline",
    title: "Alpine Ridgeline Joyplot Visualization",
    year: "2025",
    type: "Web Map",
    role: "Designer & Developer",
    description:
      "An experimental ridgeline/joyplot-style terrain visualization inspired by print cartography aesthetics.",
    cover: alps1,
    featured: true,
    images: [alps1],
    links: [
      {
        label: "Live Demo",
        url: "https://yufeix5.github.io/ridgeline_alps_demo/"
      }
    ],
    tools: ["Mapbox GL JS", "Terrain / DEM visualization"],
    writeup: `
      This project explores ridgeline (joyplot) techniques as a cartographic form for communicating terrain structure at a glance.
      The goal is to balance aesthetic impact with legibility, using simplified layers and careful visual hierarchy to emphasize elevation patterns.

      I designed and implemented the interactive visualization and refined styling choices to keep the map readable while maintaining a print-inspired look.
    `
  },

  {
    slug: "tlbi-nyc",
    title: "NYC Total Living Burden Index (TLBI)",
    year: "2025",
    type: "Web Map",
    role: "Designer & Developer",
    description:
      "An interactive index integrating housing, transportation, and income to measure urban living burden across NYC neighborhoods.",
    cover: tlbi1,
    featured: true,
    images: [tlbi1, tlbi2],
    links: [
      {
        label: "Interactive Map",
        url: "https://yufeix5.github.io/TLBI/"
      }
    ],
    tools: ["React", "Mapbox GL JS", "Index design"],
    writeup: `
      Rent burden alone can oversimplify lived affordability in a dense city like New York.
      This project introduces a Total Living Burden Index (TLBI) that integrates multiple dimensions—housing pressure, mobility constraints, and income context—to better reflect everyday trade-offs.

      The interactive map enables neighborhood comparison and supports exploration of patterns that can appear counterintuitive when considering rent in isolation.
      I designed the index logic, implemented the web map interface, and iterated on visual scaling to communicate differences clearly.
    `
  },
  // ---- StoryMap ----
  {
    slug: "h1b-visa-dilemma-storymap",
    title: "The H-1B Visa Dilemma",
    year: "2025",
    type: "StoryMap",
    role: "Cartographer & Author",
    description:
      "A narrative StoryMap using maps and data to clarify where H-1B workers are concentrated and how visa policy shifts affect higher education, research, and innovation.",
    cover: storymapCover,
    featured: false,
    images: [storymapCover],
    links: [
      {
        label: "View StoryMap",
        url: "https://storymaps.arcgis.com/stories/35a5f13cc85e4bb5baaf20a8a6ab5462"
      }
    ],
    tools: ["ArcGIS StoryMaps", "Narrative cartography"],
    writeup: `
      Since late 2024, the path for international professionals in the United States, particularly those on
      the H-1B visa, has grown increasingly uncertain. New federal directives, political rhetoric, and
      abrupt policy shifts have reshaped the landscape of work and migration. What was once framed as
      a bridge for global talent is now frequently portrayed as a threat, a bargaining chip, or a symbol in
      campaign messaging.
      As an international student who hopes to contribute meaningfully to the academic and professional
      communities in this country, I have watched these changes with a mixture of confusion, frustration,
      and concern. Many public discussions overlook the reality that H-1B policies do not only affect
      corporate hiring; they profoundly impact universities, hospitals, research labs, and the entire
      knowledge ecosystem that depends on global scholarship. Much of the recent political anger does
      not fall on those who exploited loopholes, it instead lands on researchers, early-career scholars, and
      foreign graduates who have played by the rules.
      This project was created to bring clarity to a topic that is often obscured by emotion and
      misrepresentation. Through maps, data, and narrative, I sought to illustrate where H-1B workers
      truly are, what roles they fill, and how policy changes reverberate across both the innovation
      economy and higher education. The design emphasizes calmness and readability: muted colors,
      simple basemaps, and a linear narrative flow that guides the reader one idea at a time. My aim was
      not to persuade, but to illuminate.
      May the future of global talent and international scholarship be shaped by understanding rather
      than fear, and by thoughtful policy rather than political theater.
    `
  },

  // ---- Custom Mapbox style ----
  {
    slug: "ukiyoe-mapbox-custom-style",
    title: "Ukiyo-e Inspired Mapbox Custom Style",
    year: "2025",
    type: "Cartographic Style Study",
    role: "Designer",
    description:
      "A custom Mapbox basemap style inspired by Ukiyo-e woodblock prints, developed through iterative design and an inspiration board.",
    cover: ukiyoStyle,
    featured: false,
    images: [ukiyoInspo, ukiyoStyle],
    links: [{
        label: "Design Showcase",
        url: "https://yufeix5.github.io/scrollmap/"
      }],
    tools: ["Mapbox Studio", "Style specification", "Cartographic design"],
    writeup: `
This project experiments with basemap styling as a form of cartographic storytelling.
Using Ukiyo-e woodblock prints as visual references, I built an inspiration board and iteratively designed a Mapbox Studio style that emphasizes texture, restrained palettes, and clear hierarchy.

The goal was to maintain usability for mapping while translating an illustrative aesthetic into a functional basemap system.
`
  },

  {
    slug: "shifting-queer-space",
    title: "Shifting Queer Space in the United States",
    year: "2022",
    type: "Collaborative Project", 
    role: "Web Cartographer, Data Analyst",
    lab: "Humanistic GIS Lab, University of Washington",
    description:
      "An interactive hexagon-based visualization showing the spatial and temporal shifts of LGBTQ+ friendly spaces in the U.S.",
    cover: queer1,
    featured: false,
    images: [queer1],
    links: [
      {
        label: "Github Repo",
        url: "https://github.com/jakobzhao/shiftingqueerspace"
      }
    ],
    tools: ["deck.gl", "Mapbox", "QGIS"],
    writeup: `
      Queer spaces such as gay bars, resorts, and LGBTQ-friendly venues play a critical role in community building and visibility.
      Recent discussions suggest a nationwide decline in such spaces, yet quantitative geographic evidence remains limited.

      This project visualizes changes in queer space distribution across the United States from 2000 to 2019 using hexagonal aggregation.
      Users can interactively explore different years through a slider and line chart, revealing both regional concentration and decline patterns.

      I worked on web cartography and data analysis, including preprocessing spatial data, structuring hexagon bins, and supporting the interactive visualization workflow.
    `
  },

  {
    slug: "lgbtq-space-vgi-platform",
    title: "Nationwide LGBTQ+ Spaces Database & VGI Web Map Platform",
    year: "2022-2023",
    type: "Collaborative Project",
    role: "Front-end Developer (primary)",
    lab: "Humanistic GIS Lab, University of Washington",
    description:
      "A collaborative WebGIS platform documenting LGBTQ+ spaces across the U.S. over five decades, combining historical travel guides with user-contributed corrections and additions.",
    cover: vgi1,
    featured: false,
    images: [vgi1, vgi2],
    links: [
      // 如果你有公开链接就填；没有也没关系先留空
      // { label: "Project Page", url: "..." }
    ],
    tools: ["Mapbox", "PostgreSQL", "Node.js", "QGIS", "OpenStreetMap"],
    writeup: `
      This project builds an expandable nationwide database of LGBTQ+ spaces and places in the United States, spanning from the mid-1960s through the mid-2010s.
      A primary data source is the Damron travel guides, complemented by user-contributed submissions via an interactive geospatial platform.

      The platform supports searching, filtering, visualizing, and contributing venue information while emphasizing openness, inclusivity, and privacy-preserving participation.
      I primarily contributed to the front-end development, implementing user-facing map interfaces and interaction flows that support exploration and data contribution.

      Limitations are important: historical sources can be partial and inconsistent, and automated matching across years (e.g., name/address similarity thresholds) is imperfect.
      The project encourages cautious interpretation and transparent handling of uncertainty.
    `
  },

  // ---- Static cartography ----
  {
    slug: "us-library-visits-per-capita",
    title: "U.S. Library Visits per Capita (by State)",
    year: "2024",
    type: "Static Cartography",
    role: "Cartographer",
    description:
      "A choropleth map showing library visits per capita by state, designed for clarity and comparability.",
    cover: usLibrary,
    featured: false,
    images: [usLibrary],
    links: [
      {
        label: "View PDF (Hi-res)",
        url: "/file/US_library_visit.pdf"
      }
    ],
    tools: ["Thematic mapping", "Color & legend design"],
    writeup: `
      A choropleth map exploring differences in library engagement across U.S. states.
      The design focuses on legibility, appropriate classification, and a clean legend to support comparison.
    `
  },

  {
    slug: "western-china-ethnic-autonomy",
    title: "Mapping Western China Through Ethnic Autonomy",
    year: "2025",
    type: "Static Cartography",
    role: "Cartographer",
    description:
      "A thematic map examining ethnic autonomous regions in western China, emphasizing political geography and visual hierarchy.",
    cover: chinaWestEthnic,
    featured: true,
    images: [chinaWestEthnic],
    links: [
      {
        label: "View PDF (Hi-res)",
        url: "/file/china_west_ethinic.pdf"
      }
    ],
    tools: ["Thematic cartography", "Visual hierarchy"],
    writeup: `
      A thematic map focused on representing ethnic autonomous regions through careful symbolization and hierarchy.
      The project emphasizes clear thematic communication while maintaining geographic context.
    `
  },
    {
    slug: "major-cities-of-africa",
    title: "Major Cities of Africa",
    year: "2025",
    type: "Static Cartography",
    role: "Cartographer",
    description:
      "A reference-style thematic map highlighting major African cities with careful label placement and regional context.",
    cover: africaMap,
    featured: false,
    images: [africaMap],
    links: [
      {
        label: "View PDF (Hi-res)",
        url: "/file/africa_map.pdf"
      }
    ],
    tools: ["Cartographic design", "Labeling & annotation"],
    writeup: `
      A reference-focused map emphasizing clear labeling, symbol hierarchy, and balanced regional context.
      The goal was to communicate major urban centers without overwhelming the reader with clutter.
    `
  },
  {
    slug: "washington-cascades-mountains",
    title: "Washington Cascades: Mountains & Landscape",
    year: "2025",
    type: "Static Cartography",
    role: "Cartographer",
    description:
      "A static map emphasizing terrain structure and regional context through visual hierarchy and typographic choices.",
    cover: waCascades,
    featured: false,
    images: [waCascades],
    links: [
      {
        label: "View PDF (Hi-res)",
        url: "/file/Washington_cascade_mountains.pdf"
      }
    ],
    tools: ["ArcGIS Pro / QGIS", "Cartographic design"],
    writeup: `
      A static cartographic study focused on terrain hierarchy, labeling, and balanced composition.
      The design prioritizes readability and a clean visual structure while highlighting key mountain and landscape features.
    `
  },

];
