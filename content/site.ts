export const navigation = [
  { label: "Home", href: "#top" },
  { label: "The Book", href: "#book" },
  { label: "About the Author", href: "#author" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
] as const;

export const siteContent = {
  authorName: "Edward A. Corcoran",
  book: {
    title: "Revive the American Dream",
    // Update these lines if you want the hero title to break differently.
    heroTitleLines: ["Revive", "the American", "Dream"],
    subtitle: "",
    shortDescription:
      "A policy-minded call for a comprehensive national survey of the economic, social, and global pressures that have dimmed the American dream.",
    buyUrl:
      "https://www.barnesandnoble.com/w/revive-the-american-dream-edward-corcoran/1145837232?ean=9798895183953",
    // Amazon link currently points to a book search because a stable direct listing URL was not verified.
    amazonUrl: "https://www.amazon.com/s?k=Revive+the+American+Dream+Edward+Corcoran",
    availability: "Available in paperback",
    // Switch this to "flat" if you want the hero to use the raw cover instead of the CSS-based 3D presentation.
    heroBookMode: "mockup" as const,
    overview: [
      "Has America's beacon of freedom failed to live up to its credo? The American dream, that working hard would lead to a good life, has faded for many people who now cannot afford healthcare, housing, education, and food because they are struggling within an economic system that favors the rich.",
      "America has moved past the Cold War threats of the Soviet Union, but a reinvigorated Russia promoting autocrats globally has helped sustain an emphasis on military capabilities at the expense of economic development. The book argues that the nation now needs a comprehensive survey of its challenges, with input from citizens, to help revive the American dream."
    ],
    quote:
      "We badly need a comprehensive survey of the challenges facing the nation, assessing how to best balance resources to revive the American dream.",
    tags: [
      "Economic Policy",
      "National Renewal",
      "Public Affairs",
      "Governance",
      "American Dream"
    ]
  },
  framework: [
    {
      title: "Resilience",
      tone: "blue" as const,
      image: {
        src: "/images/framework/natural.jpg",
        alt: "Satellite view of a major hurricane system",
        className:
          "scale-[1.16] [object-position:50%_62%] sm:[object-position:50%_58%] lg:[object-position:50%_52%]"
      },
      description:
        "Healthcare, housing, education, and food access form the material basis of opportunity. When these foundations break down, the promise of upward mobility breaks with them."
    },
    {
      title: "Systems",
      tone: "amber" as const,
      image: {
        src: "/images/framework/internal.jpg",
        alt: "Critical infrastructure server room",
        className:
          "scale-[1.1] [object-position:80%_46%] sm:[object-position:78%_44%] lg:[object-position:76%_42%]"
      },
      description:
        "Political unrest, racial tension, violence, and the overdose crisis reveal deeper structural failures inside the nation and the systems meant to hold it together."
    },
    {
      title: "Global Order",
      tone: "purple" as const,
      image: {
        src: "/images/framework/external.jpg",
        alt: "Nighttime world map showing global population centers",
        className:
          "scale-[1.08] [object-position:52%_42%] sm:[object-position:50%_46%] lg:[object-position:50%_48%]"
      },
      description:
        "Foreign pressure still shapes domestic choices. The book points to renewed authoritarian influence abroad and asks how national priorities should be rebalanced at home."
    }
  ],
  author: {
    heading: "About Edward A. Corcoran",
    note:
      "No verified biography fields were supplied for publication with this site. The material below is intentionally structured as editable placeholder content and should be replaced only with confirmed facts.",
    // Editable author content: replace only with verified biography copy.
    summary:
      "Replace with a concise, verified biography for Edward A. Corcoran. This field should summarize documented professional history, publications, expertise, and current work.",
    details: [
      {
        label: "Professional background",
        value:
          "Replace with verified professional background and relevant service history."
      },
      {
        label: "Selected publications",
        value:
          "Replace with verified books, articles, essays, or policy work."
      },
      {
        label: "Current affiliation",
        value:
          "Replace with a current organization, role, or independent status."
      }
    ],
    portrait: {
      src: "/images/edward-photo.jpg",
      alt: "Portrait of Edward A. Corcoran"
    }
  },
  // Editable reviews: keep quotes and sources strictly attributed.
  reviews: [
    {
      quote: "Replace with a verified endorsement, review excerpt, or publication quote.",
      source: "Source name and attribution to be confirmed"
    },
    {
      quote: "Replace with a second attributed review once approved for publication.",
      source: "Reviewer or outlet to be confirmed"
    },
    {
      quote: "Replace with a third verified line of praise, keeping attribution precise.",
      source: "Institution or publication to be confirmed"
    }
  ],
  // Editable contact: replace with a verified public-facing address or inquiry route before launch.
  contact: {
    label: "Author Inquiries",
    value: "Replace with a public contact email",
    note: "Use this area for media, speaking, or rights inquiries.",
    href: null,
    isPlaceholder: true
  }
} as const;
