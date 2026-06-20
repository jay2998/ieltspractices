export const listeningData = {
  sections: [
    {
      id: 'l1',
      title: 'Holiday Booking Enquiry',
      type: 'conversation',
      transcript: `CUSTOMER: Hi, I\'d like to make a booking for a holiday cottage in Cornwall, please.
AGENT: Certainly, madam. Could I take your name first?
CUSTOMER: Yes, it\'s Sarah. Sarah Mitchell.
AGENT: Thank you, Sarah. And could you spell your surname for me?
CUSTOMER: M-I-T-C-H-E double L.
AGENT: Perfect. And how many nights are you looking to stay?
CUSTOMER: We're thinking of a fortnight, actually. Fourteen nights.
AGENT: Lovely. And when would you like to check in?
CUSTOMER: We're hoping to start on the 23rd of August.
AGENT: 23rd of August. That takes us to the 6th of September. And how many guests will be staying?
CUSTOMER: There'll be four adults and two children.
AGENT: So six guests in total. Do you have a preferred cottage or location in mind?
CUSTOMER: We\'d like something near the coast, ideally within walking distance of a beach. And we\'d need at least three bedrooms.
AGENT: I have Fern Cottage available. It\'s in St Ives, about five minutes from Porthminster Beach. It has three bedrooms, a fully equipped kitchen, and a private garden.
CUSTOMER: That sounds perfect. What\'s the weekly rate?
AGENT: For the peak season, it\'s eight hundred and fifty pounds per week.
CUSTOMER: And does that include linen and utilities?
AGENT: Yes, linen and towels are provided, and utilities are included in the price. There is a refundable damage deposit of one hundred and fifty pounds, though.
CUSTOMER: That\'s fine. Are there any local amenities nearby?
AGENT: Absolutely. There\'s a supermarket about half a mile away, several restaurants within a ten-minute walk, and the nearest train station is in St Erth, about three miles away.
CUSTOMER: Excellent. I\'d like to proceed with the booking.
AGENT: Great. I'll need your contact number and email address.
CUSTOMER: My mobile is 07714 623 891 and my email is s.mitchell at outlook dot com.
AGENT: Thank you. I'll send you a confirmation email with the payment details. Your booking reference is CORN2024.`,
      questions: [
        {
          id: 'l1q1',
          type: 'form-completion',
          question: 'Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Customer Name: ...',
          answer: 'Sarah Mitchell',
          explanation: 'The customer gives her name as Sarah Mitchell in the first exchange.'
        },
        {
          id: 'l1q2',
          type: 'form-completion',
          question: 'Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Number of nights: ...',
          answer: '14',
          explanation: 'Mitchell says "a fortnight" which is fourteen nights.'
        },
        {
          id: 'l1q3',
          type: 'form-completion',
          question: 'Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Check-in date: ...',
          answer: '23rd August',
          explanation: 'The customer states "23rd of August" as the check-in date.'
        },
        {
          id: 'l1q4',
          type: 'form-completion',
          question: 'Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Number of guests: ...',
          answer: '6',
          explanation: 'The agent confirms six guests in total from four adults and two children.'
        },
        {
          id: 'l1q5',
          type: 'form-completion',
          question: 'Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Cottage name: ...',
          answer: 'Fern Cottage',
          explanation: 'The agent offers Fern Cottage as the available option.'
        },
        {
          id: 'l1q6',
          type: 'form-completion',
          question: 'Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Weekly rate: £ ...',
          answer: '850',
          explanation: 'The agent states "eight hundred and fifty pounds per week".'
        },
        {
          id: 'l1q7',
          type: 'form-completion',
          question: 'Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Damage deposit: £ ...',
          answer: '150',
          explanation: 'The agent mentions a "refundable damage deposit of one hundred and fifty pounds".'
        },
        {
          id: 'l1q8',
          type: 'short-answer',
          question: 'What type of property is the customer looking for?',
          answer: 'holiday cottage',
          explanation: 'The customer says she wants to book "a holiday cottage in Cornwall".'
        },
        {
          id: 'l1q9',
          type: 'short-answer',
          question: 'What is the customer\u2019s mobile phone number?',
          answer: '07714 623 891',
          explanation: 'The customer gives her mobile number as 07714 623 891.'
        },
        {
          id: 'l1q10',
          type: 'short-answer',
          question: 'What is the booking reference number?',
          answer: 'CORN2024',
          explanation: 'The agent provides the booking reference CORN2024 at the end of the conversation.'
        }
      ]
    },
    {
      id: 'l2',
      title: 'Museum Guided Tour',
      type: 'monologue',
      transcript: `Good morning, everyone, and welcome to the National Museum of Ancient Civilisations. I\'m Dr. Helen Carstairs, and I'll be your guide for today\'s tour of the Egyptian and Mesopotamian galleries. Before we begin, I\'d like to remind you that photography is permitted throughout the museum, but flash photography is strictly prohibited in the artefact halls as it can damage sensitive pigments and ancient materials.

Our tour will last approximately ninety minutes, and we'll be covering three main exhibition spaces. We'll begin in the Predynastic Egypt gallery, then move to the Old Kingdom hall, and finish in the Mesopotamian wing. There are restrooms located near the main entrance and at the far end of the Mesopotamian gallery. A cafeteria is available on the lower ground floor if you wish to purchase refreshments after the tour.

Now, if you\'d like to follow me into the first gallery. The Predynastic Egypt exhibit showcases artefacts dating from approximately 6000 to 3150 BCE. What makes this period particularly fascinating is the evidence of early trade networks. The presence of lapis lazuli, which originates from the Badakhshan region of modern-day Afghanistan, in predynastic Egyptian graves indicates that long-distance trade routes were already well established by the fourth millennium BCE.

Please note the display case to your left. These Naqada pottery vessels are among the finest examples of predynastic craftsmanship. Notice the distinctive white cross-lined decoration, which is characteristic of the Naqada I period. In the centre of the gallery, you'll see our newest acquisition — a reconstructed reed-boat, based on archaeological evidence from the Sahara Desert region, which suggests that early Nile populations were already experimenting with water transport.

As we move into the Old Kingdom hall, I\'d like to draw your attention to the funerary stela of a high-ranking official named Khenemet. This limestone carving, dating to the Fifth Dynasty, provides valuable insight into the religious beliefs and social hierarchy of the period. The hieroglyphic inscription describes offerings of bread, beer, and cattle that were intended to sustain Khenemet in the afterlife.

The Mesopotamian gallery is our final stop. Here we have a remarkable collection of cuneiform tablets from the city-state of Ur. Some of these documents are administrative records dealing with barley distribution, while others are among the earliest known examples of written literature. The tablet on the far wall, displayed under low lighting, contains a fragment of the Epic of Gilgamesh — specifically the flood narrative that predates similar accounts in other ancient traditions.

I should mention that the museum has just launched a new audio guide system, which provides additional commentary on selected artefacts. You can download the app from the museum\'s website or collect a device from the information desk. The audio guide is available in eight languages and costs five pounds for adults, with a discounted rate of three pounds for students and senior citizens.

If you have any questions, please feel free to ask as we proceed.`,
      questions: [
        {
          id: 'l2q1',
          type: 'multiple-choice',
          question: 'What is the guide\u2019s name?',
          options: [
            { label: 'A', text: 'Dr. Helen Cartwright' },
            { label: 'B', text: 'Dr. Helen Carstairs' },
            { label: 'C', text: 'Dr. Harriet Carstairs' },
            { label: 'D', text: 'Dr. Helen Caxton' }
          ],
          answer: 'B',
          explanation: 'The guide introduces herself as Dr. Helen Carstairs.'
        },
        {
          id: 'l2q2',
          type: 'multiple-choice',
          question: 'What is prohibited in the artefact halls?',
          options: [
            { label: 'A', text: 'All photography' },
            { label: 'B', text: 'Video recording' },
            { label: 'C', text: 'Flash photography' },
            { label: 'D', text: 'Using mobile phones' }
          ],
          answer: 'C',
          explanation: 'The guide states "flash photography is strictly prohibited in the artefact halls".'
        },
        {
          id: 'l2q3',
          type: 'multiple-choice',
          question: 'How long does the tour last?',
          options: [
            { label: 'A', text: 'Sixty minutes' },
            { label: 'B', text: 'Seventy-five minutes' },
            { label: 'C', text: 'Ninety minutes' },
            { label: 'D', text: 'One hundred and twenty minutes' }
          ],
          answer: 'C',
          explanation: 'The guide says the tour will last "approximately ninety minutes".'
        },
        {
          id: 'l2q4',
          type: 'multiple-choice',
          question: 'What evidence do predynastic graves contain of early trade networks?',
          options: [
            { label: 'A', text: 'Gold jewellery' },
            { label: 'B', text: 'Lapis lazuli' },
            { label: 'C', text: 'Cuneiform tablets' },
            { label: 'D', text: 'Pottery vessels' }
          ],
          answer: 'B',
          explanation: 'Lapis lazuli from Afghanistan found in Egyptian graves "indicates that long-distance trade routes were already well established".'
        },
        {
          id: 'l2q5',
          type: 'multiple-choice',
          question: 'What is the new acquisition in the Predynastic gallery?',
          options: [
            { label: 'A', text: 'A limestone stela' },
            { label: 'B', text: 'A collection of cuneiform tablets' },
            { label: 'C', text: 'A reconstructed reed-boat' },
            { label: 'D', text: 'Naqada pottery vessels' }
          ],
          answer: 'C',
          explanation: 'The guide mentions "our newest acquisition — a reconstructed reed-boat".'
        },
        {
          id: 'l2q6',
          type: 'map-labeling',
          question: 'Label the museum floor plan. Choose your answers from the box.',
          instructions: 'Where is the cafeteria located?',
          answer: 'lower ground floor',
          explanation: 'The guide states the cafeteria is "available on the lower ground floor".'
        },
        {
          id: 'l2q7',
          type: 'map-labeling',
          question: 'Label the museum floor plan. Choose your answers from the box.',
          instructions: 'Where are the restrooms located? (one location)',
          answer: 'near the main entrance',
          explanation: 'Restrooms are located "near the main entrance and at the far end of the Mesopotamian gallery".'
        },
        {
          id: 'l2q8',
          type: 'map-labeling',
          question: 'Label the museum floor plan. Choose your answers from the box.',
          instructions: 'Where is the information desk?',
          answer: 'near the main entrance',
          explanation: 'The audio guide devices can be "collected from the information desk", which is at the main entrance area.'
        },
        {
          id: 'l2q9',
          type: 'multiple-choice',
          question: 'What does the funerary stela of Khenemet describe?',
          options: [
            { label: 'A', text: 'Military victories of the Fifth Dynasty' },
            { label: 'B', text: 'Offerings of bread, beer, and cattle' },
            { label: 'C', text: 'Construction of the Great Pyramid' },
            { label: 'D', text: 'Trade agreements with Mesopotamia' }
          ],
          answer: 'B',
          explanation: 'The inscription describes "offerings of bread, beer, and cattle that were intended to sustain Khenemet in the afterlife".'
        },
        {
          id: 'l2q10',
          type: 'multiple-choice',
          question: 'How much does the audio guide cost for students?',
          options: [
            { label: 'A', text: 'Three pounds' },
            { label: 'B', text: 'Five pounds' },
            { label: 'C', text: 'Four pounds' },
            { label: 'D', text: 'Six pounds' }
          ],
          answer: 'A',
          explanation: 'The audio guide costs "three pounds for students and senior citizens".'
        }
      ]
    },
    {
      id: 'l3',
      title: 'Tutorial Discussion on Renewable Energy',
      type: 'academic-conversation',
      transcript: `TUTOR: Good afternoon, James and Priya. Thank you for coming in today. How are you both getting on with your research proposal on renewable energy integration?
JAMES: Quite well, actually. We've narrowed our focus to offshore wind and solar photovoltaic systems in the UK context.
PRIYA: Yes, we're particularly interested in the intermittency challenge and how battery storage technology might address it.
TUTOR: That\'s a well-defined scope. Before we go further, I want to make sure you're considering the social dimension as well. The technical aspects are important, but public acceptance often determines project success or failure. Have you looked at any case studies?
PRIYA: We've examined the Dogger Bank Wind Farm project. It\'s fascinating because it\'s going to be the world\'s largest offshore wind farm when complete.
JAMES: The scale is enormous — 3.6 gigawatts once all phases are operational. But what struck me was the marine spatial planning issues. There\'s significant tension between renewable energy development and fishing industry interests.
TUTOR: Exactly right. And this is where stakeholder engagement becomes crucial. How are you planning to structure your methodology?
JAMES: We were thinking of a comparative analysis between the UK and Denmark, since Denmark has successfully integrated much higher proportions of wind energy into its grid.
TUTOR: That\'s a valid comparison, but I\'d caution you to consider the differences in grid interconnection. Denmark benefits from its connections to the Nordic hydroelectric system, which provides natural storage capacity. The UK doesn\'t have that advantage.
PRIYA: That\'s a really important point. So perhaps we should include Norway as a point of reference for hydroelectric storage?
TUTOR: That could work, but keep your scope manageable. You don\'t want to spread yourselves too thin. Stick to two countries maximum. What about your theoretical framework?
JAMES: We're considering using the Multi-Level Perspective framework — looking at the socio-technical transitions at niche, regime, and landscape levels.
TUTOR: The MLP is a solid choice for understanding systemic change. Just make sure you're applying it critically. Some scholars argue it overemphasizes bottom-up change and underestimates the role of deliberate policy intervention.
PRIYA: We've read Geels' work on that. We'll try to balance it with insights from the advocacy coalition framework.
TUTOR: Good. Now, let\'s talk about data sources. What are you planning to use for your empirical analysis?
JAMES: We've identified the UK\'s Department for Energy Security and Net Zero statistics, and for Denmark, the Danish Energy Agency publishes comprehensive data.
PRIYA: We also want to interview at least two industry experts and perhaps a policy official.
TUTOR: Interviews would add real depth. Make sure you get ethics approval before you start those. The process takes about four to six weeks. Have you thought about your timeline?
JAMES: We're aiming to have the literature review completed by the end of next month, data collection by mid-semester, and the first draft done by the end of term.
TUTOR: That\'s ambitious but achievable. One final thing — your proposal mentions battery storage. Are you aware of the new lithium-iron-phosphate technology that\'s gaining traction? It\'s cheaper than traditional lithium-ion and has a longer cycle life, though the energy density is lower.
PRIYA: We saw a paper on that in Nature Energy. It\'s promising, but the lower energy density makes it less suitable for applications where space is constrained.
TUTOR: Precisely. Context matters enormously in technology assessment. I think you've made excellent progress. I\'d like you to refine your research questions and bring a revised proposal to our next meeting in two weeks.`,
      questions: [
        {
          id: 'l3q1',
          type: 'multiple-choice',
          question: 'What is the main focus of James and Priya\u2019s research proposal?',
          options: [
            { label: 'A', text: 'Nuclear energy and grid stability' },
            { label: 'B', text: 'Offshore wind and solar photovoltaic systems' },
            { label: 'C', text: 'Hydroelectric power in Scandinavia' },
            { label: 'D', text: 'Geothermal energy in the UK' }
          ],
          answer: 'B',
          explanation: 'James states "we\'ve narrowed our focus to offshore wind and solar photovoltaic systems in the UK context".'
        },
        {
          id: 'l3q2',
          type: 'multiple-choice',
          question: 'What challenge are the students particularly interested in?',
          options: [
            { label: 'A', text: 'Grid connection costs' },
            { label: 'B', text: 'Intermittency and battery storage' },
            { label: 'C', text: 'Public funding limitations' },
            { label: 'D', text: 'Workforce training requirements' }
          ],
          answer: 'B',
          explanation: 'Priya says "we\'re particularly interested in the intermittency challenge and how battery storage technology might address it".'
        },
        {
          id: 'l3q3',
          type: 'multiple-choice',
          question: 'What social factor does the tutor advise the students to consider?',
          options: [
            { label: 'A', text: 'Government regulations' },
            { label: 'B', text: 'Public acceptance' },
            { label: 'C', text: 'Corporate investment' },
            { label: 'D', text: 'International treaties' }
          ],
          answer: 'B',
          explanation: 'The tutor says "public acceptance often determines project success or failure".'
        },
        {
          id: 'l3q4',
          type: 'multiple-choice',
          question: 'What issue did James identify regarding the Dogger Bank Wind Farm?',
          options: [
            { label: 'A', text: 'Engineering design flaws' },
            { label: 'B', text: 'Marine spatial planning conflicts' },
            { label: 'C', text: 'Insufficient wind speeds' },
            { label: 'D', text: 'Lack of government subsidies' }
          ],
          answer: 'B',
          explanation: 'James mentions "marine spatial planning issues" and "tension between renewable energy development and fishing industry interests".'
        },
        {
          id: 'l3q5',
          type: 'multiple-choice',
          question: 'What advantage does Denmark have over the UK in wind energy integration?',
          options: [
            { label: 'A', text: 'More powerful wind turbines' },
            { label: 'B', text: 'Connections to the Nordic hydroelectric system' },
            { label: 'C', text: 'Lower labour costs' },
            { label: 'D', text: 'Warmer climate conditions' }
          ],
          answer: 'B',
          explanation: 'The tutor says "Denmark benefits from its connections to the Nordic hydroelectric system, which provides natural storage capacity".'
        },
        {
          id: 'l3q6',
          type: 'matching',
          question: 'Match each theoretical framework with its correct description.',
          matches: {
            'Multi-Level Perspective framework': 'Examines socio-technical transitions at niche, regime, and landscape levels',
            'Advocacy coalition framework': 'Analyses the role of policy actors and belief systems in policy change'
          },
          instructions: 'Write the correct letter next to each framework.',
          answer: 'Multi-Level Perspective framework',
          explanation: 'James describes the MLP as "looking at the socio-technical transitions at niche, regime, and landscape levels".'
        },
        {
          id: 'l3q7',
          type: 'matching',
          question: 'Match each country with its relevant energy characteristic mentioned in the discussion.',
          matches: {
            'UK': 'Relies on Department for Energy Security and Net Zero statistics',
            'Denmark': 'Has successfully integrated high proportions of wind energy',
            'Norway': 'Provides hydroelectric storage reference point'
          },
          instructions: 'Write the correct letter next to each country.',
          answer: 'UK',
          explanation: 'James identifies the UK\'s energy statistics source and Denmark\'s wind integration success, while Priya suggests Norway as a reference.'
        },
        {
          id: 'l3q8',
          type: 'multiple-choice',
          question: 'What timeline does James propose for the literature review?',
          options: [
            { label: 'A', text: 'By mid-semester' },
            { label: 'B', text: 'By the end of next month' },
            { label: 'C', text: 'By the end of term' },
            { label: 'D', text: 'By the end of the week' }
          ],
          answer: 'B',
          explanation: 'James says "we\'re aiming to have the literature review completed by the end of next month".'
        },
        {
          id: 'l3q9',
          type: 'multiple-choice',
          question: 'What advantage does lithium-iron-phosphate technology have over traditional lithium-ion?',
          options: [
            { label: 'A', text: 'Higher energy density' },
            { label: 'B', text: 'Lower cost and longer cycle life' },
            { label: 'C', text: 'Faster charging speed' },
            { label: 'D', text: 'Smaller physical size' }
          ],
          answer: 'B',
          explanation: 'The tutor says it is "cheaper than traditional lithium-ion and has a longer cycle life".'
        },
        {
          id: 'l3q10',
          type: 'multiple-choice',
          question: 'How long does the tutor say ethics approval typically takes?',
          options: [
            { label: 'A', text: 'One to two weeks' },
            { label: 'B', text: 'Two to three weeks' },
            { label: 'C', text: 'Four to six weeks' },
            { label: 'D', text: 'Six to eight weeks' }
          ],
          answer: 'C',
          explanation: 'The tutor states "the process takes about four to six weeks".'
        }
      ]
    },
    {
      id: 'l4',
      title: 'Urban Planning History Lecture',
      type: 'academic-lecture',
      transcript: `Good morning. Today we're going to examine the evolution of urban planning from the Industrial Revolution through to the present day, with a particular focus on how competing ideological frameworks have shaped the cities we inhabit.

Let\'s begin in the nineteenth century. The Industrial Revolution triggered unprecedented urbanisation. Manchester, for example, grew from a market town of roughly 75,000 inhabitants in 1801 to over 300,000 by 1851. This explosive growth occurred without any coordinated planning — what the historian Asa Briggs called "shock cities". The result was overcrowding, unsanitary conditions, and endemic disease. Cholera epidemics in London in 1832 and 1848 killed tens of thousands and created political pressure for reform.

The first systematic response came with the Public Health Act of 1848 in Britain, which established local boards of health and introduced basic standards for drainage, ventilation, and water supply. This was essentially reactive legislation — it aimed to mitigate the worst public health crises rather than to proactively shape urban form.

A more ambitious vision emerged at the turn of the century with the Garden City movement, pioneered by Ebenezer Howard. His 1898 book "To-morrow: A Peaceful Path to Real Reform" proposed self-contained communities surrounded by greenbelts, combining the benefits of town and country. Letchworth, founded in 1903, was the first Garden City. The movement was enormously influential, though critics argue it promoted low-density sprawl and social segregation.

The interwar period saw the rise of modernist planning, associated most prominently with Le Corbusier. His concept of the "Radiant City" proposed high-density tower blocks set within extensive parkland, separated by function — residential, commercial, and industrial zones were strictly divided. This approach was codified in the 1933 Athens Charter, which became the template for urban reconstruction after World War II.

Post-war reconstruction in Europe provided a massive laboratory for modernist ideas. The British New Towns Act of 1946 led to the creation of thirty-two new towns, including Milton Keynes and Stevenage. These incorporated Howard\'s greenbelt concept but adopted modernist principles of zoning and car-oriented infrastructure. By the 1970s, however, dissatisfaction with modernist planning was widespread. High-rise public housing estates had developed serious social problems, and the emphasis on car travel had fragmented urban communities.

Jane Jacobs' 1961 book "The Death and Life of Great American Cities" provided the most influential critique. She argued for mixed-use developments, short blocks, and high density — the organic complexity of traditional urban neighbourhoods like Greenwich Village. Jacobs championed "eyes on the street" as a natural form of surveillance and community safety.

The late twentieth century brought new paradigms. New Urbanism, emerging in the 1980s, sought to revive traditional town-planning principles — walkable neighbourhoods, mixed-use zoning, and public transit orientation. The movement\'s Charter, signed in 1996, explicitly rejected the suburban sprawl model.

Meanwhile, the concept of the "smart city" gained traction from the 2000s onward, using data and digital technology to optimise urban systems — traffic management, waste collection, energy distribution. Critics, however, caution that smart city initiatives often prioritise technological solutions over genuine community engagement and can exacerbate digital divides.

So where does this leave us? Contemporary urban planning is increasingly focused on resilience in the face of climate change. Cities like Rotterdam are pioneering adaptive strategies — floating houses, water plazas, and green roofs. The challenge for twenty-first-century planners is to integrate lessons from all these movements: the Garden City\'s attention to green space, Jacobs' emphasis on community-scale vitality, New Urbanism\'s walkability, and smart city efficiency, while addressing the existential threat of climate change.`,
      questions: [
        {
          id: 'l4q1',
          type: 'note-completion',
          question: 'Complete the notes below. Write ONE WORD ONLY for each answer.',
          instructions: 'The Industrial Revolution caused rapid \u2014\u2014\u2014\u2014',
          answer: 'urbanisation',
          explanation: 'The lecture states "the Industrial Revolution triggered unprecedented urbanisation".'
        },
        {
          id: 'l4q2',
          type: 'note-completion',
          question: 'Complete the notes below. Write ONE WORD ONLY for each answer.',
          instructions: 'Manchester\u2019s population grew from 75,000 to over \u2014\u2014\u2014\u2014 by 1851',
          answer: '300,000',
          explanation: 'Manchester grew "to over 300,000 by 1851".'
        },
        {
          id: 'l4q3',
          type: 'note-completion',
          question: 'Complete the notes below. Write ONE WORD ONLY for each answer.',
          instructions: 'The Public Health Act of 1848 was \u2014\u2014\u2014\u2014 legislation',
          answer: 'reactive',
          explanation: 'The lecture describes the Act as "essentially reactive legislation".'
        },
        {
          id: 'l4q4',
          type: 'note-completion',
          question: 'Complete the notes below. Write ONE WORD ONLY for each answer.',
          instructions: 'Ebenezer Howard proposed self-contained communities called \u2014\u2014\u2014\u2014 cities',
          answer: 'Garden',
          explanation: 'The Garden City movement was "pioneered by Ebenezer Howard".'
        },
        {
          id: 'l4q5',
          type: 'note-completion',
          question: 'Complete the notes below. Write ONE WORD ONLY for each answer.',
          instructions: 'The first Garden City was \u2014\u2014\u2014\u2014, founded in 1903',
          answer: 'Letchworth',
          explanation: '"Letchworth, founded in 1903, was the first Garden City."'
        },
        {
          id: 'l4q6',
          type: 'note-completion',
          question: 'Complete the notes below. Write ONE WORD ONLY for each answer.',
          instructions: 'Le Corbusier\u2019s concept was the \u2014\u2014\u2014\u2014 City',
          answer: 'Radiant',
          explanation: 'Le Corbusier\'s concept was "the Radiant City".'
        },
        {
          id: 'l4q7',
          type: 'short-answer',
          question: 'How many new towns were created under the British New Towns Act of 1946?',
          answer: '32',
          explanation: 'The lecture says "thirty-two new towns" were created.'
        },
        {
          id: 'l4q8',
          type: 'short-answer',
          question: 'Which book by Jane Jacobs critiqued modernist planning?',
          answer: 'The Death and Life of Great American Cities',
          explanation: 'Jane Jacobs\' 1961 book provided "the most influential critique" of modernist planning.'
        },
        {
          id: 'l4q9',
          type: 'short-answer',
          question: 'Which city is mentioned as a pioneer of climate-adaptive urban strategies?',
          answer: 'Rotterdam',
          explanation: 'Rotterdam is cited as pioneering "floating houses, water plazas, and green roofs".'
        },
        {
          id: 'l4q10',
          type: 'short-answer',
          question: 'Which movement in the 1980s revived traditional town-planning principles?',
          answer: 'New Urbanism',
          explanation: '"New Urbanism, emerging in the 1980s, sought to revive traditional town-planning principles."'
        }
      ]
    },
    {
      id: 'l5',
      title: 'Travel Agency Itinerary Planning',
      type: 'conversation',
      transcript: `AGENT: Good afternoon, Mr. Okonkwo. I've prepared a draft itinerary for your two-week trip to Japan. Would you like to go through it?
CLIENT: Yes, please. I\'m particularly interested in the cultural sites, but I\'d like a mix of experiences.
AGENT: Absolutely. I've structured the trip around three main locations — Tokyo, Kyoto, and the Hakone region. Let me walk you through the day-by-day plan.

Days one to four are in Tokyo. You'll be staying at the Hotel Gracery in Shinjuku. It\'s a four-star property with excellent transport links. On day one, you arrive at Narita Airport at 3:40 PM. I've arranged airport transfer via the Narita Express. Day two is a full-day guided tour covering Asakusa, the Imperial Palace gardens, and the Shibuya crossing. Day three, I've left free for independent exploration. Day four, you travel to Hakone.

CLIENT: What\'s planned for Hakone?
AGENT: Days four and five in Hakone. This is your opportunity to experience Mount Fuji and the hot springs. On day four, you'll take the Shinkansen bullet train from Tokyo Station. The journey takes about thirty-five minutes to Odawara, then you'll connect to the local Hakone Tozan Railway. Your accommodation is the Hakone Ginyu, a traditional ryokan with private onsen facilities. Day five includes the Hakone Loop — the cable car, the ropeway, and a pirate ship cruise across Lake Ashi.

CLIENT: That sounds wonderful. Then onto Kyoto?
AGENT: Correct. Days six through eleven are in Kyoto. You'll stay at a machiya townhouse near Nishiki Market. Day six is travel from Hakone. Day seven covers Kinkaku-ji, the Golden Pavilion, and Ryoan-ji temple with its famous rock garden. Day eight is a full-day excursion to Nara to see Todai-ji temple and the deer park. Day nine is Arashiyama — the bamboo grove, Tenryu-ji temple, and the monkey park. Day ten is a cultural workshop day — I've booked a tea ceremony experience in the morning and a calligraphy class in the afternoon. Day eleven is free.

CLIENT: Can we add something culinary, like a cooking class?
AGENT: I can adjust day ten to include a sushi-making class in the evening instead of the calligraphy if you\'d prefer. The calligraphy can be moved to day eleven.
CLIENT: Yes, let\'s do that.

AGENT: Day twelve, you return to Tokyo for your departure. Day thirteen, you fly out of Narita at 11:15 AM. Your total package cost comes to three thousand, two hundred and fifty pounds, which includes all accommodation, the rail pass, the guided tours, and the cultural workshops. Excluded are international flights, travel insurance, and meals except where specified.

CLIENT: And what about the JR Pass — is it cost-effective for this itinerary?
AGENT: Absolutely. The seven-day Japan Rail Pass costs approximately thirty-three thousand yen. Given you'll be taking the Shinkansen twice, plus multiple local JR lines, you'll definitely save money. I\'d recommend activating it on day four, when you travel to Hakone.

CLIENT: That makes sense. I think the itinerary looks excellent. Let\'s proceed with the booking.`,
      questions: [
        {
          id: 'l5q1',
          type: 'table-completion',
          question: 'Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Accommodation in Kyoto: machiya \u2014\u2014\u2014\u2014',
          answer: 'townhouse',
          explanation: 'The agent says "you\'ll stay at a machiya townhouse near Nishiki Market".'
        },
        {
          id: 'l5q2',
          type: 'table-completion',
          question: 'Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Type of accommodation in Hakone: traditional \u2014\u2014\u2014\u2014',
          answer: 'ryokan',
          explanation: 'The agent describes the Hakone Ginyu as "a traditional ryokan with private onsen facilities".'
        },
        {
          id: 'l5q3',
          type: 'table-completion',
          question: 'Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Departure flight time: \u2014\u2014\u2014\u2014 AM',
          answer: '11:15',
          explanation: 'The agent says "you fly out of Narita at 11:15 AM".'
        },
        {
          id: 'l5q4',
          type: 'table-completion',
          question: 'Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Train to Hakone: \u2014\u2014\u2014\u2014 bullet train',
          answer: 'Shinkansen',
          explanation: 'The agent mentions "the Shinkansen bullet train from Tokyo Station".'
        },
        {
          id: 'l5q5',
          type: 'table-completion',
          question: 'Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Total package cost: \u00a3\u2014\u2014\u2014\u2014',
          answer: '3250',
          explanation: 'The agent states "your total package cost comes to three thousand, two hundred and fifty pounds".'
        },
        {
          id: 'l5q6',
          type: 'table-completion',
          question: 'Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.',
          instructions: 'Day ten activity: \u2014\u2014\u2014\u2014 ceremony',
          answer: 'tea',
          explanation: 'The agent says "I\'ve booked a tea ceremony experience in the morning".'
        },
        {
          id: 'l5q7',
          type: 'multiple-choice',
          question: 'Which optional activity does the client request to add?',
          options: [
            { label: 'A', text: 'A pottery workshop' },
            { label: 'B', text: 'A sushi-making class' },
            { label: 'C', text: 'A samurai museum visit' },
            { label: 'D', text: 'A garden tour' }
          ],
          answer: 'B',
          explanation: 'The client asks "Can we add something culinary, like a cooking class?" and the agent suggests "a sushi-making class".'
        },
        {
          id: 'l5q8',
          type: 'multiple-choice',
          question: 'On which day does the agent recommend activating the JR Pass?',
          options: [
            { label: 'A', text: 'Day one' },
            { label: 'B', text: 'Day four' },
            { label: 'C', text: 'Day six' },
            { label: 'D', text: 'Day twelve' }
          ],
          answer: 'B',
          explanation: 'The agent says "I\'d recommend activating it on day four, when you travel to Hakone".'
        },
        {
          id: 'l5q9',
          type: 'multiple-choice',
          question: 'What is NOT included in the total package cost?',
          options: [
            { label: 'A', text: 'Accommodation' },
            { label: 'B', text: 'The Japan Rail Pass' },
            { label: 'C', text: 'International flights' },
            { label: 'D', text: 'Guided tours' }
          ],
          answer: 'C',
          explanation: 'The agent clarifies "excluded are international flights, travel insurance, and meals except where specified".'
        },
        {
          id: 'l5q10',
          type: 'multiple-choice',
          question: 'How many free days are included in the original itinerary?',
          options: [
            { label: 'A', text: 'One' },
            { label: 'B', text: 'Two' },
            { label: 'C', text: 'Three' },
            { label: 'D', text: 'Four' }
          ],
          answer: 'B',
          explanation: 'Day three in Tokyo is free and day eleven in Kyoto is free — two free days in total.'
        }
      ]
    },
    {
      id: 'l6',
      title: 'Climate Change Impacts on Biodiversity',
      type: 'academic-lecture',
      transcript: `Today I want to explore one of the most urgent questions in contemporary ecology: how is anthropogenic climate change reshaping global biodiversity patterns? We'll examine this through three lenses — species distribution shifts, phenological changes, and the implications for ecosystem functioning.

Let\'s begin with distribution shifts. A meta-analysis published in 2020 by Lenoir and Svenning examined over 4,000 species across terrestrial and marine ecosystems. Their findings were striking: species are moving towards the poles at an average rate of 16.9 kilometres per decade in terrestrial environments and 72 kilometres per decade in marine environments. Marine species are shifting approximately four times faster than terrestrial ones, largely because the ocean is a more continuous medium with fewer physical barriers to dispersal.

However, the picture is more complex than simple poleward movement. Mountains create altitudinal gradients, and we're observing species moving uphill at an average of 11 metres per decade. This creates what ecologists call the "escalator to extinction" hypothesis — as species move upward, their habitable area shrinks because mountains are conical in shape. For every 100-metre increase in elevation, the available land area decreases by roughly 10 to 15 percent, depending on the mountain\'s topography.

Perhaps the most concerning aspect is the impact on tropical species. Tropical organisms are adapted to narrow temperature ranges and are already living near their thermal maxima. A study of tropical forest lizards in Puerto Rico found that populations have already experienced local extinctions at low elevations. This suggests that even modest warming, on the order of one to two degrees Celsius, can push tropical species beyond their physiological tolerances.

Now let\'s turn to phenology — the timing of biological events. The most comprehensive datasets come from long-term citizen science projects. The UK\'s Spring Index, which records first flowering dates, leaf emergence, and bird migration, shows that spring events are advancing by approximately 2.3 days per decade. This might sound small, but it creates what are called "trophic mismatches". The classic example involves the great tit and the winter moth in the Netherlands. The winter moth\'s caterpillars, which are the food source for great tit chicks, are emerging earlier due to warmer springs. If the timing of the birds' breeding doesn\'t shift at the same rate, the chicks miss the peak food availability, leading to reduced fledging success.

A 2018 paper in Nature examined 812 published studies covering over 700 species and found that only about 30 percent of species are shifting their phenology at a rate sufficient to keep pace with climate change. The remaining 70 percent are falling behind, creating cascading effects through food webs.

Finally, let\'s consider ecosystem-level impacts. Coral bleaching is perhaps the most visible manifestation. The Great Barrier Reef has experienced five mass bleaching events since 1998, with the 2024 event being the most extensive on record, affecting over 90 percent of the reef. When corals expel their symbiotic zooxanthellae algae due to thermal stress, they lose their primary energy source. If the stress persists for more than a few weeks, the corals die.

In terrestrial systems, we're seeing regime shifts in boreal forests, where warming-induced drought stress and bark beetle outbreaks are converting large areas from carbon sinks to carbon sources. The 2023 Canadian wildfire season, which burned over 18 million hectares, was both a consequence and a driver of climate change.

Conservation strategies are evolving in response. The traditional approach of establishing static protected areas is being supplemented by dynamic conservation planning that accounts for species movements. Corridor connectivity, assisted migration, and climate refugia identification are becoming central to conservation biology. The question is no longer whether we should intervene, but how to manage the unavoidable changes while avoiding the worst outcomes.`,
      questions: [
        {
          id: 'l6q1',
          type: 'multiple-choice',
          question: 'How fast are terrestrial species moving poleward per decade on average?',
          options: [
            { label: 'A', text: '11 kilometres' },
            { label: 'B', text: '16.9 kilometres' },
            { label: 'C', text: '72 kilometres' },
            { label: 'D', text: '4 kilometres' }
          ],
          answer: 'B',
          explanation: 'The lecture states terrestrial species are moving "at an average rate of 16.9 kilometres per decade".'
        },
        {
          id: 'l6q2',
          type: 'multiple-choice',
          question: 'Why are marine species shifting faster than terrestrial species?',
          options: [
            { label: 'A', text: 'They have shorter lifespans' },
            { label: 'B', text: 'The ocean has fewer physical barriers' },
            { label: 'C', text: 'Ocean temperatures are rising faster' },
            { label: 'D', text: 'They reproduce more quickly' }
          ],
          answer: 'B',
          explanation: 'The ocean is "a more continuous medium with fewer physical barriers to dispersal".'
        },
        {
          id: 'l6q3',
          type: 'multiple-choice',
          question: 'What is the \u201cescalator to extinction\u201d hypothesis?',
          options: [
            { label: 'A', text: 'Species move downhill into warmer areas' },
            { label: 'B', text: 'Species moving uphill have less habitable area' },
            { label: 'C', text: 'Extinction rates increase with latitude' },
            { label: 'D', text: 'Climate change accelerates evolution' }
          ],
          answer: 'B',
          explanation: 'As species "move upward, their habitable area shrinks because mountains are conical in shape".'
        },
        {
          id: 'l6q4',
          type: 'multiple-choice',
          question: 'What percentage of tropical forest lizard populations in Puerto Rico experienced local extinction?',
          options: [
            { label: 'A', text: 'Populations at high elevations' },
            { label: 'B', text: 'Populations at low elevations' },
            { label: 'C', text: 'Populations in coastal areas' },
            { label: 'D', text: 'All populations studied' }
          ],
          answer: 'B',
          explanation: 'The study found "local extinctions at low elevations" in Puerto Rico.'
        },
        {
          id: 'l6q5',
          type: 'multiple-choice',
          question: 'By how much are spring events advancing per decade according to the UK Spring Index?',
          options: [
            { label: 'A', text: '1.5 days' },
            { label: 'B', text: '2.3 days' },
            { label: 'C', text: '3.1 days' },
            { label: 'D', text: '4.8 days' }
          ],
          answer: 'B',
          explanation: '"Spring events are advancing by approximately 2.3 days per decade."'
        },
        {
          id: 'l6q6',
          type: 'matching',
          question: 'Match each species or ecosystem with its described climate impact.',
          matches: {
            'Great tit': 'Faces trophic mismatch due to caterpillar emergence',
            'Winter moth': 'Caterpillars emerging earlier due to warmer springs',
            'Coral': 'Expels symbiotic algae under thermal stress',
            'Bark beetle': 'Contributes to regime shifts in boreal forests'
          },
          instructions: 'Write the correct letter next to each item.',
          answer: 'Great tit',
          explanation: 'Great tits experience "trophic mismatches" when caterpillar food sources emerge earlier.'
        },
        {
          id: 'l6q7',
          type: 'matching',
          question: 'Match each research finding with its corresponding percentage.',
          matches: {
            'Species keeping pace with phenology shifts': '30%',
            'Species falling behind in phenology adaptation': '70%'
          },
          instructions: 'Write the correct letter next to each percentage.',
          answer: '30%',
          explanation: '"Only about 30 percent of species are shifting their phenology at a rate sufficient to keep pace."'
        },
        {
          id: 'l6q8',
          type: 'multiple-choice',
          question: 'How many mass bleaching events has the Great Barrier Reef experienced since 1998?',
          options: [
            { label: 'A', text: 'Three' },
            { label: 'B', text: 'Four' },
            { label: 'C', text: 'Five' },
            { label: 'D', text: 'Six' }
          ],
          answer: 'C',
          explanation: '"The Great Barrier Reef has experienced five mass bleaching events since 1998."'
        },
        {
          id: 'l6q9',
          type: 'multiple-choice',
          question: 'How many hectares burned in the 2023 Canadian wildfire season?',
          options: [
            { label: 'A', text: 'Over 8 million hectares' },
            { label: 'B', text: 'Over 12 million hectares' },
            { label: 'C', text: 'Over 18 million hectares' },
            { label: 'D', text: 'Over 25 million hectares' }
          ],
          answer: 'C',
          explanation: '"The 2023 Canadian wildfire season burned over 18 million hectares."'
        },
        {
          id: 'l6q10',
          type: 'multiple-choice',
          question: 'Which conservation strategy is NOT mentioned as a response to climate change?',
          options: [
            { label: 'A', text: 'Corridor connectivity' },
            { label: 'B', text: 'Assisted migration' },
            { label: 'C', text: 'Captive breeding programmes' },
            { label: 'D', text: 'Climate refugia identification' }
          ],
          answer: 'C',
          explanation: 'The lecture mentions corridor connectivity, assisted migration, and climate refugia, but not captive breeding.'
        }
      ]
    }
  ]
};
