
export interface Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const QUESTIONS: Question[] = [
  // --- UNIT 1: SYSTEMATICS & TAXONOMY (20 ITEMS) ---
  {
    id: 1,
    topic: "Systematics",
    question: "Which of the following describes the analytical approach to understanding the diversity and relationships of organisms?",
    options: ["Taxonomy", "Systematics", "Ontogeny", "Phylogeny"],
    correct: 1,
    explanation: "Systematics is the broad field that includes taxonomy and phylogenetics."
  },
  {
    id: 2,
    topic: "Taxonomy",
    question: "In the binomial nomenclature system, which of the following is written correctly for a species name?",
    options: ["Homo Sapiens", "homo sapiens", "Homo sapiens (italicized)", "homo Sapiens"],
    correct: 2,
    explanation: "The genus must be capitalized, the species lowercase, and both must be italicized or underlined."
  },
  {
    id: 3,
    topic: "Systematics",
    question: "Which taxonomic level is more inclusive than 'Class' but less inclusive than 'Kingdom'?",
    options: ["Order", "Family", "Phylum", "Genus"],
    correct: 2,
    explanation: "The hierarchy is: Domain > Kingdom > Phylum > Class > Order..."
  },
  {
    id: 4,
    topic: "Taxonomy",
    question: "Who is the 'Father of Taxonomy' who developed the two-part naming system?",
    options: ["Darwin", "Linnaeus", "Wallace", "Aristotle"],
    correct: 1,
    explanation: "Carl Linnaeus developed binomial nomenclature."
  },
  {
    id: 5,
    topic: "Systematics",
    question: "Modern classification aims to group organisms primarily based on:",
    options: ["Physical appearance", "Evolutionary history", "Geographic location", "Size"],
    correct: 1,
    explanation: "Classification now focuses on phylogeny (common ancestry)."
  },
  {
    id: 6,
    topic: "Systematics",
    question: "Which of the following is NOT one of the three domains of life?",
    options: ["Archaea", "Bacteria", "Protista", "Eukarya"],
    correct: 2,
    explanation: "Protista is a kingdom within the domain Eukarya."
  },
  {
    id: 7,
    topic: "Taxonomy",
    question: "A 'Taxon' refers to:",
    options: ["A specific gene", "A named unit at any level of hierarchy", "An extinct animal", "A type of plant"],
    correct: 1,
    explanation: "A taxon can be a species, a family, or any other rank."
  },
  {
    id: 8,
    topic: "Systematics",
    question: "Molecular systematics uses which data to determine relationships?",
    options: ["Fossil depth", "DNA and Amino Acid sequences", "Bone density", "Behavioral traits"],
    correct: 1,
    explanation: "DNA sequencing is the most accurate method for modern phylogenetics."
  },
  {
    id: 9,
    topic: "Taxonomy",
    question: "Which kingdom was formerly part of 'Monera' and lacks peptidoglycan in cell walls?",
    options: ["Archaea", "Bacteria", "Fungi", "Plantae"],
    correct: 0,
    explanation: "Archaea are distinct from Bacteria in their cell wall composition."
  },
  {
    id: 10,
    topic: "Systematics",
    question: "Morphological homology refers to similarities due to:",
    options: ["Common ancestry", "Convergent evolution", "Random mutation", "Environmental pressure"],
    correct: 0,
    explanation: "Homology implies shared origin, while analogy implies shared function only."
  },
  {
    id: 11,
    topic: "Taxonomy",
    question: "The correct sequence from Genus to Domain is:",
    options: ["Genus, Family, Order, Class, Phylum, Kingdom, Domain", "Genus, Order, Family, Class, Kingdom, Phylum, Domain", "Domain, Kingdom, Phylum, Class, Order, Family, Genus", "Species, Genus, Order, Family, Phylum, Class, Domain"],
    correct: 0,
    explanation: "Starting from Genus moving up to the most inclusive level."
  },
  {
    id: 12,
    topic: "Systematics",
    question: "Analogous structures are evidence of:",
    options: ["Divergent evolution", "Convergent evolution", "Common ancestry", "Genetic drift"],
    correct: 1,
    explanation: "Unrelated species develop similar traits due to similar environments."
  },
  {
    id: 13,
    topic: "Taxonomy",
    question: "Which rank is the most specific in the Linnaean hierarchy?",
    options: ["Phylum", "Class", "Family", "Species"],
    correct: 3,
    explanation: "Species is the base level of the hierarchy."
  },
  {
    id: 14,
    topic: "Systematics",
    question: "A Phylogenetic Tree is essentially a:",
    options: ["Fact", "Hypothesis", "Law", "Observation"],
    correct: 1,
    explanation: "Trees represent the most likely hypothesis based on available data."
  },
  {
    id: 15,
    topic: "Taxonomy",
    question: "Organisms with a true nucleus belong to which Domain?",
    options: ["Bacteria", "Archaea", "Eukarya", "Monera"],
    correct: 2,
    explanation: "Eukarya includes all eukaryotes."
  },
  {
    id: 16,
    topic: "Systematics",
    question: "Which study focuses on the form and structure of organisms?",
    options: ["Morphology", "Genetics", "Physiology", "Ecology"],
    correct: 0,
    explanation: "Morphology is the study of physical form."
  },
  {
    id: 17,
    topic: "Taxonomy",
    question: "In the name 'Canis lupus', 'Canis' is the:",
    options: ["Specific epithet", "Genus", "Family", "Order"],
    correct: 1,
    explanation: "The first part of the binomial is the Genus."
  },
  {
    id: 18,
    topic: "Systematics",
    question: "Shared traits derived from a common ancestor are called:",
    options: ["Analogies", "Homologies", "Mutations", "Acquired traits"],
    correct: 1,
    explanation: "Homologies reflect evolutionary relatedness."
  },
  {
    id: 19,
    topic: "Taxonomy",
    question: "What is the primary difference between a Kingdom and a Domain?",
    options: ["Kingdoms are larger", "Domains are larger", "Domains are based on color", "Kingdoms are for plants only"],
    correct: 1,
    explanation: "Domain is the highest rank, containing one or more Kingdoms."
  },
  {
    id: 20,
    topic: "Systematics",
    question: "Phylogeny represents the branching history of:",
    options: ["Individual growth", "Cell division", "Evolutionary lineages", "Fossilization"],
    correct: 2,
    explanation: "Phylogeny tracks the history of species over time."
  },

  // --- UNIT 2: CLADISTICS (20 ITEMS) ---
  {
    id: 21,
    topic: "Cladistics",
    question: "What is a 'Clade'?",
    options: ["A group of unrelated animals", "An ancestor and all its descendants", "A group sharing analogous traits", "A single species"],
    correct: 1,
    explanation: "A clade is a monophyletic group."
  },
  {
    id: 22,
    topic: "Cladistics",
    question: "A group that contains a common ancestor but leaves out some descendants is:",
    options: ["Monophyletic", "Polyphyletic", "Paraphyletic", "A Clade"],
    correct: 2,
    explanation: "Para means 'beside' or partial; it doesn't include everyone."
  },
  {
    id: 23,
    topic: "Cladistics",
    question: "What is a 'Synapomorphy'?",
    options: ["An ancestral trait", "A shared derived trait", "A unique mutation", "An analogous trait"],
    correct: 1,
    explanation: "Synapomorphies define clades (e.g., hair for mammals)."
  },
  {
    id: 24,
    topic: "Cladistics",
    question: "The principle of Parsimony in cladistics suggests that:",
    options: ["The most complex tree is best", "The simplest tree with fewest changes is best", "DNA is better than fossils", "All traits are equal"],
    correct: 1,
    explanation: "Parsimony favors the explanation with the least amount of evolutionary events."
  },
  {
    id: 25,
    topic: "Cladistics",
    question: "A shared ancestral character is also known as a:",
    options: ["Plesiomorphy", "Apomorphy", "Autapomorphy", "Cladogram"],
    correct: 0,
    explanation: "A plesiomorphy is a trait inherited from a distant ancestor (e.g., vertebrae in birds)."
  },
  {
    id: 26,
    topic: "Cladistics",
    question: "A branching point on a cladogram is called a:",
    options: ["Root", "Node", "Tip", "Leaf"],
    correct: 1,
    explanation: "Nodes represent a common ancestor where a lineage splits."
  },
  {
    id: 27,
    topic: "Cladistics",
    question: "Sister taxa are defined as:",
    options: ["Unrelated species", "Taxa that share an immediate common ancestor", "Ancient ancestors", "Extinct species"],
    correct: 1,
    explanation: "Sister taxa are each other's closest relatives on a tree."
  },
  {
    id: 28,
    topic: "Cladistics",
    question: "An 'Outgroup' is used in cladistics to:",
    options: ["Identify the ancestor", "Differentiate ancestral vs derived traits", "Name the species", "Measure time"],
    correct: 1,
    explanation: "The outgroup provides a reference point for which traits are ancestral."
  },
  {
    id: 29,
    topic: "Cladistics",
    question: "A 'Polyphyletic' group is one that:",
    options: ["Includes the ancestor", "Includes species with different ancestors", "Is a perfect clade", "Has only one species"],
    correct: 1,
    explanation: "Polyphyletic groups are based on convergent traits, not ancestry."
  },
  {
    id: 30,
    topic: "Cladistics",
    question: "What is a 'Basal Taxon'?",
    options: ["The newest species", "A lineage that diverged early in the group's history", "The highest branch", "An outgroup"],
    correct: 1,
    explanation: "Basal taxa branch off near the root of the tree."
  },
  {
    id: 31,
    topic: "Cladistics",
    question: "A 'Cladogram' differs from a 'Phylogenetic Tree' because it:",
    options: ["Shows time", "Shows only branch order/patterns", "Uses only DNA", "Is more accurate"],
    correct: 1,
    explanation: "Cladograms show patterns of shared traits; Trees often scale for time or genetic change."
  },
  {
    id: 32,
    topic: "Cladistics",
    question: "An 'Apomorphy' is defined as:",
    options: ["An old trait", "A derived or new trait", "A fossil trait", "A shared trait"],
    correct: 1,
    explanation: "Apomorphy literally means 'away from the form' (derived)."
  },
  {
    id: 33,
    topic: "Cladistics",
    question: "Homoplasy refers to:",
    options: ["Common ancestry", "Independently evolved similar traits", "Shared derived traits", "Inbreeding"],
    correct: 1,
    explanation: "Homoplasy is another word for analogy/convergent evolution."
  },
  {
    id: 34,
    topic: "Cladistics",
    question: "Maximum Likelihood and Bayesian Inference are methods used for:",
    options: ["Dating fossils", "Building trees from DNA sequences", "Naming plants", "Hunting for fossils"],
    correct: 1,
    explanation: "These are statistical methods to find the most likely tree."
  },
  {
    id: 35,
    topic: "Cladistics",
    question: "If a group includes a common ancestor and ALL its descendants, it is:",
    options: ["Paraphyletic", "Monophyletic", "Polyphyletic", "Invalid"],
    correct: 1,
    explanation: "Mono = One; it represents a single evolutionary unit."
  },
  {
    id: 36,
    topic: "Cladistics",
    question: "Which trait is a synapomorphy for the clade 'Tetrapoda'?",
    options: ["Eyes", "Four limbs", "Backbone", "DNA"],
    correct: 1,
    explanation: "Four limbs is the derived trait that defines tetrapods."
  },
  {
    id: 37,
    topic: "Cladistics",
    question: "Cladogenesis refers to:",
    options: ["One species evolving into another without branching", "The splitting of a lineage", "Mass extinction", "Fossil formation"],
    correct: 1,
    explanation: "Cladogenesis creates diversity through branching."
  },
  {
    id: 38,
    topic: "Cladistics",
    question: "A 'Character Table' uses what to identify relationships?",
    options: ["0s and 1s representing trait presence", "Weights of animals", "Color patterns", "Geographic coordinates"],
    correct: 0,
    explanation: "Tables compare the presence or absence of shared derived characters."
  },
  {
    id: 39,
    topic: "Cladistics",
    question: "A group of distantly related taxa that lacks their most recent common ancestor is:",
    options: ["Monophyletic", "Paraphyletic", "Polyphyletic", "Synapomorphic"],
    correct: 2,
    explanation: "Polyphyletic groups are usually based on misleading similarities."
  },
  {
    id: 40,
    topic: "Cladistics",
    question: "What does the 'Root' of a phylogenetic tree represent?",
    options: ["The newest species", "The common ancestor of all taxa in the tree", "The outgroup", "An extinction event"],
    correct: 1,
    explanation: "The root is the base from which all lineages originate."
  },

  // --- UNIT 3: GEOLOGIC TIME SCALE (20 ITEMS) ---
  {
    id: 41,
    topic: "Geologic Time",
    question: "Which eon represents the time before life left a significant fossil record?",
    options: ["Phanerozoic", "Precambrian (Supereon)", "Archean", "Hadean"],
    correct: 1,
    explanation: "Precambrian covers roughly 88% of Earth's history."
  },
  {
    id: 42,
    topic: "Geologic Time",
    question: "The 'Great Oxygenation Event' was caused by:",
    options: ["Volcanic eruptions", "Cyanobacteria photosynthesis", "Meteor impacts", "Ozone layer formation"],
    correct: 1,
    explanation: "Early photosynthetic bacteria released oxygen as a waste product."
  },
  {
    id: 43,
    topic: "Geologic Time",
    question: "In which period did the 'Cambrian Explosion' occur?",
    options: ["Permian", "Triassic", "Cambrian", "Silurian"],
    correct: 2,
    explanation: "The Cambrian marks a rapid diversification of animal life."
  },
  {
    id: 44,
    topic: "Geologic Time",
    question: "The 'Age of Reptiles' refers to which Era?",
    options: ["Paleozoic", "Mesozoic", "Cenozoic", "Archean"],
    correct: 1,
    explanation: "The Mesozoic was dominated by dinosaurs and large reptiles."
  },
  {
    id: 45,
    topic: "Geologic Time",
    question: "What event marks the end of the Paleozoic Era?",
    options: ["K-Pg Extinction", "The Permian Extinction (Great Dying)", "Ice Age", "Human evolution"],
    correct: 1,
    explanation: "The Permian extinction wiped out over 90% of marine species."
  },
  {
    id: 46,
    topic: "Geologic Time",
    question: "The Cenozoic Era is known as the Age of:",
    options: ["Fish", "Mammals", "Amphibians", "Insects"],
    correct: 1,
    explanation: "The Cenozoic followed the extinction of dinosaurs and saw mammal radiation."
  },
  {
    id: 47,
    topic: "Geologic Time",
    question: "Which period is famous for vast coal-forming swamps and giant insects?",
    options: ["Devonian", "Carboniferous", "Jurassic", "Eocene"],
    correct: 1,
    explanation: "Carboniferous refers to the carbon-rich coal deposits formed then."
  },
  {
    id: 48,
    topic: "Geologic Time",
    question: "Earth is approximately how many years old?",
    options: ["4.6 million", "4.6 billion", "10,000", "100 billion"],
    correct: 1,
    explanation: "Determined through radiometric dating of meteorites and old rocks."
  },
  {
    id: 49,
    topic: "Geologic Time",
    question: "Which Era follows the Mesozoic?",
    options: ["Paleozoic", "Archean", "Cenozoic", "Proterozoic"],
    correct: 2,
    explanation: "The Cenozoic is our current era."
  },
  {
    id: 50,
    topic: "Geologic Time",
    question: "The first land plants and fungi appeared during the:",
    options: ["Hadean", "Ordovician/Silurian", "Cretaceous", "Neogene"],
    correct: 1,
    explanation: "Plants colonized land in the early-mid Paleozoic."
  },
  {
    id: 51,
    topic: "Geologic Time",
    question: "What is the correct order of time divisions from largest to smallest?",
    options: ["Period, Era, Eon, Epoch", "Eon, Era, Period, Epoch", "Epoch, Period, Era, Eon", "Era, Eon, Period, Epoch"],
    correct: 1,
    explanation: "Eons are divided into Eras, which are divided into Periods, then Epochs."
  },
  {
    id: 52,
    topic: "Geologic Time",
    question: "Which period saw the first dinosaurs and mammals?",
    options: ["Triassic", "Jurassic", "Cretaceous", "Permian"],
    correct: 0,
    explanation: "The Triassic followed the Permian extinction and birthed new lineages."
  },
  {
    id: 53,
    topic: "Geologic Time",
    question: "The 'K-Pg Boundary' represents the mass extinction of:",
    options: ["Trilobites", "Non-avian dinosaurs", "Early humans", "Giant dragonflies"],
    correct: 1,
    explanation: "The K-Pg extinction happened 66 million years ago."
  },
  {
    id: 54,
    topic: "Geologic Time",
    question: "The 'Age of Fishes' is the:",
    options: ["Cambrian", "Devonian", "Silurian", "Permian"],
    correct: 1,
    explanation: "The Devonian saw a massive diversification of fish groups."
  },
  {
    id: 55,
    topic: "Geologic Time",
    question: "Pangea formed during which Era?",
    options: ["Precambrian", "Paleozoic", "Mesozoic", "Cenozoic"],
    correct: 1,
    explanation: "The supercontinent Pangea came together in the late Paleozoic."
  },
  {
    id: 56,
    topic: "Geologic Time",
    question: "The Proterozoic Eon is significant for the first appearance of:",
    options: ["Dinosaurs", "Humans", "Eukaryotic cells", "Flowering plants"],
    correct: 2,
    explanation: "Multicellular eukaryotes appeared toward the end of the Proterozoic."
  },
  {
    id: 57,
    topic: "Geologic Time",
    question: "The earliest eon, characterized by a molten Earth, is the:",
    options: ["Archean", "Hadean", "Proterozoic", "Phanerozoic"],
    correct: 1,
    explanation: "Hadean refers to 'Hades' (hell), describing the hellish conditions."
  },
  {
    id: 58,
    topic: "Geologic Time",
    question: "Which gas was virtually absent from the early atmosphere?",
    options: ["Methane", "Ammonia", "Oxygen", "Water Vapor"],
    correct: 2,
    explanation: "Oxygen was only added later by photosynthetic organisms."
  },
  {
    id: 59,
    topic: "Geologic Time",
    question: "The first flowering plants (angiosperms) appeared in the:",
    options: ["Carboniferous", "Jurassic", "Cretaceous", "Paleogene"],
    correct: 2,
    explanation: "Angiosperms evolved and diversified during the Cretaceous."
  },
  {
    id: 60,
    topic: "Geologic Time",
    question: "The current Epoch, starting 12,000 years ago, is the:",
    options: ["Pleistocene", "Pliocene", "Holocene", "Miocene"],
    correct: 2,
    explanation: "The Holocene marks the current warm period after the last Ice Age."
  },

  // --- UNIT 4: FOSSILS (20 ITEMS) ---
  {
    id: 61,
    topic: "Fossils",
    question: "Which type of fossil is an imprint left by an organism's exterior?",
    options: ["Cast", "Mold", "Trace fossil", "Carbon film"],
    correct: 1,
    explanation: "A mold is the hollow impression left in sediment."
  },
  {
    id: 62,
    topic: "Fossils",
    question: "When minerals fill a mold and harden, it creates a:",
    options: ["Cast", "Amber", "Coprolite", "Petrifaction"],
    correct: 0,
    explanation: "A cast is a 3D replica of the organism."
  },
  {
    id: 63,
    topic: "Fossils",
    question: "Fossils that show the behavior of an organism, like footprints, are:",
    options: ["Body fossils", "Index fossils", "Trace fossils", "Microfossils"],
    correct: 2,
    explanation: "Trace fossils provide evidence of activity, not anatomy."
  },
  {
    id: 64,
    topic: "Fossils",
    question: "What are 'Coprolites'?",
    options: ["Fossilized eggs", "Fossilized feces", "Fossilized shells", "Fossilized footprints"],
    correct: 1,
    explanation: "Coprolites are trace fossils of diet and digestive behavior."
  },
  {
    id: 65,
    topic: "Fossils",
    question: "The process where minerals replace the cells of an organism is:",
    options: ["Carbonization", "Permineralization", "Mummification", "Freezing"],
    correct: 1,
    explanation: "Permineralization often occurs in petrified wood and bone."
  },
  {
    id: 66,
    topic: "Fossils",
    question: "Fossilized tree resin that can trap insects is called:",
    options: ["Sap", "Amber", "Pitch", "Coal"],
    correct: 1,
    explanation: "Amber provides exceptional preservation of soft tissues."
  },
  {
    id: 67,
    topic: "Fossils",
    question: "Relative dating relies on which principle?",
    options: ["Half-life", "Law of Superposition", "DNA analysis", "Magnetism"],
    correct: 1,
    explanation: "Older rock layers are generally found below younger ones."
  },
  {
    id: 68,
    topic: "Fossils",
    question: "Which fossils are used to define and identify geologic periods?",
    options: ["Trace fossils", "Body fossils", "Index fossils", "Microfossils"],
    correct: 2,
    explanation: "Index fossils are widespread but existed for a short time."
  },
  {
    id: 69,
    topic: "Fossils",
    question: "What is 'Taphonomy'?",
    options: ["The study of bone growth", "The study of the process of fossilization", "The study of plant evolution", "The study of cave paintings"],
    correct: 1,
    explanation: "Taphonomy tracks the transition from the biosphere to the lithosphere."
  },
  {
    id: 70,
    topic: "Fossils",
    question: "Carbon-14 dating is best used for:",
    options: ["Dating 200-million-year-old dinosaurs", "Dating recent organic material (<50,000 years)", "Dating volcanic rock", "Dating iron tools"],
    correct: 1,
    explanation: "Carbon-14 has a short half-life, limiting its range."
  },
  {
    id: 71,
    topic: "Fossils",
    question: "A thin film of carbon residue left by a plant is called:",
    options: ["Carbonization", "Recrystallization", "Mummification", "Cast"],
    correct: 0,
    explanation: "Common in leaves and delicate organisms."
  },
  {
    id: 72,
    topic: "Fossils",
    question: "Most fossils are found in which type of rock?",
    options: ["Igneous", "Sedimentary", "Metamorphic", "Magma"],
    correct: 1,
    explanation: "Sedimentary rock forms layers that can bury and protect remains."
  },
  {
    id: 73,
    topic: "Fossils",
    question: "The 'Fossil Record' is considered incomplete because:",
    options: ["Most organisms don't fossilize", "Erosion destroys rocks", "Many fossils are hidden", "All of the above"],
    correct: 3,
    explanation: "A combination of factors makes the record a partial snapshot."
  },
  {
    id: 74,
    topic: "Fossils",
    question: "Radiometric dating measures the ratio of:",
    options: ["Parent to daughter isotopes", "Carbon to Oxygen", "Rock to Soil", "Height to Width"],
    correct: 0,
    explanation: "Isotopes decay at a constant rate (half-life)."
  },
  {
    id: 75,
    topic: "Fossils",
    question: "What is an 'Unaltered' fossil?",
    options: ["Petrified wood", "Freezing in permafrost", "A plaster cast", "A fossil footprint"],
    correct: 1,
    explanation: "Unaltered fossils preserve the original material (like frozen mammoths)."
  },
  {
    id: 76,
    topic: "Fossils",
    question: "Which environment is most likely to produce fossils?",
    options: ["Desert mountain", "Shallow sea/Delta", "Tropical rainforest floor", "Active volcano"],
    correct: 1,
    explanation: "Quick burial by sediment in water is ideal."
  },
  {
    id: 77,
    topic: "Fossils",
    question: "What does 'Superposition' mean in geology?",
    options: ["Top layers are oldest", "Bottom layers are oldest", "All layers are the same age", "Middle layers are oldest"],
    correct: 1,
    explanation: "It is a fundamental principle of relative dating."
  },
  {
    id: 78,
    topic: "Fossils",
    question: "Gastroliths are trace fossils that represent:",
    options: ["Ancient nests", "Stomach stones used for digestion", "Shed skin", "Bite marks"],
    correct: 1,
    explanation: "Used by some dinosaurs and birds to grind food."
  },
  {
    id: 79,
    topic: "Fossils",
    question: "A gap in the rock sequence representing missing time is an:",
    options: ["Index", "Unconformity", "Intrusion", "Fault"],
    correct: 1,
    explanation: "Erosion or non-deposition creates gaps in the record."
  },
  {
    id: 80,
    topic: "Fossils",
    question: "Index fossils must be:",
    options: ["Rare and localized", "Abundant and widespread", "Ancient and brittle", "Only found in amber"],
    correct: 1,
    explanation: "They must be easy to find and widely distributed to be useful."
  },

  // --- UNIT 5: EVOLUTIONARY MECHANISMS (20 ITEMS) ---
  {
    id: 81,
    topic: "Evolution",
    question: "Which mechanism of evolution is non-random and driven by environmental pressure?",
    options: ["Genetic Drift", "Natural Selection", "Gene Flow", "Mutation"],
    correct: 1,
    explanation: "Natural selection favors individuals best suited to the environment."
  },
  {
    id: 82,
    topic: "Evolution",
    question: "Genetic Drift typically has the strongest effect in:",
    options: ["Large populations", "Small populations", "Populations with no predators", "Oceanic populations"],
    correct: 1,
    explanation: "Small gene pools are more susceptible to random changes."
  },
  {
    id: 83,
    topic: "Evolution",
    question: "What is the primary source of all new alleles (variation)?",
    options: ["Mutation", "Migration", "Mating", "Selection"],
    correct: 0,
    explanation: "Mutations create the raw genetic material for evolution."
  },
  {
    id: 84,
    topic: "Evolution",
    question: "The movement of genes between populations is called:",
    options: ["Genetic Drift", "Gene Flow", "Natural Selection", "Speciation"],
    correct: 1,
    explanation: "Gene flow results from migration."
  },
  {
    id: 85,
    topic: "Evolution",
    question: "Which type of selection favors the average phenotype?",
    options: ["Directional", "Disruptive", "Stabilizing", "Sexual"],
    correct: 2,
    explanation: "Stabilizing selection reduces variation (e.g., human birth weight)."
  },
  {
    id: 86,
    topic: "Evolution",
    question: "Which selection favors both extremes, potentially leading to speciation?",
    options: ["Stabilizing", "Disruptive", "Directional", "Artificial"],
    correct: 1,
    explanation: "Disruptive selection splits a population into two distinct groups."
  },
  {
    id: 87,
    topic: "Evolution",
    question: "The 'Founder Effect' is a type of:",
    options: ["Natural Selection", "Genetic Drift", "Gene Flow", "Hardy-Weinberg"],
    correct: 1,
    explanation: "Occurs when a small group colonizes a new habitat."
  },
  {
    id: 88,
    topic: "Evolution",
    question: "A 'Bottleneck Effect' occurs after:",
    options: ["A massive birth rate", "A drastic reduction in population size", "A new mutation", "High gene flow"],
    correct: 1,
    explanation: "Disasters leave few survivors, reducing genetic diversity."
  },
  {
    id: 89,
    topic: "Evolution",
    question: "Hardy-Weinberg equilibrium describes a population that:",
    options: ["Is evolving rapidly", "Is not evolving", "Has high mutations", "Is inbred"],
    correct: 1,
    explanation: "A hypothetical state where allele frequencies remain constant."
  },
  {
    id: 90,
    topic: "Evolution",
    question: "Which is NOT a requirement for Hardy-Weinberg equilibrium?",
    options: ["Random mating", "No selection", "Small population size", "No mutation"],
    correct: 2,
    explanation: "It requires a VERY LARGE population to prevent drift."
  },
  {
    id: 91,
    topic: "Evolution",
    question: "What is 'Biological Fitness'?",
    options: ["Strength and speed", "Number of surviving offspring", "Ability to find food", "Lifespan"],
    correct: 1,
    explanation: "Fitness is specifically about reproductive success."
  },
  {
    id: 92,
    topic: "Evolution",
    question: "Artificial selection is driven by:",
    options: ["Nature", "Climate change", "Human choice", "Luck"],
    correct: 2,
    explanation: "Example: Selective breeding of crops or dogs."
  },
  {
    id: 93,
    topic: "Evolution",
    question: "Vestigial structures are:",
    options: ["New traits", "Remnants of organs functional in ancestors", "Analogous structures", "Always harmful"],
    correct: 1,
    explanation: "Example: Whale pelvic bones or human tailbones."
  },
  {
    id: 94,
    topic: "Evolution",
    question: "Divergent evolution leads to:",
    options: ["Homologous structures", "Analogous structures", "No changes", "Identical DNA"],
    correct: 0,
    explanation: "Related species evolve different traits based on niches."
  },
  {
    id: 95,
    topic: "Evolution",
    question: "Sexual selection can lead to:",
    options: ["Better camouflage", "Sexual dimorphism (differences between sexes)", "More offspring for all", "Extinction"],
    correct: 1,
    explanation: "Mates choose based on specific traits (e.g., peacock tails)."
  },
  {
    id: 96,
    topic: "Evolution",
    question: "Coevolution occurs between:",
    options: ["Unrelated plants", "Species that interact closely (e.g., predator/prey)", "Two populations of the same species", "Humans and machines"],
    correct: 1,
    explanation: "Species evolve in response to each other's changes."
  },
  {
    id: 97,
    topic: "Evolution",
    question: "What is 'Speciation'?",
    options: ["Individual growth", "The process by which one species splits into two", "The death of a lineage", "A genetic mutation"],
    correct: 1,
    explanation: "Speciation creates new biological units."
  },
  {
    id: 98,
    topic: "Evolution",
    question: "Adaptation is the result of:",
    options: ["Genetic Drift", "Natural Selection", "Luck", "The will of the animal"],
    correct: 1,
    explanation: "Traits that enhance survival are selected over time."
  },
  {
    id: 99,
    topic: "Evolution",
    question: "What describes changes in allele frequency within a single population?",
    options: ["Macroevolution", "Microevolution", "Speciation", "Phylogeny"],
    correct: 1,
    explanation: "Microevolution happens on a small, fast scale."
  },
  {
    id: 100,
    topic: "Evolution",
    question: "Macroevolution refers to patterns:",
    options: ["Within a single family", "Above the species level over long periods", "In a single DNA strand", "In laboratory bacteria"],
    correct: 1,
    explanation: "Covers the origin of new groups and broad changes in the tree of life."
  }
];
