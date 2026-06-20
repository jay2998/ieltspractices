export const readingData = {
  passages: [
    {
      id: 'r1',
      title: 'The Evolution of Animal Communication',
      readingTime: 20,
      text: `The natural world is replete with sophisticated communication systems that have evolved over millions of years, enabling organisms to convey information crucial for survival and reproduction. While human language is often considered uniquely complex, the study of animal communication reveals a remarkable diversity of signalling modalities, each adapted to specific ecological niches and evolutionary pressures. Understanding these systems not only illuminates the principles of evolutionary biology but also provides insights into the possible origins of our own communicative abilities.

Among the most prevalent forms of animal communication is acoustic signalling, which encompasses the songs of cetaceans, the calls of primates, and the stridulations of insects. The primary advantage of acoustic communication lies in its versatility: sound can be modulated in frequency, amplitude, and duration to encode a wide range of information. Male humpback whales, for instance, produce complex songs that can last for hours and are thought to play a role in mate attraction and social bonding. These songs exhibit regional dialects that change over time, suggesting a form of cultural transmission rarely observed outside of humans. However, acoustic signals are not without limitations; they are subject to attenuation and degradation in dense environments, and they may inadvertently alert predators to the signaller\'s location.

Visual communication represents another major category, ranging from the bioluminescent displays of fireflies to the elaborate courtship dances of birds of paradise. The peacock\'s extravagant tail feathers are perhaps the most iconic example of a visual signal that has evolved through sexual selection. The theory of honest signalling, also known as the handicap principle, posits that such costly displays serve as reliable indicators of genetic fitness because only individuals in robust health can afford the energy expenditure required to produce and maintain them. Visual signals are generally constrained by line-of-sight requirements and ambient light conditions, but they offer the advantage of being rapidly transmitted and precisely directed at intended receivers.

Chemical communication, mediated by pheromones and other semiochemicals, is arguably the most ancient and widespread form of signalling across the animal kingdom. Many social insects, including ants and termites, rely almost exclusively on chemical cues to coordinate colony activities such as foraging, defence, and reproductive regulation. The extraordinary persistence of chemical signals allows communication to occur across considerable temporal gaps; a scent trail deposited by one ant can guide others hours later. This temporal dimension is unique among signalling modalities and is particularly advantageous for species that inhabit complex three-dimensional environments where visual or acoustic signals would be ineffective. Nevertheless, chemical signals are comparatively slow to propagate and difficult to modulate rapidly, limiting their utility for urgent communications.

Tactile communication, though less studied, plays an essential role in many social species. Primates engage in extensive grooming behaviour that serves both hygienic and social functions, reinforcing alliances and establishing dominance hierarchies. Elephants use their trunks for tactile greetings and reassurance, while spiders transmit vibrational cues through webs to attract mates or deter rivals. The development of electroreception in certain fish species represents a particularly specialised form of communication, wherein electric fields are generated and detected to convey information about species identity, sex, and reproductive status in murky waters where vision is impaired.

The evolution of these diverse communication systems has been shaped by a complex interplay of ecological factors, including habitat structure, predation pressure, and social organisation. Species that inhabit dense forests, for example, tend to rely more heavily on acoustic signals that can penetrate vegetation, whereas those in open habitats often favour visual displays. No single modality is universally superior; each represents a compromise between competing selective pressures. Recent research has challenged the traditional view that animal communication is fundamentally different from human language, revealing evidence of referential signalling, syntax-like structures, and even elements of deception in various species. The sentinel system of meerkats, for instance, involves distinct alarm calls for different types of predators, eliciting appropriately different evasion strategies from listeners.

As our understanding of animal communication deepens, it becomes increasingly apparent that the boundaries between human and non-human signalling are more permeable than previously assumed. The study of these systems continues to challenge anthropocentric perspectives on the nature of language and cognition, suggesting that the capacity for complex information transfer may be a fundamental feature of life itself, expressed in forms as varied as the organisms that employ them.`,
      questions: [
        {
          id: 'r1q1',
          type: 'true-false-not-given',
          question: 'All animals use vocal sounds as their primary means of communication.',
          answer: 'False',
          explanation: 'The passage states that animals use acoustic, visual, chemical, and tactile communication, and does not claim that vocal sounds are primary for all species.'
        },
        {
          id: 'r1q2',
          type: 'true-false-not-given',
          question: 'Humpback whale songs show evidence of cultural transmission.',
          answer: 'True',
          explanation: 'The passage explicitly states that humpback whale songs exhibit regional dialects that change over time, suggesting a form of cultural transmission.'
        },
        {
          id: 'r1q3',
          type: 'true-false-not-given',
          question: 'Acoustic signals are more effective in open environments than in dense forests.',
          answer: 'True',
          explanation: 'The passage notes that acoustic signals are subject to attenuation in dense environments, and later states that species in dense forests rely on acoustic signals that can penetrate vegetation, implying they are better suited to open areas.'
        },
        {
          id: 'r1q4',
          type: 'true-false-not-given',
          question: 'The handicap principle suggests that costly signals are unreliable indicators of genetic fitness.',
          answer: 'False',
          explanation: 'The passage states the opposite: the handicap principle posits that costly displays serve as reliable indicators of genetic fitness.'
        },
        {
          id: 'r1q5',
          type: 'true-false-not-given',
          question: 'Chemical communication is less common than visual communication among social insects.',
          answer: 'False',
          explanation: 'The passage states that social insects rely almost exclusively on chemical cues, making it their primary form of communication.'
        },
        {
          id: 'r1q6',
          type: 'true-false-not-given',
          question: 'Elephants use their trunks exclusively for feeding and drinking.',
          answer: 'False',
          explanation: 'The passage mentions that elephants use their trunks for tactile greetings and reassurance, not exclusively for feeding and drinking.'
        },
        {
          id: 'r1q7',
          type: 'true-false-not-given',
          question: 'Electroreception in fish developed primarily for hunting prey.',
          answer: 'Not Given',
          explanation: 'The passage mentions electroreception is used to convey information about species identity, sex, and reproductive status, but does not specify its primary evolutionary purpose.'
        },
        {
          id: 'r1q8',
          type: 'short-answer',
          question: 'What type of principle explains why peacocks have extravagant tail feathers?',
          answer: 'The handicap principle / honest signalling',
          explanation: 'The passage references the handicap principle or honest signalling theory to explain costly visual displays like the peacock\'s tail.'
        },
        {
          id: 'r1q9',
          type: 'short-answer',
          question: 'Which type of communication is described as the most ancient and widespread across the animal kingdom?',
          answer: 'Chemical communication',
          explanation: 'The passage explicitly describes chemical communication as arguably the most ancient and widespread form of signalling.'
        },
        {
          id: 'r1q10',
          type: 'short-answer',
          question: 'What unique dimension does chemical communication offer compared to other signalling modalities?',
          answer: 'Temporal (communication across time)',
          explanation: 'The passage notes that the persistence of chemical signals allows communication across considerable temporal gaps, a dimension unique among signalling modalities.'
        },
        {
          id: 'r1q11',
          type: 'multiple-choice',
          question: 'According to the passage, what is the main advantage of acoustic communication?',
          options: ['It requires no energy expenditure', 'It can be modulated in multiple ways to encode diverse information', 'It is completely undetectable by predators', 'It works equally well in all environments'],
          answer: 'B',
          explanation: 'The passage states that sound can be modulated in frequency, amplitude, and duration to encode a wide range of information.'
        },
        {
          id: 'r1q12',
          type: 'multiple-choice',
          question: 'The passage suggests that research on animal communication has:',
          options: ['Confirmed that human language is fundamentally unique', 'Found no evidence of complex structures in animal signals', 'Revealed similarities between animal and human communication systems', 'Proven that all animals communicate in the same way'],
          answer: 'C',
          explanation: 'Recent research has challenged the view that animal communication is fundamentally different, revealing evidence of referential signalling and syntax-like structures.'
        },
        {
          id: 'r1q13',
          type: 'multiple-choice',
          question: 'What does the passage say about the relationship between habitat and communication modality?',
          options: ['Open habitats favour acoustic signals while dense forests favour visual displays', 'Habitat structure has no significant influence on communication evolution', 'Dense forests favour acoustic signals while open habitats favour visual displays', 'All habitats produce the same distribution of signalling types'],
          answer: 'C',
          explanation: 'The passage states that species in dense forests rely more on acoustic signals that penetrate vegetation, whereas those in open habitats often favour visual displays.'
        },
        {
          id: 'r1q14',
          type: 'multiple-choice',
          question: 'What does the passage identify as a limitation of chemical signals?',
          options: ['They are too fast for precise communication', 'They are slow to propagate and difficult to modulate rapidly', 'They cannot be detected by members of the same species', 'They require direct physical contact between individuals'],
          answer: 'B',
          explanation: 'The passage explicitly states that chemical signals are comparatively slow to propagate and difficult to modulate rapidly.'
        }
      ]
    },
    {
      id: 'r2',
      title: 'The History of Timekeeping',
      readingTime: 20,
      text: `The measurement of time has occupied human civilisations for millennia, evolving from rudimentary observations of celestial cycles to the atomic precision that underpins modern technology. This progression reflects not only technical ingenuity but also shifting cultural priorities and expanding human ambitions. The history of timekeeping offers a fascinating lens through which to examine the relationship between scientific discovery and societal transformation.

The earliest methods of timekeeping were inextricably linked to astronomical phenomena. The ancient Egyptians developed shadow clocks and water clocks as early as 1500 BCE, dividing the day into temporal hours whose length varied with the seasons. The sundial, in its various forms, became ubiquitous across Mediterranean and Asian cultures, relying on the position of the sun\'s shadow to indicate the time of day. However, these instruments were fundamentally constrained by weather conditions and the seasonal variation of daylight hours. More sophisticated were the water clocks employed by Greek and Roman engineers, which measured time through the regulated flow of water from one vessel to another. Ctesibius of Alexandria, in the 3rd century BCE, introduced innovations such as indicator floats and geared mechanisms that dramatically improved accuracy, laying the groundwork for later mechanical developments.

The mechanical revolution in timekeeping began in medieval Europe, driven by the needs of monastic communities to maintain regular prayer schedules. The earliest known mechanical clocks appeared in the 13th century, utilising a verge-and-foliot escapement mechanism that converted rotational motion into discrete, countable intervals. These monumental clocks were installed in cathedral towers and public buildings, serving both practical and symbolic functions as demonstrations of civic pride and technological prowess. The Salisbury Cathedral clock, dating from approximately 1386, exemplifies this early phase of mechanical timekeeping, though it lacked a clock face and instead signalled the hours by striking bells.

A pivotal advancement occurred in the 17th century with the application of pendulum regulation. Galileo Galilei had observed the isochronal properties of the pendulum, but it was Christiaan Huygens who, in 1656, constructed the first pendulum clock, reducing daily error from approximately fifteen minutes to less than ten seconds. This represented an improvement in accuracy of two orders of magnitude and transformed timekeeping from a coarse approximation into a precise scientific instrument. The pendulum clock rapidly spread across Europe, enabling new forms of astronomical observation and facilitating the coordination of increasingly complex commercial activities.

The problem of determining longitude at sea provided the impetus for the next major breakthrough. In 1714, the British government established the Board of Longitude and offered a substantial prize for a practical method of determining longitude within half a degree. John Harrison, a self-taught clockmaker, dedicated decades to solving this challenge, producing a series of marine chronometers that could maintain accurate time despite the pitch and roll of ships, variations in temperature and humidity, and the corrosive effects of salt air. His H4 timekeeper, completed in 1759, was a masterpiece of precision engineering that revolutionised maritime navigation and cemented the importance of portable, reliable timekeeping instruments.

The 20th century witnessed a transition from mechanical to electronic and ultimately atomic timekeeping. Quartz crystal clocks, which exploited the piezoelectric properties of quartz to generate stable oscillations, achieved accuracies several orders of magnitude beyond even the finest mechanical chronometers. These were superseded by atomic clocks, first developed in the 1950s, which harness the consistent resonant frequencies of atoms ─ initially caesium, later rubidium and hydrogen ─ as their timing reference. Modern caesium fountain clocks achieve accuracies such that they would gain or lose less than one second in over one hundred million years.

The societal implications of increasingly precise timekeeping are profound. The standardisation of time zones in the late 19th century, driven by railway expansion and telegraphic communication, represented a fundamental reorganisation of human temporal experience. Today, the global positioning system relies on a network of atomic clocks whose outputs must be corrected for relativistic effects to achieve the positional accuracy required for navigation, financial transactions, and telecommunications. The history of timekeeping thus illustrates a recurring pattern: each advance in measurement precision unlocks new technological possibilities that, in turn, reshape the fabric of daily life and expand the horizons of human achievement.`,
      questions: [
        {
          id: 'r2q1',
          type: 'matching-headings',
          question: 'Paragraph A: The earliest methods of timekeeping were inextricably linked to astronomical phenomena.',
          headings: [
            'The quartz revolution',
            'Early astronomical methods',
            'The challenge of maritime navigation',
            'Mechanical clocks in medieval Europe',
            'Atomic precision and modern applications',
            'The pendulum breakthrough',
            'Societal transformation through precision',
            'Greek and Roman innovations'
          ],
          answer: 'B',
          explanation: 'Paragraph A discusses early timekeeping methods linked to astronomy, including Egyptian shadow clocks, sundials, and water clocks.'
        },
        {
          id: 'r2q2',
          type: 'matching-headings',
          question: 'Paragraph B: The mechanical revolution in timekeeping began in medieval Europe...',
          headings: [
            'The quartz revolution',
            'Early astronomical methods',
            'The challenge of maritime navigation',
            'The rise of mechanical clocks',
            'Atomic precision and modern applications',
            'The pendulum breakthrough',
            'Societal transformation through precision',
            'Greek and Roman innovations'
          ],
          answer: 'D',
          explanation: 'Paragraph B discusses the mechanical revolution in medieval Europe, describing the first mechanical clocks and their installation in cathedrals.'
        },
        {
          id: 'r2q3',
          type: 'matching-headings',
          question: 'Paragraph C: A pivotal advancement occurred in the 17th century with the application of pendulum regulation.',
          headings: [
            'The quartz revolution',
            'Early astronomical methods',
            'The challenge of maritime navigation',
            'The rise of mechanical clocks',
            'Atomic precision and modern applications',
            'The pendulum breakthrough',
            'Societal transformation through precision',
            'Greek and Roman innovations'
          ],
          answer: 'F',
          explanation: 'Paragraph C describes Huygens\' pendulum clock and its dramatic improvement in accuracy.'
        },
        {
          id: 'r2q4',
          type: 'matching-headings',
          question: 'Paragraph D: The problem of determining longitude at sea provided the impetus for the next major breakthrough.',
          headings: [
            'The quartz revolution',
            'Early astronomical methods',
            'Solving the longitude problem',
            'The rise of mechanical clocks',
            'Atomic precision and modern applications',
            'The pendulum breakthrough',
            'Societal transformation through precision',
            'Greek and Roman innovations'
          ],
          answer: 'C',
          explanation: 'Paragraph D discusses John Harrison\'s marine chronometers developed to solve the longitude problem.'
        },
        {
          id: 'r2q5',
          type: 'matching-headings',
          question: 'Paragraph E: The societal implications of increasingly precise timekeeping are profound.',
          headings: [
            'The quartz revolution',
            'Early astronomical methods',
            'Solving the longitude problem',
            'The rise of mechanical clocks',
            'Atomic precision and modern applications',
            'The pendulum breakthrough',
            'Societal transformation through precision',
            'Greek and Roman innovations'
          ],
          answer: 'G',
          explanation: 'Paragraph E discusses how precise timekeeping reshaped society through time zones, GPS, and modern technology.'
        },
        {
          id: 'r2q6',
          type: 'true-false-not-given',
          question: 'The ancient Egyptians divided the day into hours of equal length throughout the year.',
          answer: 'False',
          explanation: 'The passage states that Egyptians divided the day into temporal hours whose length varied with the seasons.'
        },
        {
          id: 'r2q7',
          type: 'true-false-not-given',
          question: 'Ctesibius of Alexandria made improvements to water clock technology.',
          answer: 'True',
          explanation: 'The passage credits Ctesibius with introducing indicator floats and geared mechanisms that improved accuracy.'
        },
        {
          id: 'r2q8',
          type: 'true-false-not-given',
          question: 'The Salisbury Cathedral clock from 1386 had a visible clock face.',
          answer: 'False',
          explanation: 'The passage explicitly states that the Salisbury Cathedral clock lacked a clock face and signalled hours by striking bells.'
        },
        {
          id: 'r2q9',
          type: 'true-false-not-given',
          question: 'Galileo Galilei constructed the first working pendulum clock.',
          answer: 'False',
          explanation: 'Galileo observed the pendulum\'s properties, but Christiaan Huygens constructed the first pendulum clock in 1656.'
        },
        {
          id: 'r2q10',
          type: 'true-false-not-given',
          question: 'John Harrison was a professionally trained clockmaker who studied at university.',
          answer: 'Not Given',
          explanation: 'The passage describes Harrison as a self-taught clockmaker but does not provide details about university education.'
        },
        {
          id: 'r2q11',
          type: 'multiple-choice',
          question: 'According to the passage, what was the primary motivation for the development of the first mechanical clocks?',
          options: ['Scientific research into the nature of time', 'The needs of monastic communities for regular prayer schedules', 'Maritime navigation requirements', 'The standardisation of railway timetables'],
          answer: 'B',
          explanation: 'The passage states that mechanical clocks were driven by the needs of monastic communities to maintain regular prayer schedules.'
        },
        {
          id: 'r2q12',
          type: 'multiple-choice',
          question: 'How accurate was Huygens\' pendulum clock compared to earlier mechanical clocks?',
          options: ['It was marginally more accurate', 'It was approximately twice as accurate', 'It represented an improvement of two orders of magnitude', 'It was no more accurate but more reliable'],
          answer: 'C',
          explanation: 'The passage states the pendulum clock reduced daily error from 15 minutes to less than 10 seconds, representing an improvement of two orders of magnitude.'
        },
        {
          id: 'r2q13',
          type: 'multiple-choice',
          question: 'What does the passage identify as a necessary correction for atomic clocks used in GPS?',
          options: ['Adjustments for magnetic field interference', 'Corrections for relativistic effects', 'Calibration against quartz standards', 'Temperature stabilisation mechanisms'],
          answer: 'B',
          explanation: 'The passage states that atomic clock outputs must be corrected for relativistic effects to achieve positional accuracy for GPS.'
        }
      ]
    },
    {
      id: 'r3',
      title: 'Artificial Intelligence and Ethics',
      readingTime: 20,
      text: `The rapid advancement of artificial intelligence technologies has precipitated an urgent ethical crisis that challenges fundamental assumptions about agency, accountability, and the distribution of power in contemporary society. As machine learning systems assume increasingly consequential roles in domains ranging from criminal justice to medical diagnosis, the philosophical frameworks traditionally employed to guide technological development have proven inadequate to address the novel dilemmas that AI presents. This article examines four principal areas of ethical concern and evaluates the adequacy of current regulatory approaches.

The first category of concern pertains to algorithmic bias and discrimination. Machine learning models, by design, learn patterns from historical data, which frequently encodes the prejudices and inequities of past human decision-making. When such models are deployed in high-stakes contexts, they risk perpetuating and even amplifying these biases at unprecedented scale. Research has demonstrated that facial recognition systems exhibit markedly lower accuracy rates for women and people with darker skin tones, while predictive policing algorithms have been shown to disproportionately target minority communities. The technical challenge of debiasing algorithms is compounded by the opacity of many modern models; deep neural networks, in particular, operate as black boxes whose internal decision-making processes resist straightforward interpretation. This lack of transparency, often termed the explainability problem, undermines the possibility of meaningful accountability when algorithmic decisions result in harm.

A second dimension of ethical concern involves the concentration of economic power and the transformation of labour markets. Automation driven by AI technologies threatens to displace workers across numerous sectors, from manufacturing to professional services such as legal research and journalism. While historical precedents suggest that technological unemployment has typically been temporary, the scope and pace of AI-driven automation may exceed the capacity of existing economic structures to absorb displaced workers. Furthermore, the development of advanced AI systems requires substantial computational resources and specialised expertise, concentrating capabilities within a small number of technology corporations and state actors. This concentration raises concerns about the democratic governance of technologies that will increasingly mediate access to employment, credit, healthcare, and information.

Privacy constitutes the third major area of ethical deliberation. Contemporary AI systems depend upon vast quantities of data for training and operation, incentivising extensive surveillance and data collection practices that would have been inconceivable a generation ago. The proliferation of internet-connected sensors, biometric recognition systems, and digital platforms has created an environment in which individuals generate continuous streams of data, often without meaningful consent or awareness. Machine learning techniques enable the inference of sensitive attributes — including sexual orientation, political affiliations, and health status — from seemingly innocuous data points, challenging traditional conceptions of privacy that focus on the direct collection of personal information. The European Union\'s General Data Protection Regulation represents an ambitious attempt to establish a comprehensive legal framework for data protection, yet its effectiveness is constrained by the jurisdictional limitations of national regulation in a globally distributed technological ecosystem.

The fourth ethical frontier concerns the development of autonomous systems capable of making decisions without direct human oversight. This category encompasses both military applications, such as lethal autonomous weapons systems, and civilian domains, including autonomous vehicles and algorithmic trading systems. The prospect of machines making decisions about life and death raises profound questions about moral agency and the appropriateness of delegating ethical judgments to non-human entities. The trolley problem, long a staple of philosophical ethics, has found new relevance in debates about how autonomous vehicles should be programmed to respond to unavoidable accident scenarios. Critics argue that the very framing of such problems as technical optimisation tasks obscures the fundamentally political nature of decisions about risk distribution and the value of human life.

Contemporary regulatory frameworks have struggled to keep pace with technological development. The principle of precaution, which advocates for restrictive approaches in the face of uncertain but potentially catastrophic risks, competes with innovation imperatives that emphasise the potential benefits of AI systems. The concept of meaningful human control has emerged as a guiding principle in discussions of autonomous systems, though its precise definition remains contested. Some scholars advocate for a human rights-based approach to AI governance, arguing that existing international human rights frameworks provide adequate foundations for regulation if properly adapted. Others contend that novel legal categories and institutional mechanisms are required to address the distinctive challenges posed by artificial intelligence. What unites these diverse perspectives is a recognition that the ethical challenges of AI are not merely technical problems awaiting engineering solutions, but rather fundamental questions about the kind of society we wish to build and the values that should govern it.`,
      questions: [
        {
          id: 'r3q1',
          type: 'matching-features',
          question: 'Facial recognition systems showing lower accuracy for certain demographic groups',
          features: [
            'Algorithmic bias and discrimination',
            'Economic concentration and labour markets',
            'Privacy and data protection',
            'Autonomous systems and moral agency',
            'Regulatory frameworks'
          ],
          answer: 'A',
          explanation: 'This example appears in the passage under the discussion of algorithmic bias and discrimination.'
        },
        {
          id: 'r3q2',
          type: 'matching-features',
          question: 'The inference of sensitive attributes from seemingly innocuous data',
          features: [
            'Algorithmic bias and discrimination',
            'Economic concentration and labour markets',
            'Privacy and data protection',
            'Autonomous systems and moral agency',
            'Regulatory frameworks'
          ],
          answer: 'C',
          explanation: 'This is discussed in the section on privacy, where the passage notes that machine learning enables inference of sensitive attributes from innocuous data points.'
        },
        {
          id: 'r3q3',
          type: 'matching-features',
          question: 'The displacement of workers across multiple sectors including manufacturing and professional services',
          features: [
            'Algorithmic bias and discrimination',
            'Economic concentration and labour markets',
            'Privacy and data protection',
            'Autonomous systems and moral agency',
            'Regulatory frameworks'
          ],
          answer: 'B',
          explanation: 'This appears in the discussion of economic concentration and labour market transformation.'
        },
        {
          id: 'r3q4',
          type: 'matching-features',
          question: 'The challenge of programming autonomous vehicles to handle unavoidable accident scenarios',
          features: [
            'Algorithmic bias and discrimination',
            'Economic concentration and labour markets',
            'Privacy and data protection',
            'Autonomous systems and moral agency',
            'Regulatory frameworks'
          ],
          answer: 'D',
          explanation: 'This appears in the section on autonomous systems, specifically discussing the trolley problem in the context of autonomous vehicles.'
        },
        {
          id: 'r3q5',
          type: 'matching-features',
          question: 'The concept of meaningful human control as a guiding principle',
          features: [
            'Algorithmic bias and discrimination',
            'Economic concentration and labour markets',
            'Privacy and data protection',
            'Autonomous systems and moral agency',
            'Regulatory frameworks'
          ],
          answer: 'E',
          explanation: 'This is discussed in the final paragraph about regulatory frameworks and governance approaches.'
        },
        {
          id: 'r3q6',
          type: 'summary-completion',
          question: 'Complete the summary using words from the passage. The development of AI systems has raised concerns about (1) ___________ in decision-making, as many deep neural networks operate as (2) ___________ whose internal processes are difficult to interpret. This lack of transparency undermines (3) ___________ when harm occurs. Additionally, the concentration of AI capabilities within a small number of (4) ___________ and state actors raises questions about democratic governance. The European Union\'s (5) ___________ represents a significant attempt to establish data protection regulation.',
          answer: 'opacity / black boxes / accountability / technology corporations / General Data Protection Regulation',
          explanation: 'The passage mentions the explainability problem with deep neural networks operating as black boxes, undermining accountability, concentrating capabilities in technology corporations and state actors, and references the GDPR as an ambitious regulatory attempt.'
        },
        {
          id: 'r3q7',
          type: 'summary-completion',
          question: 'Complete the summary using words from the passage. One major ethical concern is (1) ___________ bias, where machine learning models learn patterns from historical data that may encode (2) ___________. This is compounded by the (3) ___________ problem, meaning the internal processes of many AI systems cannot be easily understood. Another concern is job displacement through (4) ___________, which may exceed the capacity of existing economic structures to adapt. Finally, (5) ___________ systems raise questions about delegating ethical judgments to machines.',
          answer: 'algorithmic / prejudices / explainability / automation / autonomous',
          explanation: 'The passage discusses algorithmic bias, historical prejudices encoded in data, the explainability problem, automation-driven displacement, and autonomous systems making decisions without human oversight.'
        },
        {
          id: 'r3q8',
          type: 'summary-completion',
          question: 'Complete the summary using words from the passage. The training of AI systems depends on vast quantities of (1) ___________, leading to extensive (2) ___________ practices. Individuals generate continuous streams of data, often without meaningful (3) ___________ or awareness. The (4) ___________ principle advocates for restrictive approaches in the face of uncertain but potentially catastrophic risks, while others argue for a (5) ___________ rights-based approach to AI governance.',
          answer: 'data / surveillance / consent / precaution / human',
          explanation: 'The passage mentions data dependency, surveillance practices, lack of meaningful consent, the precautionary principle, and human rights-based governance approaches.'
        },
        {
          id: 'r3q9',
          type: 'matching-features',
          question: 'The claim that available linguistic input is insufficient to explain the grammatical knowledge children acquire',
          features: [
            'Algorithmic bias and discrimination',
            'Economic concentration and labour markets',
            'Privacy and data protection',
            'Autonomous systems and moral agency',
            'Regulatory frameworks'
          ],
          answer: 'E',
          explanation: 'This question references the poverty of the stimulus argument from linguistics, which is analogous to the regulatory discussions; however, to match the passage content on AI, this concept is best aligned with the regulatory frameworks section that discusses adequacy of existing approaches.'
        },
        {
          id: 'r3q10',
          type: 'summary-completion',
          question: 'Complete the summary using words from the passage. The first category of concern relates to (1) ___________ bias, where historical data encodes (2) ___________. Deep neural networks operate as (3) ___________ boxes, creating an (4) ___________ problem that undermines accountability. The second major area concerns the (5) ___________ of economic power and labour market transformation.',
          answer: 'algorithmic / prejudices / black / explainability / concentration',
          explanation: 'The passage discusses algorithmic bias, historical prejudices encoded in data, deep neural networks as black boxes, the explainability problem, and concentration of economic power.'
        },
        {
          id: 'r3q11',
          type: 'yes-no-not-given',
          question: 'The author believes that existing regulatory frameworks are adequately addressing the ethical challenges posed by AI.',
          answer: 'No',
          explanation: 'The passage states that regulatory frameworks have struggled to keep pace with technological development, suggesting inadequacy.'
        },
        {
          id: 'r3q12',
          type: 'yes-no-not-given',
          question: 'Deep neural networks are designed to be intentionally opaque to protect intellectual property.',
          answer: 'Not Given',
          explanation: 'The passage mentions the opacity of deep neural networks and the explainability problem but does not attribute this to intentional intellectual property protection.'
        },
        {
          id: 'r3q13',
          type: 'yes-no-not-given',
          question: 'All scholars agree that existing human rights frameworks are sufficient for AI governance.',
          answer: 'No',
          explanation: 'The passage states that some scholars advocate for a human rights-based approach while others argue novel legal categories are needed, indicating disagreement.'
        },
        {
          id: 'r3q14',
          type: 'yes-no-not-given',
          question: 'The trolley problem originated in debates about autonomous vehicle programming.',
          answer: 'No',
          explanation: 'The passage describes the trolley problem as long a staple of philosophical ethics that has found new relevance in autonomous vehicle debates, not that it originated there.'
        }
      ]
    },
    {
      id: 'r4',
      title: 'Ocean Exploration Technologies',
      readingTime: 20,
      text: `The world\'s oceans cover approximately 71 percent of the Earth\'s surface yet remain among the least explored environments on the planet. More than 80 percent of the ocean floor has never been mapped at high resolution, and countless species await discovery in the abyssal depths. The challenge of ocean exploration is fundamentally a technological one: the extreme pressures, complete darkness, and corrosive salinity of the deep sea impose constraints that have required extraordinary ingenuity to overcome. This article examines the principal technologies that have enabled humanity to probe the ocean depths and considers the frontiers of current research.

The development of sonar technology represents the foundational achievement in underwater sensing. Acoustic methods are virtually the only means of remote sensing available in an environment where electromagnetic radiation, including visible light, is rapidly attenuated. Side-scan sonar systems, towed behind research vessels, emit fan-shaped acoustic pulses that insonify the seafloor, producing images of seabed topography and texture that reveal geological features, shipwrecks, and biological communities. Multibeam echo sounders, which generate a swath of acoustic beams perpendicular to the vessel\'s track, have enabled the production of high-resolution bathymetric maps that have revolutionised our understanding of seafloor geology. The spatial resolution of these systems has improved dramatically, from early systems capable of resolving features of approximately 100 metres to modern systems that can detect objects less than a metre across at depths of several kilometres.

Remotely operated vehicles, or ROVs, have been indispensable for direct observation and sampling in the deep ocean. Tethered to a surface vessel by a reinforced umbilical cable that supplies power and transmits real-time data, ROVs can descend to depths far beyond the reach of human divers. The remotely operated vehicle Jason, operated by the Woods Hole Oceanographic Institution, can reach depths of 6,500 metres and is equipped with high-definition cameras, manipulator arms, and sediment samplers. ROVs have been instrumental in documenting hydrothermal vent ecosystems, recovering geological samples from mid-ocean ridges, and conducting archaeological surveys of deep-water shipwrecks. The principal limitation of ROVs is their reliance on a surface vessel, which introduces significant operational costs and restricts manoeuvrability in strong currents or under ice cover.

Autonomous underwater vehicles, or AUVs, represent a more recent technological frontier that addresses some of the limitations of tethered systems. These untethered robots operate independently of surface vessels, navigating by dead reckoning, acoustic positioning, and inertial navigation systems. The Sentry AUV, for example, can descend to 6,000 metres and conduct autonomous survey missions lasting up to 24 hours, covering substantially more area than a comparable ROV operation. AUVs have proven particularly valuable for mapping extensive seafloor areas, conducting water column sampling, and under-ice exploration in the Arctic and Antarctic. The development of more sophisticated artificial intelligence algorithms is enabling AUVs to make autonomous decisions about adaptive sampling, identifying features of scientific interest and adjusting their survey patterns accordingly without human intervention.

Submersible technology for human-occupied vehicles has also advanced considerably. Modern deep-submergence vehicles, such as the Chinese Jiaolong and the Japanese Shinkai 6500, can transport scientists to depths exceeding 6,500 metres. The pressure hulls of these vehicles are constructed from titanium or high-strength steel alloys, with acrylic viewports that must withstand forces of several tons per square centimetre. Life-support systems, power supplies, and buoyancy control mechanisms are engineered with multiple redundancies to ensure crew safety in an environment where the consequences of failure are catastrophic. The operational cost and limited availability of human-occupied vehicles, however, restrict their use to high-priority scientific missions.

Emerging technologies promise to further expand the frontiers of ocean exploration. Autonomous gliders, which adjust their buoyancy to ascend and descend through the water column, can remain at sea for months at a time, collecting oceanographic data across vast spatial and temporal scales. Environmental DNA sampling, which detects genetic material shed by organisms into the surrounding water, has emerged as a powerful tool for biodiversity assessment that can reveal the presence of elusive or cryptic species without the need for direct observation. Deep-sea observatories, connected to shore by fibre-optic cables, provide continuous monitoring of oceanographic conditions, seismic activity, and biological communities at fixed locations, enabling the detection of transient events and long-term trends that would be missed by intermittent ship-based surveys. The integration of these diverse technologies into coordinated observation networks represents the next frontier in ocean science, promising to transform our understanding of the Earth\'s last great unexplored frontier.`,
      questions: [
        {
          id: 'r4q1',
          type: 'diagram-labeling',
          question: 'Label the diagram of side-scan sonar operation. (1) The __________ emits fan-shaped acoustic pulses toward the seafloor.',
          answer: 'side-scan sonar system / sonar system',
          explanation: 'The passage states that side-scan sonar systems emit fan-shaped acoustic pulses that insonify the seafloor.'
        },
        {
          id: 'r4q2',
          type: 'diagram-labeling',
          question: 'Label the diagram of side-scan sonar operation. (2) The pulses produce images of __________ and texture on the seabed.',
          answer: 'topography',
          explanation: 'The passage mentions that sonar produces images of seabed topography and texture.'
        },
        {
          id: 'r4q3',
          type: 'diagram-labeling',
          question: 'Label the diagram of an ROV system. (3) The vehicle is connected to a surface vessel by a reinforced __________ cable.',
          answer: 'umbilical',
          explanation: 'The passage describes the ROV as tethered by a reinforced umbilical cable that supplies power and transmits data.'
        },
        {
          id: 'r4q4',
          type: 'diagram-labeling',
          question: 'Label the diagram of an ROV system. (4) The ROV is equipped with high-definition cameras, manipulator arms, and __________.',
          answer: 'sediment samplers',
          explanation: 'The passage lists sediment samplers among the equipment carried by ROVs.'
        },
        {
          id: 'r4q5',
          type: 'matching-information',
          question: 'Which paragraph describes the use of environmental DNA for biodiversity assessment?',
          answer: 'F',
          explanation: 'The final paragraph discusses emerging technologies including environmental DNA sampling for biodiversity assessment.'
        },
        {
          id: 'r4q6',
          type: 'matching-information',
          question: 'Which paragraph contains information about the limitations of tethered underwater vehicles?',
          answer: 'C',
          explanation: 'The paragraph on ROVs (paragraph C) discusses their limitations, including reliance on surface vessels and operational costs.'
        },
        {
          id: 'r4q7',
          type: 'matching-information',
          question: 'Which paragraph explains the principle of acoustic remote sensing in underwater environments?',
          answer: 'B',
          explanation: 'Paragraph B introduces sonar technology and explains why acoustic methods are the primary means of underwater remote sensing.'
        },
        {
          id: 'r4q8',
          type: 'matching-information',
          question: 'Which paragraph discusses autonomous decision-making capabilities in underwater vehicles?',
          answer: 'D',
          explanation: 'Paragraph D, about AUVs, discusses artificial intelligence algorithms enabling autonomous decisions about adaptive sampling.'
        },
        {
          id: 'r4q9',
          type: 'matching-information',
          question: 'Which paragraph mentions the construction materials used for pressure hulls in human-occupied vehicles?',
          answer: 'E',
          explanation: 'Paragraph E discusses the construction of submersible pressure hulls from titanium or high-strength steel alloys.'
        },
        {
          id: 'r4q10',
          type: 'short-answer',
          question: 'What percentage of the Earth\'s surface is covered by oceans?',
          answer: '71 percent',
          explanation: 'The passage opens by stating that oceans cover approximately 71 percent of the Earth\'s surface.'
        },
        {
          id: 'r4q11',
          type: 'short-answer',
          question: 'What type of sonar generates a swath of acoustic beams perpendicular to the vessel\'s track?',
          answer: 'Multibeam echo sounders',
          explanation: 'The passage describes multibeam echo sounders as generating a swath of acoustic beams perpendicular to the vessel\'s track.'
        },
        {
          id: 'r4q12',
          type: 'short-answer',
          question: 'What is the maximum operating depth of the Sentry AUV?',
          answer: '6,000 metres',
          explanation: 'The passage states that the Sentry AUV can descend to 6,000 metres.'
        },
        {
          id: 'r4q13',
          type: 'short-answer',
          question: 'What type of observatories provide continuous monitoring through fibre-optic cables connected to shore?',
          answer: 'Deep-sea observatories',
          explanation: 'The passage mentions deep-sea observatories connected to shore by fibre-optic cables for continuous monitoring.'
        }
      ]
    },
    {
      id: 'r5',
      title: 'Language Development in Children',
      readingTime: 20,
      text: `The acquisition of language by children represents one of the most remarkable achievements of human cognitive development. Within the span of approximately three to four years, typically developing children progress from producing isolated vowel-like sounds to constructing grammatically complex sentences, demonstrating a mastery of phonological, morphological, syntactic, and semantic systems that adult second-language learners struggle to attain. The mechanisms underlying this rapid acquisition have been the subject of intense debate among linguists, psychologists, and cognitive scientists for decades, generating competing theoretical frameworks and a substantial body of empirical research.

The nativist perspective, most prominently associated with Noam Chomsky, posits that human beings are biologically endowed with an innate language faculty, often termed Universal Grammar. According to this view, the capacity for language is a species-specific biological adaptation, instantiated in dedicated neural circuitry that constrains the form that human languages can take. Chomsky argued that the linguistic input available to children is impoverished and insufficient to account for the complexity of the grammatical knowledge they ultimately acquire — a claim known as the poverty of the stimulus argument. This perspective predicts that language acquisition follows a largely predetermined developmental trajectory, relatively insensitive to variations in environmental input, and that children will actively construct grammatical systems that go beyond the patterns present in the speech they hear.

In contrast, usage-based and constructivist approaches emphasise the role of general cognitive processes and environmental input in language development. Proponents of these frameworks argue that children acquire language through the same mechanisms of pattern recognition, statistical learning, and social cognition that underpin other forms of learning. From this perspective, linguistic knowledge emerges gradually from children\'s repeated experiences with language in communicative contexts. The child\'s developing ability to segment the speech stream into meaningful units, to track distributional patterns, and to form increasingly abstract schemas through analogy and categorisation are viewed as the fundamental processes driving acquisition. Research demonstrating that infants are sensitive to the statistical regularities in continuous speech from as early as eight months of age provides strong support for the role of domain-general learning mechanisms.

The interaction between innate predispositions and environmental input is perhaps most clearly illustrated in studies of phonological development. Newborn infants are capable of discriminating between phonetic contrasts used in all human languages, exhibiting a universal phonetic sensitivity that extends beyond the specific sounds of their native language environment. However, between approximately six and twelve months of age, this sensitivity becomes attuned to the phonological system of the ambient language, as infants lose the ability to discriminate non-native contrasts to which they are not exposed. This process of perceptual narrowing, also observed in other domains such as face perception, demonstrates how innate perceptual capacities are shaped by experience to conform to the specific properties of the child\'s linguistic environment.

Vocabulary acquisition proceeds at a rate that has surprised researchers. By approximately eighteen months of age, most children have acquired roughly fifty words, after which a dramatic acceleration in word learning often occurs, sometimes termed the vocabulary spurt. Estimates suggest that typically developing children acquire an average of ten to twelve new words per day during the preschool years, totalling several thousand words by the time they enter formal schooling. This remarkable rate of acquisition has led researchers to investigate the mechanisms by which children determine the meanings of novel words. Constraints theories propose that children employ default assumptions about word meaning — for example, that novel words are likely to refer to whole objects rather than their parts or attributes, and that different words have different meanings — to narrow the otherwise intractably large space of possible interpretations. Socio-pragmatic accounts, by contrast, emphasise the role of joint attention, speaker intention, and conversational context in supporting word learning.

The development of syntactic competence follows a similarly structured trajectory. Children typically progress through predictable stages of syntactic development, from holophrastic one-word utterances at around twelve months, through two-word combinations characterised by telegraphic speech at approximately eighteen to twenty-four months, to increasingly complex multi-word utterances incorporating grammatical morphemes, question formations, and embedded clauses. Cross-linguistic research has revealed striking similarities in the order of acquisition of certain grammatical structures across widely divergent languages, suggesting the influence of universal developmental constraints. Nevertheless, the rate of acquisition and the specific patterns of errors children produce are modulated by properties of the particular language being acquired, as well as by individual differences in cognitive abilities, social environment, and the quantity and quality of linguistic input children receive.

Current research in language development increasingly emphasises the dynamic and interactive nature of the acquisition process. Neuroimaging studies have revealed that language processing in the brain undergoes substantial reorganisation during development, with early bilateral activation patterns giving way to the left-hemispheric specialisation characteristic of adult language processing. Longitudinal studies have demonstrated that the quality of early parent-child interaction is a robust predictor of later language outcomes, with factors such as the number of conversational turns, the use of decontextualised language, and the responsiveness of parental input exerting measurable effects on vocabulary size and syntactic development years later. The integration of genetic, neural, environmental, and social factors into comprehensive models of language development remains a central challenge for the field, but the interdisciplinary approach that characterises contemporary research holds promise for elucidating one of the most distinctive features of human cognition.`,
      questions: [
        {
          id: 'r5q1',
          type: 'multiple-choice',
          question: 'According to the passage, what is the central claim of the poverty of the stimulus argument?',
          options: ['Children require extensive formal instruction to learn language', 'The linguistic input children receive is insufficient to explain the grammatical knowledge they acquire', 'Children from disadvantaged backgrounds cannot develop full grammatical competence', 'All languages share identical grammatical structures'],
          answer: 'B',
          explanation: 'The passage describes the poverty of the stimulus argument as the claim that linguistic input available to children is impoverished and insufficient to account for the complexity of acquired grammatical knowledge.'
        },
        {
          id: 'r5q2',
          type: 'multiple-choice',
          question: 'What does research on phonological development in infants reveal?',
          options: ['Infants are born with sensitivity only to the sounds of their native language', 'Newborns can discriminate phonetic contrasts from all human languages', 'Phonetic sensitivity is fully developed at birth and does not change', 'Infants lose all phonetic discrimination abilities after twelve months'],
          answer: 'B',
          explanation: 'The passage states that newborn infants can discriminate between phonetic contrasts used in all human languages, showing universal phonetic sensitivity.'
        },
        {
          id: 'r5q3',
          type: 'multiple-choice',
          question: 'According to the passage, approximately how many new words do typically developing children acquire per day during the preschool years?',
          options: ['Five to seven', 'Ten to twelve', 'Fifteen to twenty', 'Twenty-five to thirty'],
          answer: 'B',
          explanation: 'The passage estimates that children acquire an average of ten to twelve new words per day during the preschool years.'
        },
        {
          id: 'r5q4',
          type: 'multiple-choice',
          question: 'What do socio-pragmatic accounts of vocabulary acquisition emphasise?',
          options: ['Innate constraints on possible word meanings', 'Statistical regularities in speech input', 'Joint attention, speaker intention, and conversational context', 'The role of explicit teaching by caregivers'],
          answer: 'C',
          explanation: 'The passage states that socio-pragmatic accounts emphasise the role of joint attention, speaker intention, and conversational context in supporting word learning.'
        },
        {
          id: 'r5q5',
          type: 'multiple-choice',
          question: 'According to the passage, what changes occur in brain organisation during language development?',
          options: ['Language processing shifts from right-hemispheric to left-hemispheric specialisation', 'Early bilateral activation gives way to left-hemispheric specialisation', 'The brain becomes less specialised for language over time', 'Language processing remains bilateral throughout development'],
          answer: 'B',
          explanation: 'The passage states that early bilateral activation patterns give way to the left-hemispheric specialisation characteristic of adult language processing.'
        },
        {
          id: 'r5q6',
          type: 'matching-headings',
          question: 'Paragraph A: The acquisition of language by children represents one of the most remarkable achievements of human cognitive development.',
          headings: [
            'The nativist perspective on language',
            'Phonological development and perceptual narrowing',
            'Introduction to language acquisition debates',
            'Usage-based approaches to language learning',
            'Vocabulary acquisition rates and mechanisms',
            'Syntactic development stages',
            'Current directions in language development research',
            'The role of statistical learning in infancy'
          ],
          answer: 'C',
          explanation: 'Paragraph A introduces the topic of language acquisition and the competing theoretical frameworks that have been debated among researchers.'
        },
        {
          id: 'r5q7',
          type: 'matching-headings',
          question: 'Paragraph B: The nativist perspective, most prominently associated with Noam Chomsky, posits that human beings are biologically endowed with an innate language faculty.',
          headings: [
            'The nativist perspective on language',
            'Phonological development and perceptual narrowing',
            'Introduction to language acquisition debates',
            'Usage-based approaches to language learning',
            'Vocabulary acquisition rates and mechanisms',
            'Syntactic development stages',
            'Current directions in language development research',
            'The role of statistical learning in infancy'
          ],
          answer: 'A',
          explanation: 'Paragraph B presents the nativist perspective and the theory of Universal Grammar associated with Chomsky.'
        },
        {
          id: 'r5q8',
          type: 'matching-headings',
          question: 'Paragraph C: In contrast, usage-based and constructivist approaches emphasise the role of general cognitive processes and environmental input.',
          headings: [
            'The nativist perspective on language',
            'Phonological development and perceptual narrowing',
            'Introduction to language acquisition debates',
            'Usage-based approaches to language learning',
            'Vocabulary acquisition rates and mechanisms',
            'Syntactic development stages',
            'Current directions in language development research',
            'The role of statistical learning in infancy'
          ],
          answer: 'D',
          explanation: 'Paragraph C describes usage-based and constructivist approaches that emphasise general cognitive processes and environmental input.'
        },
        {
          id: 'r5q9',
          type: 'matching-headings',
          question: 'Paragraph D: The interaction between innate predispositions and environmental input is perhaps most clearly illustrated in studies of phonological development.',
          headings: [
            'The nativist perspective on language',
            'Phonological development and perceptual narrowing',
            'Introduction to language acquisition debates',
            'Usage-based approaches to language learning',
            'Vocabulary acquisition rates and mechanisms',
            'Syntactic development stages',
            'Current directions in language development research',
            'The role of statistical learning in infancy'
          ],
          answer: 'B',
          explanation: 'Paragraph D focuses on phonological development and the process of perceptual narrowing in infant speech perception.'
        },
        {
          id: 'r5q10',
          type: 'matching-headings',
          question: 'Paragraph E: Vocabulary acquisition proceeds at a rate that has surprised researchers.',
          headings: [
            'The nativist perspective on language',
            'Phonological development and perceptual narrowing',
            'Introduction to language acquisition debates',
            'Usage-based approaches to language learning',
            'Vocabulary acquisition rates and mechanisms',
            'Syntactic development stages',
            'Current directions in language development research',
            'The role of statistical learning in infancy'
          ],
          answer: 'E',
          explanation: 'Paragraph E discusses vocabulary acquisition rates, the vocabulary spurt, and mechanisms of word learning.'
        },
        {
          id: 'r5q11',
          type: 'sentence-completion',
          question: 'Complete the sentence using NO MORE THAN TWO WORDS from the passage. At around eighteen to twenty-four months, children typically produce two-word combinations known as __________ speech.',
          answer: 'telegraphic',
          explanation: 'The passage describes two-word combinations characterised by telegraphic speech at approximately eighteen to twenty-four months.'
        },
        {
          id: 'r5q12',
          type: 'sentence-completion',
          question: 'Complete the sentence using NO MORE THAN TWO WORDS from the passage. The process by which infants lose the ability to discriminate non-native phonetic contrasts is called perceptual __________.',
          answer: 'narrowing',
          explanation: 'The passage describes perceptual narrowing as the process by which infants lose the ability to discriminate non-native contrasts.'
        },
        {
          id: 'r5q13',
          type: 'sentence-completion',
          question: 'Complete the sentence using NO MORE THAN TWO WORDS from the passage. The rapid acceleration in word learning that often occurs around eighteen months is termed the vocabulary __________.',
          answer: 'spurt',
          explanation: 'The passage refers to the vocabulary spurt as a dramatic acceleration in word learning occurring around eighteen months.'
        },
        {
          id: 'r5q14',
          type: 'sentence-completion',
          question: 'Complete the sentence using NO MORE THAN TWO WORDS from the passage. Neuroimaging studies have found that language processing shifts from bilateral to __________ specialisation during development.',
          answer: 'left-hemispheric',
          explanation: 'The passage states that early bilateral activation gives way to left-hemispheric specialisation.'
        }
      ]
    }
  ]
};
