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
    title: "Revive American Dream",
    // Update these lines if you want the hero title to break differently.
    heroTitleLines: ["Revive", "American Dream"],
    subtitle: "Strategies in a New Century",
    shortDescription:
      "A strategic assessment of the evolving natural, internal, and external threats facing the United States.",
    buyUrl: "https://www.amazon.ca/dp/B00939RKOS",
    availability: "Available on Kindle",
    // Switch this to "flat" if you want the hero to use the raw cover instead of the CSS-based 3D presentation.
    heroBookMode: "mockup" as const,
    overview: [
      "Threats & Challenges examines a strategic blind spot in American statecraft: the nation has security doctrine, but no truly comprehensive method for assessing the full range of pressures shaping national resilience.",
      "Rather than treating danger only as the product of hostile actors, the book argues for a broader framework that accounts for natural disruption, internal strain, and external pressure in one integrated national view."
    ],
    quote:
      "The first requirement is a basic and comprehensive assessment of the totality of threats and challenges facing the nation.",
    tags: [
      "National Strategy",
      "Security Policy",
      "Risk Assessment",
      "Governance",
      "Modern Threats"
    ]
  },
  framework: [
    {
      title: "Natural",
      tone: "blue" as const,
      image: {
        src: "/images/framework/natural.jpg",
        alt: "Satellite view of a major hurricane system",
        className:
          "scale-[1.16] [object-position:50%_62%] sm:[object-position:50%_58%] lg:[object-position:50%_52%]"
      },
      description:
        "Disasters, environmental events, and destabilizing conditions that challenge national resilience."
    },
    {
      title: "Internal",
      tone: "amber" as const,
      image: {
        src: "/images/framework/internal.jpg",
        alt: "Critical infrastructure server room",
        className:
          "scale-[1.1] [object-position:80%_46%] sm:[object-position:78%_44%] lg:[object-position:76%_42%]"
      },
      description:
        "Domestic fractures, institutional strain, and structural vulnerabilities within the nation."
    },
    {
      title: "External",
      tone: "purple" as const,
      image: {
        src: "/images/framework/external.jpg",
        alt: "Nighttime world map showing global population centers",
        className:
          "scale-[1.08] [object-position:52%_42%] sm:[object-position:50%_46%] lg:[object-position:50%_48%]"
      },
      description:
        "Foreign pressures, geopolitical competition, and security risks beyond U.S. borders."
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
