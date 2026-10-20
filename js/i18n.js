/*
 * Minimal client-side i18n. Elements with [data-i18n="key"] get their
 * innerHTML (or textContent for <title>) replaced from the dictionary below.
 * Elements with [data-i18n-aria-label="key"] get their aria-label replaced.
 * Language preference is remembered in localStorage; first-time visitors
 * see German by default.
 */
(function () {
  const translations = {
    // ---------- shared: nav / footer ----------
    "nav.home": { en: "Home", de: "Startseite" },
    "nav.pm": { en: "Project Management", de: "Projektmanagement" },
    "nav.wireless": { en: "Wireless Communication", de: "Drahtlose Kommunikation" },
    "nav.ai": { en: "AI Engineering", de: "KI-Engineering" },
    "nav.toggleAria": { en: "Toggle navigation", de: "Navigation umschalten" },

    // ---------- shared: dl labels ----------
    "dt.context": { en: "Context", de: "Kontext" },
    "dt.outcome": { en: "Outcome", de: "Ergebnis" },
    "dt.technologies": { en: "Technologies", de: "Technologien" },
    "dt.certification": { en: "Certification", de: "Zertifizierung" },
    "dt.solution": { en: "Solution", de: "Lösung" },

    // ---------- shared: badges / misc ----------
    "card.arrow": { en: "View projects →", de: "Projekte ansehen →" },
    "badge.finished": { en: "Finished", de: "Abgeschlossen" },
    "badge.conceptProposal": { en: "Concept / proposal phase", de: "Konzept-/Antragsphase" },
    "badge.published": { en: "Published", de: "Veröffentlicht" },
    "badge.mastersThesis": { en: "Master's thesis", de: "Masterarbeit" },
    "badge.demo": { en: "Demo", de: "Demo" },
    "badge.inProductiveUse": { en: "In productive use", de: "Im produktiven Einsatz" },
    "badge.inProgress": { en: "In progress", de: "In Bearbeitung" },
    "tbd": { en: "TBD", de: "Offen" },

    // ---------- home ----------
    "doc.title.home": { en: "Parva Yazdani | Portfolio", de: "Parva Yazdani | Portfolio" },
    "home.eyebrow": { en: "Engineering Portfolio | October 2026", de: "Engineering-Portfolio | Oktober 2026" },
    "home.title": {
      en: "From wireless research to production LLM agents",
      de: "Von der Funktechnik-Forschung bis zu produktiven LLM-Agenten",
    },
    "home.lead": {
      en: `Engineer with experience building full-stack AI systems (LLM agents,
        RAG pipelines, vector search) for real-world use cases. I work with departments
        to clarify what they really need and build the tools with coding agents in a
        structured, repeatable workflow, working closely with different stakeholders and
        picking up new methods fast.`,
      de: `Ingenieurin mit Erfahrung im Aufbau von Full-Stack-KI-Systemen (LLM-Agenten,
        RAG-Pipelines, Vektorsuche) für reale Anwendungsfälle. Gemeinsam mit den
        Fachabteilungen kläre ich, was tatsächlich gebraucht wird, und setze die Tools mit
        Coding-Agenten in einem strukturierten, wiederholbaren Workflow um, in enger Zusammenarbeit mit unterschiedlichen
        Stakeholdern und mit einer schnellen Auffassungsgabe für neue Methoden.`,
    },
    "card.pm.title": { en: "Project Management", de: "Projektmanagement" },
    "card.pm.desc": {
      en: "Sub-project management across departments, consortium leadership, and funding acquisition from idea to submission.",
      de: "Teilprojektmanagement über Abteilungsgrenzen hinweg, Konsortialführung und Fördermittelakquise von der Idee bis zur Einreichung.",
    },
    "card.wireless.title": { en: "Wireless Communication", de: "Drahtlose Kommunikation" },
    "card.wireless.desc": {
      en: "Where it started: 5GiwCow, the VANSIM concept, and editorial leadership of a 5G-to-6G whitepaper.",
      de: "Wo alles begann: 5GiwCow, das VANSIM-Konzept und die redaktionelle Leitung eines 5G-zu-6G-Whitepapers.",
    },
    "card.ai.title": { en: "AI Engineering", de: "KI-Engineering" },
    "card.ai.desc": {
      en: "Production LLM agents and RAG systems: Contract Manager, Document Intelligence, and the agent-based project workflow behind them.",
      de: "Produktive LLM-Agenten und RAG-Systeme: Contract Manager, Document Intelligence und der agentenbasierte Projekt-Workflow dahinter.",
    },

    // ---------- project-management.html ----------
    "doc.title.pm": { en: "Project Management | Parva Yazdani", de: "Projektmanagement | Parva Yazdani" },
    "pm.h1": { en: "Project Management", de: "Projektmanagement" },
    "pm.intro": {
      en: `Alongside engineering work, I carry sub-projects across departments, initiate
        project ideas, and lead consortia through to successful funding submission,
        including supervising students along the way.`,
      de: `Neben der Ingenieurtätigkeit verantworte ich Teilprojekte über Abteilungsgrenzen
        hinweg, initiiere Projektideen und führe Konsortien bis zur erfolgreichen
        Förderantragstellung, inklusive Betreuung von Studierenden.`,
    },
    "pm.card1.title": { en: "Project Acquisition &amp; Consortium Leadership", de: "Projektakquise &amp; Konsortialführung" },
    "pm.card1.initiatives": {
      en: `Two proposals: <a href=\"wireless-communication.html#proj-vansim\">VANSIM</a> (the Virtual
        Automation Network Simulation concept, originating from the 5GiwCow project) and
        <a href=\"ai-engineering.html#proj-convassist\">ConvAssist</a> (a new AI engineering concept).`,
      de: `Zwei Förderanträge: <a href=\"wireless-communication.html#proj-vansim\">VANSIM</a> (das
        Konzept „Virtual Automation Network Simulation", hervorgegangen aus dem
        5GiwCow-Projekt) und <a href=\"ai-engineering.html#proj-convassist\">ConvAssist</a> (ein neues
        KI-Engineering-Konzept).`,
    },
    "pm.card1.outcome": {
      en: "Both funding proposals were fully developed and submitted, each with a complete project consortium. I developed the basic idea for both concepts together with another team member and also led the VANSIM consortium.",
      de: "Beide Förderanträge wurden vollständig ausgearbeitet und jeweils mit einem kompletten Projektkonsortium eingereicht. Die Grundidee beider Konzepte entwickelte ich gemeinsam mit einem weiteren Teammitglied; bei VANSIM habe ich zudem das Konsortium geleitet.",
    },
    "pm.card2.title": { en: "Sub-Project Management", de: "Teilprojektmanagement" },
    "pm.card2.context": {
      en: "In academic research projects, researchers usually manage the parts they are responsible for themselves. In 6G Platform I led the innovation-management working group, coordinating the <a href=\"wireless-communication.html#proj-whitepaper\">whitepaper</a> together with the working group members and external project partners through regular meetings, distributing the tasks among the participants, and planning the next steps.",
      de: "In akademischen Forschungsprojekten verwalten Forschende üblicherweise selbst die Bereiche, für die sie verantwortlich sind. In der 6G-Plattform habe ich die Arbeitsgruppe Innovationsmanagement geleitet, das <a href=\"wireless-communication.html#proj-whitepaper\">Whitepaper</a> gemeinsam mit den Mitgliedern der Arbeitsgruppe und externen Projektbeteiligten in regelmäßigen Treffen koordiniert, die Aufgaben unter die Beteiligten verteilt und die nächsten Schritte geplant.",
    },
    "pm.card2.outcome": {
      en: "Contributions were delivered in time for the project's publications and reports and led to the expected results of the corresponding project.",
      de: "Beiträge wurden rechtzeitig für die Publikationen und Berichte des Projekts vorbereitet und führten zu den erwarteten Ergebnissen des jeweiligen Projekts.",
    },
    "pm.card3.title": { en: "Student Supervision", de: "Betreuung von Studierenden" },
    "pm.card3.context": {
      en: `Two students: one bachelor's thesis ("A Communication Control Co-Design
        Approach in Industrial Automation"), and a student research assistant who supported
        the first experiments on the <a href="wireless-communication.html#proj-vansim">VANSIM</a> idea.`,
      de: `Zwei Studierende: eine Bachelorarbeit („A Communication Control Co-Design
        Approach in Industrial Automation“) und eine studentische Hilfskraft, die die ersten
        Vorversuche zur <a href="wireless-communication.html#proj-vansim">VANSIM</a>-Idee unterstützte.`,
    },
    "pm.card4.title": { en: "Project Management Certifications", de: "Zertifizierungen im Projektmanagement" },
    "pm.card4.certs": {
      en: `<a href="https://www.nobledesktop.com/credentials/3cae7536-0dd8-4416-bdcb-2596fbe6b574?trk=public_profile_see-credential" target="_blank" rel="noopener">Project Management Level 1</a> (Foundational Concepts, Initiating &amp; Planning), Noble Desktop (Design &amp; Coding School), New York, US, 06/2025<br />
        <a href="https://www.nobledesktop.com/credentials/cc5f7991-598b-4b75-a5d6-aefcee95a8d7?trk=public_profile_see-credential" target="_blank" rel="noopener">Project Management Level 2</a> (Teams, Costs, Execution, Closing, Risk &amp; Agile), Noble Desktop (Design &amp; Coding School), New York, US, 06/2025<br />
        <a href="https://www.linkedin.com/learning/certificates/e96a8f9beb9e1d5fc1b296532c2b4985b1080e6469859dcd8bbcb256323590d7?trk=public_profile_see-credential" target="_blank" rel="noopener">Project Management Foundations</a> (Project Lifecycle), LinkedIn Learning, 01/2025`,
      de: `<a href="https://www.nobledesktop.com/credentials/3cae7536-0dd8-4416-bdcb-2596fbe6b574?trk=public_profile_see-credential" target="_blank" rel="noopener">Projektmanagement Level 1</a> (Grundlagen, Initiierung &amp; Planung), Noble Desktop (Design &amp; Coding School), New York, USA, 06/2025<br />
        <a href="https://www.nobledesktop.com/credentials/cc5f7991-598b-4b75-a5d6-aefcee95a8d7?trk=public_profile_see-credential" target="_blank" rel="noopener">Projektmanagement Level 2</a> (Teams, Kosten, Umsetzung, Abschluss, Risiko &amp; Agilität), Noble Desktop (Design &amp; Coding School), New York, USA, 06/2025<br />
        <a href="https://www.linkedin.com/learning/certificates/e96a8f9beb9e1d5fc1b296532c2b4985b1080e6469859dcd8bbcb256323590d7?trk=public_profile_see-credential" target="_blank" rel="noopener">Grundlagen des Projektmanagements</a> (Projektlebenszyklus), LinkedIn Learning, 01/2025`,
    },

    // ---------- wireless-communication.html ----------
    "doc.title.wireless": { en: "Wireless Communication | Parva Yazdani", de: "Drahtlose Kommunikation | Parva Yazdani" },
    "wl.h1": { en: "Wireless Communication", de: "Drahtlose Kommunikation" },
    "wl.intro": {
      en: `Where it started: from student research assistant and a VDI award-winning
        master's thesis into the wireless
        industrial communication team, through to contributing to cross-organizational research
        projects and current concept work.`,
      de: `Wo alles begann: von der studentischen Hilfskraft und einer mit dem
        VDI-Förderpreis ausgezeichneten Masterarbeit ins Team für drahtlose industrielle Kommunikation, bis hin zur
        Mitarbeit an organisationsübergreifenden Forschungsprojekten und aktueller
        Konzeptarbeit.`,
    },
    "wl.5g.subtitle": {
      en: '"5G Industrial Working and Co-Working Space" (funded research project)',
      de: '„5G Industrial Working and Co-Working Space" (gefördertes Forschungsprojekt)',
    },
    "wl.5g.context": {
      en: `Deploying a dedicated non-public 5G network is expensive for a single company.
        5GiwCow investigated whether co-located companies at the Technology Park Ostfalen could share one non-public 5G network (operated by local
        provider TELEPORT) across very different applications: welding-robot
        programming, fuel-cell test-bench automation, video-based material-flow
        monitoring, and remote robot control. Funded by Germany's Federal Ministry of
        Transport and Digital Infrastructure.`,
      de: `Der Aufbau eines eigenen nicht-öffentlichen 5G-Netzes ist für ein einzelnes
        Unternehmen teuer. 5GiwCow untersuchte, ob am Technologiepark Ostfalen ansässige Unternehmen ein nicht-öffentliches 5G-Netz (betrieben vom
        lokalen Anbieter TELEPORT) gemeinsam für sehr unterschiedliche Anwendungen nutzen
        können: Programmierung von Schweißrobotern, Automatisierung von
        Brennstoffzellen-Prüfständen, videobasierte Materialflussüberwachung und
        Fernsteuerung von Robotern. Gefördert vom Bundesministerium für Digitales und
        Verkehr.`,
    },
    "wl.chip.5gnr": { en: "5G NR channel modeling", de: "5G-NR-Kanalmodellierung" },
    "wl.chip.rs": { en: "Rohde &amp; Schwarz TSMA measurements", de: "Rohde &amp; Schwarz TSMA-Messungen" },
    "wl.5g.outcome": {
      en: `The project delivered a UML-based model of the shared wireless industrial
        automation system and <strong>VANSIM</strong>, a 5G network simulation platform,
        calibrated and validated against real drive-test measurements. Simulated signal
        strength closely matched the measurements. These results were published as a paper
        and presented at the 24th VDI Congress AUTOMATION 2023: P. Yazdani, G. Cainelli,
        L. Underberg, <em><a href="https://www.researchgate.net/publication/372042140_Shared_5G_campus_network_in_industrial_working_and_co-working_spaces" target="_blank" rel="noopener">"Shared 5G campus network in industrial working and co-working spaces."</a></em> The simulated transmission time, by contrast, did not match
        the measurements, because the processing time of the communication devices was not
        measured and therefore not considered in the model. This gap prompted the <a href="#proj-vansim">extended
        VANSIM concept</a>.`,
      de: `Das Projekt lieferte ein UML-basiertes Modell des gemeinsam genutzten
        drahtlosen industriellen Automatisierungssystems sowie <strong>VANSIM</strong>, eine
        anhand realer Messfahrten kalibrierte und validierte Simulationsplattform zur
        5G-Netzwerksimulation. Die simulierte Signalstärke stimmte gut mit den Messwerten aus
        den Messfahrten überein. Diese Ergebnisse wurden als Fachartikel veröffentlicht und
        auf dem 24. VDI-Kongress AUTOMATION 2023 präsentiert: P. Yazdani, G. Cainelli,
        L. Underberg, <em><a href="https://www.researchgate.net/publication/372042140_Shared_5G_campus_network_in_industrial_working_and_co-working_spaces" target="_blank" rel="noopener">„Shared 5G campus network in industrial working and co-working spaces.“</a></em> Die ebenfalls simulierte Übertragungszeit stimmte dagegen
        nicht mit den Messungen überein, da die Verarbeitungszeit der Kommunikationsgeräte
        nicht gemessen und daher im Modell nicht berücksichtigt wurde. Diese Lücke gab den
        Anstoß für das <a href="#proj-vansim">erweiterte VANSIM-Konzept</a>.`,
    },
    "wl.vansim.title": { en: "VANSIM: extended concept", de: "VANSIM: erweitertes Konzept" },
    "wl.vansim.subtitle": {
      en: "Follow-up project proposal, building on the VANSIM simulation platform delivered in 5GiwCow",
      de: "Folgeantrag, aufbauend auf der in 5GiwCow entwickelten VANSIM-Simulationsplattform",
    },
    "wl.vansim.context": {
      en: `VANSIM started as the 5G network simulation platform delivered within
        <a href="#proj-5giwcow">5GiwCow</a>, built on OMNeT++/Simu5G and validated against real
        drive tests at the Technology Park Ostfalen, recorded with the Rohde &amp; Schwarz TSMA mobile network scanner. The goal of the extended concept is to increase
        system reliability by reducing the planning gaps between simulation and reality.
        The main part of the concept is an AI-based error and time behavior model: a
        model is to be trained on measurement data captured under defined, reproducible
        influence factors and application requirements, to reproduce the time and error
        behavior of relevant applications and infrastructure components and to estimate
        it under various conditions, so that continuous measurements are not necessary.
        For the training phase, devices at the application interface are to be measured,
        including hardware and firmware, capturing the communication behavior of
        potential applications (data lengths, transmission cycles, aperiodic
        transmissions, transport protocols) and environment influences such as other
        radio communication systems, frequency spectrum utilization, electromagnetic
        emitters (e.g. microwaves or RFID), signal strength, and multipath propagation.`,
      de: `VANSIM entstand als die im Rahmen von <a href="#proj-5giwcow">5GiwCow</a> entwickelte Simulationsplattform
        zur 5G-Netzwerksimulation, aufgebaut auf OMNeT++/Simu5G und
        validiert anhand realer Messfahrten am Technologiepark Ostfalen mit dem Mobilfunk-Netzscanner TSMA von
        Rohde &amp; Schwarz. Ziel des erweiterten Konzepts
        ist die Steigerung der Systemzuverlässigkeit durch Reduktion der Planungslücken
        zwischen Simulation und Realität.
        Hauptbestandteil des Konzepts ist ein KI-basiertes Fehler- und
        Zeitverhaltensmodell: Ein Modell soll mit unter definierten, reproduzierbaren
        Einflussgrößen und Anwendungsanforderungen erfassten Messdaten trainiert werden,
        um das Zeit- und Fehlerverhalten relevanter Anwendungen und
        Infrastrukturkomponenten abzubilden und unter verschiedenen Bedingungen
        einzuschätzen, sodass keine kontinuierlichen Messungen notwendig sind. In der
        Trainingsphase sollen Geräte an der Anwendungsschnittstelle einschließlich
        Hardware und Firmware vermessen werden; dabei soll das Kommunikationsverhalten
        potenzieller Anwendungen (Datenlängen, Übertragungszyklen, azyklische
        Übertragungen, Transportprotokolle) sowie Umgebungseinflüsse wie andere
        Funkkommunikationssysteme, Auslastung des Frequenzspektrums, elektromagnetische
        Störer (z. B. Mikrowellen oder RFID), Signalstärke und Mehrwegeausbreitung
        erfasst werden.`,
    },
    "wl.vansim.outcome": {
      en: `The project idea was developed into a complete concept for the follow-up
        funding proposal. The acquisition itself (project consortium and funding
        submission) is described under
        <a href=\"project-management.html#proj-acquisition\">Project Acquisition &amp; Consortium Leadership</a>.`,
      de: `Aus der Projektidee wurde ein vollständiges Konzept für den Folgeantrag
        entwickelt. Die Akquise selbst (Projektkonsortium und Antragseinreichung) ist
        unter
        <a href=\"project-management.html#proj-acquisition\">Projektakquise &amp; Konsortialführung</a> beschrieben.`,
    },
    "wl.whitepaper.subtitle": {
      en: "Editorial leadership of a whitepaper translating 5G research into 6G recommendations",
      de: "Redaktionelle Leitung eines Whitepapers, das 5G-Forschung in 6G-Empfehlungen überführt",
    },
    "wl.whitepaper.context": {
      en: "As we move to 6G, it is important to pay attention to the challenges faced in 5G and learn from them. This work offers exactly that: it gathers expert opinions and project experiences into a systematic documentation of challenges, lessons and actionable design principles.",
      de: "Auf dem Weg zu 6G ist es wichtig, die bei 5G aufgetretenen Herausforderungen zu beachten und aus ihnen zu lernen. Genau das leistet diese Arbeit: Sie bündelt Expertenmeinungen und Projekterfahrungen zu einer systematischen Dokumentation von Herausforderungen, Lehren und handlungsleitenden Designprinzipien.",
    },
    "wl.whitepaper.outcome": {
      en: "A whitepaper published in January 2026 on the website of the 6G Platform Germany (<a href=\"https://www.6g-platform.com/whitepaper/\" target=\"_blank\" rel=\"noopener\">6g-platform.com/whitepaper</a>), with one editor, four authors and 15 contributors from industry and research, endorsed by eight further experts. Based on an expert survey, literature review, standards and real-world non-public network deployments, it documents the main 5G bottlenecks: high deployment costs, complex configuration and unavailable 5G functions. From these, it derives seven actionable recommendations for 6G: from modular network architecture and guaranteed backward compatibility to native L2 support, AI-driven automation, standardised interoperability testing, aligned standardisation roadmaps and continued R&amp;D investment. The survey results (figures, reports and raw data) are published at <a href=\"https://github.com/ParvaYazdani/WG3_6GPlatform_SurveyResults\" target=\"_blank\" rel=\"noopener\">github.com/ParvaYazdani/WG3_6GPlatform_SurveyResults</a>.",
      de: "Ein Whitepaper, veröffentlicht im Januar 2026 auf der Website der 6G-Plattform (<a href=\"https://www.6g-platform.com/whitepaper/\" target=\"_blank\" rel=\"noopener\">6g-platform.com/whitepaper</a>), mit einer Herausgeberin, vier Autoren und 15 Mitwirkenden aus Industrie und Forschung; acht weitere Fachleute befürworten es. Auf Basis einer Expertenumfrage, Literaturrecherche, Standards und realer Einsätze nicht-öffentlicher Netze dokumentiert es die zentralen 5G-Hindernisse: hohe Bereitstellungskosten, komplexe Konfiguration und fehlende 5G-Funktionen. Daraus leitet es sieben umsetzbare Empfehlungen für 6G ab: von modularer Netzarchitektur und garantierter Abwärtskompatibilität bis hin zu nativem L2-Support, KI-gestützter Automatisierung, standardisierten Interoperabilitätstests, abgestimmten Standardisierungsfahrplänen und kontinuierlicher F&amp;E-Investition. Die Umfrageergebnisse (Abbildungen, Berichte und Rohdaten) sind unter <a href=\"https://github.com/ParvaYazdani/WG3_6GPlatform_SurveyResults\" target=\"_blank\" rel=\"noopener\">github.com/ParvaYazdani/WG3_6GPlatform_SurveyResults</a> veröffentlicht.",
    },
    "wl.whitepaper.posterCaption": { en: "Poster presented at the EUCNC &amp; 6G Summit in Málaga in June 2026.", de: "Poster präsentiert auf dem EUCNC &amp; 6G Summit in Málaga im Juni 2026." },
    "wl.whitepaper.posterAlt": {
      en: "Open the poster presented at the EUCNC &amp; 6G Summit in Málaga in June 2026 in a new tab",
      de: "Poster vom EUCNC &amp; 6G Summit in Málaga im Juni 2026 in einem neuen Tab öffnen",
    },
    "wl.thesis.title": {
      en: "Industrial Wireless Communication Modeling &amp; Simulation",
      de: "Modellierung &amp; Simulation industrieller drahtloser Kommunikation",
    },
    "wl.thesis.subtitle": {
      en: "Digital twin for an Industry 4.0 negotiation scenario",
      de: "Digitaler Zwilling für ein Industrie-4.0-Verhandlungsszenario",
    },
    "wl.thesis.context": {
      en: "In Industry 4.0, wireless communication systems have to adapt themselves to changing production requirements instead of being planned for the worst case. For this, the production system and the wireless communication system need to exchange data so that communication resources can be managed efficiently.",
      de: "In der Industrie 4.0 müssen sich drahtlose Kommunikationssysteme an veränderte Produktionsanforderungen anpassen, statt für den Worst Case ausgelegt zu sein. Dafür müssen Produktionssystem und drahtloses Kommunikationssystem Daten austauschen, um Kommunikationsressourcen effizient zu verwalten.",
    },
    "wl.thesis.outcome": {
      en: `The master's thesis <em><a href="assets/Wireless_Industry_4_0_Negotiation_Scenario.pdf" target="_blank" rel="noopener">"Wireless Industry 4.0
        Negotiation Scenario"</a></em> (May 2022) developed a digital twin of an
        Industry 4.0 negotiation scenario in OMNeT++ based on the Asset Administration Shell. Through this administration shell, industrial assets exchange data with the wireless
        system manager in the wireless communication system, which can then keep the use of the wireless medium at an
        efficient level. The thesis also generated the basic module for communication
        models in SIMBA and documented a roadmap for porting the scenario from OMNeT++
        to SIMBA. SIMBA is a simulation environment developed by the Institut für Automation
        und Kommunikation e.V. (ifak e.V.) in Magdeburg for model-based
        solutions in the water, wastewater and biogas sectors, originally not designed for
        communication models. The results were published as a paper and presented at the 17th EKA
        2022 conference: P. Yazdani, G. Cainelli,
        <em><a href="https://www.researchgate.net/publication/381551869_Managing_communication_resources_based_on_production_requirements_in_an_Industry_40_scenario_using_a_digital_twin_approach" target="_blank" rel="noopener">"Managing communication resources based on production requirements in an Industry 4.0 scenario using a digital twin approach."</a></em>
        Awarded the VDI sponsorship award for master's theses.`,
      de: `Die Masterarbeit <em><a href="assets/Wireless_Industry_4_0_Negotiation_Scenario.pdf" target="_blank" rel="noopener">„Wireless Industry 4.0
        Negotiation Scenario"</a></em> (Mai 2022) entwickelte einen digitalen Zwilling
        eines Industrie-4.0-Verhandlungsszenarios in OMNeT++ auf Basis der Asset
        Administration Shell. Über diese Verwaltungsschale tauschen industrielle Assets Daten mit
        einem drahtlosen Systemmanager im drahtlosen Kommunikationssystem aus, das die
        Nutzung des drahtlosen Mediums dadurch effizient halten kann. Darüber hinaus
        wurde das Basismodul für Kommunikationsmodelle in SIMBA erzeugt und ein Fahrplan
        für die Portierung des Szenarios von OMNeT++ nach SIMBA dokumentiert. SIMBA ist eine vom Institut für Automation und
        Kommunikation e.V. (ifak e.V.) in Magdeburg entwickelte Simulationsumgebung für modellbasierte Lösungen in der Wasser-, Abwasser- und
        Biogasbranche, die ursprünglich nicht für Kommunikationsmodelle ausgelegt war. Die Ergebnisse
        wurden als Fachartikel veröffentlicht und auf der 17. Fachtagung EKA 2022
        präsentiert: P. Yazdani, G. Cainelli,
        <em><a href="https://www.researchgate.net/publication/381551869_Managing_communication_resources_based_on_production_requirements_in_an_Industry_40_scenario_using_a_digital_twin_approach" target="_blank" rel="noopener">„Managing communication resources based on production requirements in an Industry 4.0 scenario using a digital twin approach."</a></em>
        Ausgezeichnet mit dem VDI-Förderpreis für Masterarbeiten.`,
    },

    "wl.arch.title": { en: "Generalized Architecture for Joint Optimization of Communication and Control System", de: "Generalisierte Architektur zur gemeinsamen Optimierung von Kommunikations- und Regelungssystemen" },
    "wl.arch.subtitle": { en: "Joint communication and control co-design", de: "Gemeinsames Design von Kommunikation und Regelung" },
    "wl.arch.context": {
      en: "Industrial automation increasingly requires tight integration between wireless communication and control systems. Joint optimization addresses the interdependence between communication performance and control stability by treating them as coupled systems rather than optimizing them separately.",
      de: "Die industrielle Automatisierung erfordert zunehmend eine tiefe Integration von drahtloser Kommunikation und Regelungssystemen. Die gemeinsame Optimierung berücksichtigt die Wechselwirkung zwischen Kommunikationsleistung und Regelungsstabilität, indem sie diese als gekoppelte Systeme behandelt, anstatt sie getrennt zu optimieren."
    },
    "wl.arch.outcome": {
      en: `The work presents a generalized architecture for the joint optimization of communication and control systems. In 2023, the Industrial Radio Lab Germany held its workshops for young researchers at Industrial Radio Day in Bremen (<a href="https://industrial-radio-lab.eu/2023/08/08/workshops-fuer-junge-forschende-beim-industrial-radio-day-2023-in-bremen/" target="_blank" rel="noopener">link</a>); I led the workshop on Communication and Control Co-Design (CoCoCo), where participants exchanged knowledge on the topic. The results were published as a paper and presented as a poster at the IEEE International Conference on Emerging Technologies and Factory Automation (ETFA 2024) in Padova, Italy; I also presented the paper at the next edition of the workshop series, held the day before Industrial Radio Day 2024 in Kaiserslautern: P. Yazdani, L. Underberg, <em><a href="https://www.researchgate.net/publication/384341737_Generalized_Architecture_for_Joint_Optimization_of_Communication_and_Control_System" target="_blank" rel="noopener">"Generalized Architecture for Joint Optimization of Communication and Control System."</a></em>`,
      de: `Die Arbeit stellt eine generalisierte Architektur zur gemeinsamen Optimierung von Kommunikations- und Regelungssystemen vor. Im Jahr 2023 veranstaltete das Industrial Radio Lab Germany beim Industrial Radio Day in Bremen seine Workshops für Nachwuchsforschende (<a href="https://industrial-radio-lab.eu/2023/08/08/workshops-fuer-junge-forschende-beim-industrial-radio-day-2023-in-bremen/" target="_blank" rel="noopener">Link</a>); ich leitete den Workshop zu Communication and Control Co-Design (CoCoCo), in dem die Teilnehmenden ihr Wissen zum Thema austauschten. Die Ergebnisse wurden als Fachartikel veröffentlicht und als Poster auf der IEEE International Conference on Emerging Technologies and Factory Automation (ETFA 2024) in Padua, Italien, präsentiert; außerdem habe ich das Paper bei der Fortsetzung der Workshop-Reihe am Vortag des Industrial Radio Day 2024 in Kaiserslautern vorgestellt: P. Yazdani, L. Underberg, <em><a href="https://www.researchgate.net/publication/384341737_Generalized_Architecture_for_Joint_Optimization_of_Communication_and_Control_System" target="_blank" rel="noopener">„Generalized Architecture for Joint Optimization of Communication and Control System.“</a></em>`
    },

    // ---------- ai-engineering.html ----------
    "doc.title.ai": { en: "AI Engineering | Parva Yazdani", de: "KI-Engineering | Parva Yazdani" },
    "ai.h1": { en: "AI Engineering", de: "KI-Engineering" },
    "ai.intro": {
      en: `Since moving from the wireless industrial communication team into the automation &amp;
        digitalisation team, I've started building
        LLM agents and RAG systems. So far this includes two tools: a document search agent
        built as a demo, and a contract review agent requested by contract management in the finance department. We
        worked out with that team what they really needed and then built the tool, which is now in
        use. Looking ahead, I want to deepen my
        expertise in Generative AI Engineering and gain more experience bringing tools into
        production end to end.`,
      de: `Seit meinem Wechsel aus dem Team für drahtlose industrielle Kommunikation ins Team für
        Automatisierung &amp; Digitalisierung habe ich begonnen,
        LLM-Agenten und RAG-Systeme zu entwickeln. Bisher sind daraus zwei Tools entstanden:
        ein Agent für die Dokumentensuche als Demo und ein Agent für die Vertragsprüfung auf
        Anfrage des Vertragsmanagements der Finanzabteilung. Gemeinsam mit diesem Team haben wir geklärt, was tatsächlich
        gebraucht wird, und daraufhin das Tool entwickelt. Es ist inzwischen im Einsatz.
        Perspektivisch möchte ich meine Expertise im Engineering generativer KI vertiefen und mehr Erfahrung darin sammeln, Tools end-to-end in den
        Produktivbetrieb zu überführen.`,
    },
    "ai.timelineTitle": { en: "Timeline: Jan 2026 to present", de: "Zeitleiste: Januar 2026 bis heute" },
    "ai.tl1.title": { en: "Document Intelligence Agent: first RAG demo built", de: "Document Intelligence Agent: erste RAG-Demo erstellt" },
    "ai.tl1.note": {
      en: "Early adoption of embedding-based retrieval and a local vector database, ahead of it becoming a default choice.",
      de: "Frühe Nutzung von Embedding-basiertem Retrieval und einer lokalen Vektordatenbank, bevor dies zum Standardansatz wurde.",
    },
    "ai.tl2.title": { en: "Contract Manager Agent: first version built and rolled out", de: "Contract Manager Agent: erste Version entwickelt und eingeführt" },
    "ai.tl2.note": {
      en: "Requirements clarified together at the request of contract management, then built and rolled out into production.",
      de: "Auf Anfrage des Vertragsmanagements gemeinsam die Anforderungen geklärt, umgesetzt und anschließend produktiv eingeführt.",
    },
    "ai.tl3.title": { en: "Project Management Framework: first draft introduced, in development", de: "Projektmanagement-Framework: erster Entwurf eingeführt, in Weiterentwicklung" },
    "ai.tl3.note": {
      en: "Documentation framework and Claude Code skills for coding agents, validated in a real paper-writing project.",
      de: "Dokumentationsframework und Claude-Code-Skills für Coding Agents, in einem realen Fachartikel-Projekt validiert.",
    },
    "ai.tl4.title": { en: "ConvAssist: proposal submitted", de: "ConvAssist: Antrag eingereicht" },
    "ai.tl4.note": {
      en: "Idea developed into a full research project with consortium, and the proposal submitted to a funding call.",
      de: "Idee zu einem vollständigen Forschungsprojekt mit Konsortium entwickelt und den Antrag bei einer Förderausschreibung eingereicht.",
    },
    "ai.tl5.title": { en: "OOAD Agentic Skills: first draft introduced, in development", de: "OOAD Agentic Skills: erster Entwurf eingeführt, in Weiterentwicklung" },
    "ai.tl5.note": { en: "A skill set that guides coding agents through an object-oriented analysis and design workflow.", de: "Ein Skill-Set, das Coding Agents durch einen Workflow für objektorientierte Analyse und Design führt." },

    "ai.convassist.subtitle": {
      en: "LLM-based conversational care assistant for people with chronic conditions such as Alzheimer's",
      de: "LLM-basierter konversationeller Pflegeassistent für Menschen mit chronischen Erkrankungen wie Alzheimer",
    },
    "ai.convassist.context": {
      en: "People with chronic conditions such as Alzheimer's who want to stay at home are cared for alternately by family members and professional caregivers. Coordination is hard: reminders such as medication, meals, and drinking are missed, phone calls become difficult, and information between relatives and care services is passed on through calls, messengers, or notes that get lost or reach the wrong person.",
      de: "Menschen mit chronischen Erkrankungen wie Alzheimer, die zu Hause bleiben möchten, werden abwechselnd von Angehörigen und professionellen Pflegekräften betreut. Die Koordination ist schwierig: Erinnerungen wie Medikamente, Mahlzeiten und Trinken werden verpasst, Telefonate werden mühsam, und Informationen zwischen Angehörigen und Pflegedienst laufen über Anrufe, Messenger oder Zettel, die verloren gehen oder die falsche Person erreichen.",
    },
    "ai.convassist.solution": {
      en: "ConvAssist is an LLM-based conversational assistant that the affected person talks to in natural language, on a dedicated device with voice, video and touch interaction. It gives calendar-based reminders (medication, meals, drinking, appointments) and connects relatives and care services through shared apps, so information reaches the right person. Optional extensions add wearable-based health monitoring and automatic emergency alerting.",
      de: "ConvAssist ist ein LLM-basierter konversationeller Assistent, mit dem die betroffene Person in natürlicher Sprache spricht, auf einem eigenen Gerät mit Sprach-, Video- und Touch-Bedienung. Er gibt kalendergestützte Erinnerungen (Medikamente, Mahlzeiten, Trinken, Termine) und verbindet Angehörige und Pflegedienst über gemeinsame Apps, sodass Informationen die richtige Person erreichen. Optionale Erweiterungen ergänzen Gesundheitsüberwachung über Wearables und automatische Notfall-Alarmierung.",
    },
    "ai.convassist.outcome": {
      en: `The project idea was developed with the team into a complete concept for the funding proposal.
        The acquisition itself (project consortium and funding submission) is
        described under
        <a href=\"project-management.html#proj-acquisition\">Project Acquisition &amp; Consortium Leadership</a>.`,
      de: `Die Projektidee wurde gemeinsam mit dem Team zu einem vollständigen Konzept für den Förderantrag
        ausgearbeitet. Die Akquise selbst (Projektkonsortium und Antragseinreichung)
        ist unter
        <a href=\"project-management.html#proj-acquisition\">Projektakquise &amp; Konsortialführung</a> beschrieben.`,
    },

    "ai.doc.subtitle": {
      en: "Chat-first, on-prem RAG agent for internal company documents",
      de: "Chat-orientierter On-Prem-RAG-Agent für interne Unternehmensdokumente",
    },
    "ai.doc.context": {
      en: "Internal company knowledge, held in documents of different formats, was spread across a fragmented document repository, so finding information meant searching folders by hand. Because the documents were confidential, sending them to a public-cloud AI service was not an option.",
      de: "Internes Unternehmenswissen in Dokumenten unterschiedlicher Formate war über ein fragmentiertes Dokumentenarchiv verteilt, sodass Informationen manuell in Ordnern gesucht werden mussten. Da die Dokumente vertraulich waren, kam ein öffentlicher Cloud-KI-Dienst nicht infrage.",
    },
    "ai.doc.solution": {
      en: "A conversational agent rather than a keyword search: a directory crawler ingests PDF, Word (DOCX), Excel (XLSX) and PowerPoint (PPTX) files. Content is split into chunks, embedded locally and stored in LanceDB. Each question is embedded as well and matched semantically against the vector store via top-K retrieval; keyword matching is available as an alternative. The retrieved context is passed to a local LLM, which writes a synthesized answer and cites the documents it used; the backend parses those citations and the frontend renders a Reference Documents panel with a clickable link to every original. Access is role-based at folder level: on an admin page, users are assigned roles and each role is granted specific document folders, so the document tree, search and chat only draw on the folders a user may see.",
      de: "Ein dialogorientierter Agent statt einer Stichwortsuche: Ein Verzeichnis-Crawler erfasst PDF-, Word- (DOCX), Excel- (XLSX) und PowerPoint-Dateien (PPTX). Die Inhalte werden in Chunks zerlegt, lokal eingebettet und in LanceDB gespeichert. Jede Frage wird ebenfalls eingebettet und per Top-K-Retrieval semantisch gegen den Vektorspeicher abgeglichen; alternativ ist ein Stichwortabgleich möglich. Der abgerufene Kontext wird an ein lokales LLM übergeben, das eine zusammengefasste Antwort formuliert und die verwendeten Dokumente als Quellen angibt; das Backend parst diese Zitate, und das Frontend zeigt ein Reference-Documents-Panel mit einem klickbaren Link zum jeweiligen Original. Der Zugriff ist rollenbasiert auf Ordnerebene: Auf einer Admin-Seite werden Nutzern Rollen zugewiesen und jeder Rolle bestimmte Dokumentordner freigegeben, sodass Dokumentbaum, Suche und Chat nur auf die Ordner zugreifen, die ein Nutzer sehen darf.",
    },
    "ai.doc.outcome": {
      en: "A fully local pipeline (Ollama, LanceDB) keeps all data on-prem with no license dependencies on external AI providers. Role-based folder access model for multiple users; answers are grounded and cited, giving faster access to internal knowledge and reducing repetitive-question load. The result is a working demo, not yet a production-ready product. The demo was presented in a workshop for regional managers of the Magdeburg Chamber of Industry and Commerce and received interest and positive feedback from a company.",
      de: "Eine vollständig lokale Pipeline (Ollama, LanceDB) hält alle Daten im Unternehmensnetz, ohne Lizenzabhängigkeit von externen KI-Anbietern. Rollenbasiertes Zugriffsmodell auf Ordnerebene für mehrere Benutzer; Antworten sind belegt und mit Quellen versehen, was schnelleren Zugriff auf internes Wissen ermöglicht und die Last wiederkehrender Fragen reduziert. Das Ergebnis ist eine funktionsfähige Demo, noch kein produktionsreifes Produkt. Die Demo wurde in einem Workshop vor Regionalmanagern der Industrie- und Handelskammer (IHK) Magdeburg präsentiert und stieß bei einem Unternehmen auf Interesse und positive Rückmeldung.",
    },
    "ai.doc.figureCaption": {
      en: "User interface of the Document Intelligence Agent.",
      de: "Benutzeroberfläche des Document Intelligence Agent.",
    },
    "ai.doc.figureAlt": {
      en: "Open the Document Intelligence Agent interface screenshot in a new tab",
      de: "Screenshot der Oberfläche des Document Intelligence Agent in einem neuen Tab öffnen",
    },

    "ai.contract.subtitle": {
      en: "AI agent for automated support in contract review",
      de: "KI-Agent zur automatisierten Unterstützung bei der Vertragsprüfung",
    },
    "ai.contract.context": {
      en: `Consortium and research contracts arriving from project partners had to be
        checked clause by clause against the internal standard template, previously signed
        contracts, and contract management's accumulated review comments. This process was
        time-consuming and error-prone. Because contracts are confidential, no external
        AI service was an option, so only small local LLMs could be used.`,
      de: `Konsortial- und Forschungsverträge von Projektpartnern mussten klauselweise
        gegen die interne Standardvorlage, bereits unterzeichnete Verträge und die gesammelten
        Prüfkommentare des Vertragsmanagements abgeglichen werden. Dieser Prozess war
        zeitaufwendig und fehleranfällig. Da Verträge vertraulich sind, kam kein
        externer KI-Dienst infrage; einsetzbar waren nur kleine lokale LLMs.`,
    },
    "ai.contract.solution": {
      en: `Two approaches were implemented. The first version passes the whole contract to a
        local LLM. The second is a deterministic pipeline that limits each LLM evaluation to
        one clause and its best template matches:
        <br />• <strong>Parser</strong>: splits the contract into clauses and extracts
        comments and tracked changes with their text anchors via direct Office XML
        access, turning past review comments into structured knowledge.
        <br />• <strong>Similarity matcher</strong>: embeds every clause with a
        multilingual sentence-transformer and
        computes a pairwise cosine-similarity matrix against the knowledge base; tiered
        thresholds (strong / moderate / weak) select candidate counterparts per clause
        and flag clauses with no match.
        <br />• <strong>Evaluator</strong>: a locally hosted LLM judges which candidates
        truly correspond to the clause and returns risk level, finding type, a comment
        ready for the counterparty, a suggested reformulation and an internal source
        note. A deterministic step then combines all findings into an overall risk
        score and approval recommendation.`,
      de: `Umgesetzt wurden zwei Ansätze. Die erste Version übergibt den gesamten Vertrag an ein
        lokales LLM. Der zweite Ansatz ist eine deterministische Pipeline, die jede
        LLM-Bewertung auf eine Klausel und ihre besten Treffer aus der Vorlage beschränkt:
        <br />• <strong>Parser</strong>: zerlegt den Vertrag in Klauseln und extrahiert
        Kommentare sowie nachverfolgte Änderungen samt Textankern über direkten Zugriff
        auf Office-XML und macht so frühere Prüfkommentare zu strukturiertem Wissen.
        <br />• <strong>Ähnlichkeitsabgleich</strong>: bettet jede Klausel mit einem
        mehrsprachigen Sentence-Transformer ein
        und berechnet eine paarweise Kosinus-Ähnlichkeitsmatrix gegenüber der
        Wissensbasis; gestufte Schwellenwerte (stark / mittel / schwach) wählen
        für jede Klausel mögliche Entsprechungen aus und markieren Klauseln ohne Treffer.
        <br />• <strong>Evaluator</strong>: ein lokal gehostetes LLM beurteilt, welche
        dieser Entsprechungen tatsächlich zur Klausel passen, und liefert Risikoeinstufung,
        Befundtyp, einen für die Gegenseite fertigen Kommentar, einen
        Formulierungsvorschlag und einen internen Quellenhinweis. Ein deterministischer
        Schritt fasst anschließend alle Befunde zu einem Gesamtrisiko-Score und einer
        Freigabeempfehlung zusammen.`,
    },
    "ai.contract.chip.localLLM": {
      en: "Local LLM (llama.cpp / Ollama)",
      de: "Lokales LLM (llama.cpp / Ollama)",
    },
    "ai.contract.outcome": {
      en: `The tool was specified together with contract management and is in productive use
        there; the team finds it useful. Reviewers get an assessment with a ready-to-send
        comment and source reference for each clause. As an on-premise application, it keeps
        all processing within the internal network. The clause-by-clause approach works as well; a
        systematic comparison of both approaches, involving the users, is still pending.`,
      de: `Das Tool wurde gemeinsam mit dem Vertragsmanagement spezifiziert und ist dort
        produktiv im Einsatz; das Team schätzt es als hilfreich ein. Prüfende erhalten für
        jede Klausel eine Bewertung mit versandfertigem Kommentar und Quellenangabe. Als
        On-Premise-Anwendung hält es die gesamte Verarbeitung im internen Netzwerk.
        Der klauselweise Ansatz ist ebenfalls funktionsfähig; ein systematischer Vergleich
        beider Ansätze unter Einbindung der Nutzenden steht noch aus.`,
    },
    "ai.contract.figureCaption": {
      en: "Pipeline of the clause-by-clause approach as a UML activity diagram: parsing, matching and risk aggregation run deterministically, only the per-clause evaluation uses the local LLM.",
      de: "Pipeline des klauselweisen Ansatzes als UML-Aktivitätsdiagramm: Parsing, Abgleich und Risikoaggregation laufen deterministisch, nur die Bewertung je Klausel nutzt das lokale LLM.",
    },
    "ai.contract.figureAlt": {
      en: "Open the Contract Manager Agent pipeline diagram in a new tab",
      de: "Das Pipeline-Diagramm des Contract Manager Agent in einem neuen Tab öffnen",
    },

    "ai.framework.subtitle": {
      en: "Project management framework with reusable agent skills for consistent, traceable and AI-assisted project records",
      de: "Projektmanagement-Framework mit wiederverwendbaren Agent Skills für eine konsistente, nachvollziehbare und KI-gestützte Projektdokumentation",
    },
    "ai.framework.context": {
      en: "Research and engineering projects accumulate critical knowledge, rationale, decisions, and meeting outcomes in ad-hoc formats. This leads to knowledge loss when team members change, slow onboarding, and an inability to reconstruct why decisions were made.",
      de: "Forschungs- und Engineering-Projekte sammeln kritisches Wissen, Begründungen, Entscheidungen und Meeting-Ergebnisse in Ad-hoc-Formaten. Das führt zu Wissensverlust bei Teamwechseln, langsamem Onboarding und der Unmöglichkeit, nachzuvollziehen, warum Entscheidungen getroffen wurden.",
    },
    "ai.framework.solution": {
      en: "A lifecycle-driven documentation architecture: 11 artifact types (e.g. ADRs, meeting minutes, articles, wiki entries) mapped to 6 project phases, from proposal analysis to evaluation and partner collaboration. A dedicated management repository holds process, decisions, and documentation, while code lives in separate repositories linked from a component index. Append-only ADRs with superseding preserve the full decision history, and cross-references trace decisions to meetings, components, and deliverables. 7 Claude Code skills scaffold each artifact type and enforce the conventions: naming and numbering, placeholders, an orphan policy, and a retrofit path for existing repositories.",
      de: "Eine lebenszyklusgesteuerte Dokumentationsarchitektur: 11 Artefakttypen (z. B. ADRs, Meeting-Protokolle, Artikel, Wiki-Einträge) über 6 Projektphasen, von der Antragsanalyse bis zur Evaluation und Partnerzusammenarbeit. Ein eigenes Management-Repository enthält Prozess, Entscheidungen und Dokumentation; der Code liegt in separaten Repositories, die über einen Komponentenindex verlinkt sind. Append-only ADRs mit Ablösung erhalten die vollständige Entscheidungshistorie, und Querverweise verknüpfen Entscheidungen mit Meetings, Komponenten und Deliverables. 7 Claude-Code-Skills erzeugen jeden Artefakttyp und setzen die Konventionen durch: Benennung und Nummerierung, Platzhalter, eine Orphan-Policy und einen Retrofit-Pfad für bestehende Repositories.",
    },
    "ai.framework.outcome": {
      en: "Validated in a real paper-writing project: the article's drafts, meetings, and decisions stayed traceable in one consistently structured repository. Gaps that surfaced during use were fed back into the templates and skills, and the conventions keep being refined through further real use.",
      de: "In einem realen Projekt zum Verfassen eines Fachartikels validiert: Entwürfe, Meetings und Entscheidungen des Artikels blieben in einem einheitlich strukturierten Repository nachvollziehbar. Lücken, die sich im Einsatz zeigten, flossen in die Vorlagen und Skills zurück, und die Konventionen werden durch weiteren realen Einsatz laufend verfeinert.",
    },
    "ai.framework.structureCaption": {
      en: "Repository structure: skills use the templates, which are instantiated across the project folders.",
      de: "Repository-Struktur: Die Skills nutzen die Vorlagen, die in den Projektordnern instanziiert werden.",
    },
    "ai.framework.structureAlt": {
      en: "Open the repository structure diagram in a new tab",
      de: "Das Diagramm zur Repository-Struktur in einem neuen Tab öffnen",
    },

    "ai.ooda.title": { en: "Object-Oriented Analysis and Design (OOAD) Agentic Skills", de: "Objektorientierte Analyse und Design (OOAD): Agentic Skills" },
    "ai.ooda.subtitle": {
      en: "A skill set that turns single agent skills into an automated OOAD workflow for coding agents.",
      de: "Ein Skill-Set, das einzelne Agent-Skills zu einem automatisierten OOAD-Workflow für Coding Agents verbindet.",
    },
    "ai.ooda.context": {
      en: "As coding agents take on more of the actual implementation work, it gets harder to keep an overview of the code they produce. Keeping that code object-oriented makes it possible to derive class diagrams from it: a comprehensive view of what the agent built, which gives more control over the code and makes code review easier.",
      de: "Da Coding Agents zunehmend die eigentliche Implementierung übernehmen, wird es schwieriger, den Überblick über den erzeugten Code zu behalten. Bleibt dieser Code objektorientiert, lassen sich daraus Klassendiagramme ableiten: eine umfassende Übersicht über das, was der Agent gebaut hat, die mehr Kontrolle über den Code gibt und das Code-Review erleichtert.",
    },
    "ai.ooda.solution": {
      en: `An orchestrator skill runs the workflow. It confirms inputs with the user, runs the
        individual steps in order and passes each result to the next step as a file. Runs
        can therefore be repeated and resumed after context loss. Each step is a skill of
        its own:
        <br />• repository inventory
        <br />• spec conformance against UML diagrams
        <br />• OO-purity audit
        <br />• fix planning, with each fix approved by the user before it's applied
        <br />• class-diagram generation
        <br />The brownfield track audits and refactors existing code. A greenfield track that
        goes from requirements to UML design is in progress.`,
      de: `Ein Orchestrator-Skill steuert den Workflow. Er bestätigt die Eingaben mit dem
        Nutzer, führt die einzelnen Schritte der Reihe nach aus und übergibt das Ergebnis
        jeweils als Datei an den nächsten Schritt. So lassen sich Durchläufe wiederholen und
        nach einem Kontextverlust fortsetzen. Jeder Schritt ist als eigener Skill umgesetzt:
        <br />• Repository-Inventar
        <br />• Spezifikationskonformität gegenüber UML-Diagrammen
        <br />• OO-Reinheits-Audit
        <br />• Fix-Planung, wobei jeder Fix vor der Umsetzung vom Nutzer freigegeben wird
        <br />• Klassendiagramm-Erzeugung
        <br />Die Brownfield-Spur prüft und refaktoriert bestehenden Code. Eine Greenfield-Spur
        von den Anforderungen bis zum UML-Design ist in Arbeit.`,
    },
    "ai.ooda.outcome": {
      en: "7 skills, with a greenfield track in progress, built to the Agent Skills specification. Each skill has its own scripts, references and assets. The skills are harness-agnostic and designed to run in any Agent Skills–compatible harness, such as pi, Claude Code and opencode.",
      de: "7 Skills, nach der Agent-Skills-Spezifikation gebaut; eine Greenfield-Spur ist in Arbeit. Jeder Skill hat eigene Skripte, Referenzen und Assets. Die Skills sind harness-unabhängig und für jeden Agent-Skills-kompatiblen harness ausgelegt, etwa pi, Claude Code und opencode.",
    },
  };

  function detectDefaultLang() {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "de") return stored;
    return "de";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const entry = translations[el.getAttribute("data-i18n")];
      if (!entry) return;
      const value = entry[lang] || entry.en;
      if (el.tagName === "TITLE") {
        el.textContent = value;
      } else {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const entry = translations[el.getAttribute("data-i18n-aria-label")];
      if (!entry) return;
      el.setAttribute("aria-label", entry[lang] || entry.en);
    });

    const toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      toggle.textContent = lang === "en" ? "DE" : "EN";
      toggle.setAttribute(
        "aria-label",
        lang === "en" ? "Zu Deutsch wechseln" : "Switch to English"
      );
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(detectDefaultLang());

    const toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("lang") === "en" ? "de" : "en";
        localStorage.setItem("lang", next);
        applyLang(next);
      });
    }
  });
})();
