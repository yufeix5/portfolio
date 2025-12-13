// src/data/blogs.js
export const blogs = [
  {
    slug: "beyond-rent-burden",
    title: "Beyond Rent Burden: Rethinking Urban Affordability in New York City",
    date: "Dec 12, 2025",
    tags: ["Urban Studies", "GIS", "Index Design", "Cartography"],
    excerpt:
      "Why rent burden alone fails to capture lived affordability in dense cities, and how a multi-dimensional index can change the story.",
    content: [
      "Housing affordability is most often reduced to a single metric: rent burden, typically defined as the percentage of household income spent on rent. While intuitive and easy to compute, this measure flattens the lived experience of urban residents into a single financial ratio.",

      "In reality, affordability is not just about how much people pay for housing, but also about how much time, effort, and access are required to sustain daily life. Commute length, proximity to food and services, and access to green space all shape whether a neighborhood feels livable, regardless of rent levels.",

      "This disconnect is especially pronounced in dense global cities like New York. High rent often coincides with higher incomes, robust transit access, and dense amenity networks. Conversely, neighborhoods with lower rents may impose substantial hidden costs through long commutes, limited services, or environmental disamenities.",

      "Recognizing these limitations, I developed the Total Living Burden Index (TLBI) as an alternative way to think about affordability—not as a single financial threshold, but as a multidimensional condition shaped by overlapping spatial factors.",

      "The TLBI integrates four primary components: housing cost relative to income, mobility burden measured through commute time, access to food retail, and access to parks and open space. Together, these variables aim to capture both economic pressure and everyday friction experienced by residents.",

      "To enable meaningful comparison across variables with different units and distributions, each component is normalized using quantile scaling. This approach prioritizes relative position rather than absolute values, reducing the influence of extreme outliers and making spatial patterns easier to interpret.",

      "Importantly, variables that reduce burden—such as food access and park availability—are reverse-scaled so that higher index values consistently represent higher living burden. This design choice keeps the index conceptually coherent and visually legible.",

      "Rather than treating the index as a fixed ranking, the TLBI is intentionally sensitive to weighting. Users can adjust the relative importance of economic pressure, mobility, and amenities to explore how different priorities produce different spatial outcomes.",

      "When the index is visualized under equal weighting, a counterintuitive pattern emerges. Several high-rent neighborhoods in Manhattan appear as relatively low-burden areas once income levels, transit accessibility, and amenity density are taken into account.",

      "At the same time, many neighborhoods in Brooklyn, Queens, and the Bronx experience high total living burden due to the compounding effects of moderate rent pressure, long commute times, limited food access, and scarce green space.",

      "These results do not suggest that Manhattan is affordable in a conventional sense. Instead, they highlight how high housing costs can be offset—though not eliminated—by advantages in time, access, and proximity that are unevenly distributed across the city.",

      "One of the most important insights from this project is that livability is not universal. When commute time is weighted more heavily, outer-borough neighborhoods become significantly more burdened. When rent pressure dominates, income-constrained areas rise to the top. When environmental access is emphasized, new forms of spatial inequality come into focus.",

      "This sensitivity underscores a key point: there is no single, objective affordability map. Different households experience the city differently, and affordability shifts depending on what people value, need, or are willing to trade off.",

      "The TLBI is therefore best understood not as a definitive score, but as a diagnostic framework. It helps reveal where multiple disadvantages overlap and challenges simplified narratives that rely solely on housing cost.",

      "From a cartographic perspective, this project reinforced the importance of restraint and clarity. The map design emphasizes muted colors, consistent scaling, and minimal visual noise, allowing users to focus on comparison rather than spectacle.",

      "Ultimately, addressing urban affordability requires more than rent control alone. Investments in transportation, neighborhood services, and environmental amenities are equally critical to reducing everyday burden.",

      "By reframing affordability as a spatially distributed, multidimensional condition, the TLBI offers one way to think more carefully about what it actually means to live well in a city like New York."
    ],
    relatedProject: "tlbi-nyc"
  },

  {
    slug: "data-engineering-at-the-un",
    title: "Building Data Pipelines at the United Nations: Reflections from a Summer Internship",
    date: "Aug 30, 2025",
    tags: ["Data Engineering", "GIS", "United Nations", "Data Pipelines"],
    excerpt:
      "Reflections on working as a data engineering intern at the United Nations, building analytical pipelines and GIS-enabled products for real-world decision-making.",
    content: [
      "During the summer of 2025, I spent four months working as a data engineering intern at the United Nations. I joined a team whose work sat at the intersection of data infrastructure, analytics, and geospatial products—supporting internal decision-making rather than public-facing storytelling.",

      "Unlike academic projects or classroom exercises, the data systems I encountered at the UN were already deeply embedded in operational workflows. Pipelines were not built to demonstrate technical elegance, but to be reliable, interpretable, and maintainable under real institutional constraints.",
      
      "My primary responsibility involved designing and maintaining data pipelines that aggregated, cleaned, and standardized data from multiple sources. These sources varied widely in format, temporal resolution, and reliability, requiring careful validation and explicit handling of uncertainty. Although my role was formally categorized as data engineering, much of the work naturally extended into GIS pipelines. Many datasets had spatial dimensions: administrative boundaries, country-level indicators, or event locations. And meaningful analysis required consistent spatial frameworks. This meant translating raw tabular data into spatially aware datasets, aligning indicators across administrative levels, and ensuring that geographic assumptions were documented rather than implicitly encoded in code.",

      "One of the most striking differences from academic GIS work was the emphasis on reproducibility and institutional memory. Pipelines were expected to be understandable not just to current team members, but to analysts and developers who might inherit them months or years later.",

      "As a result, design decisions often prioritized clarity over optimization. Explicit schemas, verbose documentation, and modular processing steps were valued more than compact but opaque solutions.",

      "Beyond data pipelines, I also contributed to the development of GIS-enabled analytical products. These products were designed for internal users—analysts and decision-makers—rather than for public audiences. This shifted the design focus away from visual flourish and toward clarity, comparability, and trust. In practice, this meant carefully controlling classification schemes, documenting data limitations directly within products, and avoiding visual encodings that could be misinterpreted under uncertainty.",

      "Working in this environment fundamentally changed how I think about geospatial visualization. Maps were not endpoints; they were interfaces into broader analytical systems. A map that looked compelling but obscured assumptions was considered a liability rather than an asset.",

      "Another key lesson from this internship was the importance of cross-disciplinary communication. Data engineering decisions often had downstream implications for policy analysis, reporting, and operational planning. Small changes in data definitions could significantly alter interpretation. As an intern, I frequently collaborated with analysts from different disciplinary backgrounds. This required translating technical constraints into non-technical language, and just as importantly, understanding the analytical questions driving data requests. The institutional context of the United Nations also shaped the work in important ways. Data pipelines had to accommodate incomplete data, geopolitical sensitivities, and uneven reporting standards across regions. Rather than treating these issues as technical failures, the team approached them as inherent characteristics of global data. The goal was not to eliminate uncertainty, but to make it visible and manageable.",

      "From a personal perspective, this experience reinforced my interest in working at the intersection of data engineering and GIS. I became particularly interested in how spatial pipelines can support decision-making without overstating precision or certainty. The internship also highlighted the value of calm, restrained design in high-stakes analytical environments. Whether in code, data structures, or visual products, simplicity often enabled trust more effectively than complexity. Ultimately, these four months at the UN reshaped how I understand data work. Data engineering is not only about moving and transforming data—it is about building systems that respect uncertainty, support interpretation, and align technical decisions with real-world consequences."
    ]
  }
];

