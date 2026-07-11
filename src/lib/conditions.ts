export interface Condition {
  slug: string;
  name: string;
  category: string;
  summary: string;
  overview: string;
  benefits: string[];
}

export const conditionCategories = [
  {
    key: "pediatric-neurology",
    title: "Pediatric Neurology",
    icon: "🧠",
    description: "Neural regeneration protocols for developing minds.",
  },
  {
    key: "neurology",
    title: "Neurology",
    icon: "⚡",
    description: "Immunomodulatory therapy for adult neurological conditions.",
  },
  {
    key: "orthopedics",
    title: "Orthopedics",
    icon: "🦴",
    description: "Cartilage, joint and soft-tissue regeneration.",
  },
  {
    key: "anti-aging",
    title: "Anti-Aging",
    icon: "✨",
    description: "Systemic cellular renewal and dermal restoration.",
  },
  {
    key: "reproductive-health",
    title: "Reproductive Health",
    icon: "❤️",
    description: "Restoring fertility and sexual health at the cellular level.",
  },
  {
    key: "eye-diseases",
    title: "Eye Diseases",
    icon: "👁",
    description: "Neuroprotective strategies for retinal disorders.",
  },
] as const;

export const conditions: Condition[] = [
  {
    slug: "autism",
    name: "Autism",
    category: "pediatric-neurology",
    summary: "Improving communication, focus and behavior in children on the spectrum.",
    overview:
      "Mesenchymal stem cells modulate neuroinflammation and enhance blood flow to affected brain regions, supporting measurable improvements in cognition, communication and social engagement in children with autism spectrum disorder.",
    benefits: [
      "Reduction of neuroinflammation",
      "Improved social interaction",
      "Better sleep and behavioral regulation",
      "Support for speech and language progress",
    ],
  },
  {
    slug: "cerebral-palsy",
    name: "Cerebral Palsy",
    category: "pediatric-neurology",
    summary: "Enhancing motor control and cognition through neural repair.",
    overview:
      "Stem cell therapy targets damaged neural pathways and reduces spasticity, supporting improvements in motor function, muscle tone and cognitive engagement in children with cerebral palsy.",
    benefits: [
      "Improved motor coordination",
      "Reduced muscle spasticity",
      "Cognitive and speech improvements",
      "Enhanced quality of life",
    ],
  },
  {
    slug: "developmental-delay",
    name: "Developmental Delay",
    category: "pediatric-neurology",
    summary: "Supporting milestones in speech, motor skills and cognition.",
    overview:
      "For children with global developmental delay, cellular therapy supports neuroplasticity and helps close gaps across motor, language and social milestones alongside structured rehabilitation.",
    benefits: [
      "Faster milestone progression",
      "Improved attention and learning",
      "Speech and language advancement",
      "Motor skill refinement",
    ],
  },
  {
    slug: "multiple-sclerosis",
    name: "Multiple Sclerosis",
    category: "neurology",
    summary: "Slowing disease progression and supporting myelin repair.",
    overview:
      "Autologous stem cell therapy addresses the autoimmune demyelination underlying MS, reducing inflammatory attacks and supporting remyelination for restored nerve conduction.",
    benefits: [
      "Reduced relapse frequency",
      "Slower disease progression",
      "Improved mobility and balance",
      "Less fatigue and cognitive fog",
    ],
  },
  {
    slug: "arthritis",
    name: "Arthritis",
    category: "orthopedics",
    summary: "Regenerating cartilage and calming joint inflammation.",
    overview:
      "Intra-articular delivery of stem cells stimulates cartilage repair and dampens inflammatory signaling in osteoarthritic and rheumatoid joints, offering a regenerative alternative to joint replacement.",
    benefits: [
      "Cartilage regeneration",
      "Reduced pain and stiffness",
      "Improved range of motion",
      "Delay or avoidance of surgery",
    ],
  },
  {
    slug: "sports-injury",
    name: "Sports Injury",
    category: "orthopedics",
    summary: "Accelerated recovery for tendons, ligaments and joints.",
    overview:
      "Precision-guided cellular injections speed the repair of overuse injuries and acute tears, returning athletes to peak performance faster with lower risk of chronic pain.",
    benefits: [
      "Faster tissue healing",
      "Reduced downtime",
      "Improved joint stability",
      "Lower re-injury risk",
    ],
  },
  {
    slug: "skin-recovery",
    name: "Skin Recovery",
    category: "anti-aging",
    summary: "Restoring skin health after damage, sun exposure or treatment.",
    overview:
      "Growth-factor rich stem cell protocols accelerate skin turnover, improve texture and repair barrier function after aggressive cosmetic procedures or environmental damage.",
    benefits: [
      "Improved skin barrier",
      "Even tone and texture",
      "Faster recovery after treatments",
      "Reduced sensitivity",
    ],
  },
  {
    slug: "scar-regeneration",
    name: "Scar Regeneration",
    category: "anti-aging",
    summary: "Reducing the appearance of surgical, acne and traumatic scars.",
    overview:
      "Localized stem cell therapy remodels scar tissue, improving elasticity and pigmentation for a smoother, less visible finish across surgical, acne and burn scars.",
    benefits: [
      "Softer scar texture",
      "Improved elasticity",
      "Reduced hyperpigmentation",
      "Better cosmetic outcome",
    ],
  },
  {
    slug: "pigmentation-repair",
    name: "Pigmentation Repair",
    category: "anti-aging",
    summary: "Correcting melasma, sun spots and post-inflammatory pigment.",
    overview:
      "Cellular protocols regulate melanocyte activity and support even pigment distribution, addressing melasma, sun damage and post-inflammatory hyperpigmentation.",
    benefits: [
      "Even skin tone",
      "Reduction of melasma",
      "Brighter complexion",
      "Long-lasting results",
    ],
  },
  {
    slug: "wrinkle-reduction",
    name: "Wrinkle Reduction",
    category: "anti-aging",
    summary: "Stimulating collagen for firmer, more youthful skin.",
    overview:
      "Stem cell derived growth factors reawaken fibroblasts, boosting collagen and elastin production to smooth fine lines and improve skin firmness naturally.",
    benefits: [
      "Boosted collagen production",
      "Reduced fine lines",
      "Firmer skin",
      "Natural, gradual improvement",
    ],
  },
  {
    slug: "psoriasis",
    name: "Psoriasis",
    category: "anti-aging",
    summary: "Calming autoimmune skin inflammation from within.",
    overview:
      "Systemic stem cell therapy addresses the immune dysregulation behind psoriasis, reducing plaque frequency and severity while supporting healthier skin turnover.",
    benefits: [
      "Reduced plaque formation",
      "Less itching and discomfort",
      "Longer remission periods",
      "Improved skin appearance",
    ],
  },
  {
    slug: "menopause",
    name: "Menopause",
    category: "anti-aging",
    summary: "Balancing hormones and easing menopausal symptoms.",
    overview:
      "Cellular therapy supports ovarian and endocrine function, easing hot flashes, mood shifts and sleep disturbances while promoting long-term hormonal balance.",
    benefits: [
      "Reduced hot flashes",
      "Better sleep quality",
      "Mood stabilization",
      "Improved energy and libido",
    ],
  },
  {
    slug: "longevity",
    name: "Longevity",
    category: "anti-aging",
    summary: "Systemic cellular renewal to extend healthspan.",
    overview:
      "Preventive stem cell therapy targets biological senescence — enhancing immune function, cognitive clarity and physical vitality for a longer, healthier life.",
    benefits: [
      "Reduced cellular senescence",
      "Sharper cognition",
      "Stronger immune function",
      "Sustained energy and vitality",
    ],
  },
  {
    slug: "male-infertility",
    name: "Male Infertility",
    category: "reproductive-health",
    summary: "Improving sperm quality and reproductive potential.",
    overview:
      "Stem cell therapy supports testicular function, improving sperm count, motility and morphology in men with idiopathic or age-related fertility challenges.",
    benefits: [
      "Higher sperm count",
      "Improved motility",
      "Better morphology",
      "Enhanced hormonal profile",
    ],
  },
  {
    slug: "female-infertility",
    name: "Female Infertility",
    category: "reproductive-health",
    summary: "Restoring ovarian function and uterine receptivity.",
    overview:
      "Cellular therapy enhances follicular environment, improves ovarian reserve response and supports endometrial receptivity for women pursuing natural conception or IVF.",
    benefits: [
      "Improved ovarian response",
      "Enhanced endometrial thickness",
      "Support for IVF outcomes",
      "Hormonal balance",
    ],
  },
  {
    slug: "erectile-dysfunction",
    name: "Erectile Dysfunction",
    category: "reproductive-health",
    summary: "Restoring vascular and nerve function for sustained results.",
    overview:
      "Regenerative injections restore penile microvasculature and nerve function, offering a durable, drug-free improvement for men with vasculogenic or age-related ED.",
    benefits: [
      "Improved erectile function",
      "Better vascular health",
      "Long-lasting outcomes",
      "No daily medication",
    ],
  },
  {
    slug: "glaucoma",
    name: "Glaucoma",
    category: "eye-diseases",
    summary: "Protecting the optic nerve and preserving vision.",
    overview:
      "Neuroprotective stem cell strategies focus on the regeneration of retinal ganglion cells, aiming to slow vision loss and support optic nerve health in glaucoma patients.",
    benefits: [
      "Optic nerve protection",
      "Preserved visual field",
      "Reduced intraocular stress",
      "Slower disease progression",
    ],
  },
  {
    slug: "retinitis",
    name: "Retinitis",
    category: "eye-diseases",
    summary: "Supporting photoreceptor health in retinal disease.",
    overview:
      "Targeted cellular therapy delivers trophic support to failing photoreceptors and retinal cells, helping to slow degenerative retinal conditions such as retinitis pigmentosa.",
    benefits: [
      "Photoreceptor support",
      "Slower vision decline",
      "Improved low-light vision",
      "Long-term retinal health",
    ],
  },
];

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}

export function conditionsByCategory(key: string): Condition[] {
  return conditions.filter((c) => c.category === key);
}
