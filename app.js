'use strict';
let language = 'fr';
const translations = {
  "fr": {
    "skip": "Aller au contenu",
    "navProjects": "Projets",
    "navApproach": "À propos",
    "navJourney": "Parcours",
    "navContact": "Contact",
    "availability": "PFE · FÉVRIER 2027 · 6 MOIS",
    "heroLine1": "Marouane",
    "heroLine2": "JORIO",
    "heroIntro": "Je suis actuellement en dernière année à l’ENSEIRB-MATMECA, en électronique, avec une spécialisation en traitement du signal et de l’image. Je recherche un stage de fin d’études de 6 mois à partir de février 2027 en Computer Vision et IA.",
    "explore": "Voir mes projets",
    "writeMe": "Me contacter",
    "location": "Bordeaux, France",
    "visualLabel": "NUAGE DE POINTS 3D",
    "artCaption": "Visualisation 3D interactive",
    "strip1": "TRAITEMENT D’IMAGE",
    "strip2": "SYSTÈMES EMBARQUÉS",
    "strip3": "TRAITEMENT DU SIGNAL",
    "projectsEyebrow": "02 / PROJETS",
    "projectsAside": "Projets réalisés dans le cadre de ma formation.",
    "projectsTitle": "Mes projets",
    "filterAll": "Tous <span>02</span>",
    "filterVision": "Image & IA",
    "filterSystems": "Systèmes",
    "acquisitionLabel": "ACQUISITION EMBARQUÉE",
    "internship": "STAGE INGÉNIEUR",
    "novespaceTitle": "Plateforme de mesure en vol",
    "novespaceIntro": "Chez Novespace, j’ai travaillé sur le système d’acquisition de données de l’A310 Zero-G : analyse des mesures, évolution de la plateforme et validation en vol.",
    "realtime": "Temps réel",
    "caseStudy": "Voir le projet",
    "rdInternship": "STAGE R&D",
    "alphanovTitle": "Analyse d’images de fibres optiques",
    "alphanovIntro": "Chez ALPhANOV, j’ai développé une chaîne de traitement pour analyser 10 000 images de barreaux de fibre optique, détecter les objets et mesurer leur diamètre.",
    "imageProcessing": "Traitement d’image",
    "academicProject": "PROJET ACADÉMIQUE",
    "fpgaTitle": "Traitement de données sur FPGA",
    "fpgaIntro": "Projet en binôme sur PYNQ-Z2 : calcul de moyennes mobiles en Python et en VHDL, puis comparaison des temps de traitement et des transferts de données.",
    "inProgress": "EN COURS",
    "deepLearningProject": "PROJET DEEP LEARNING",
    "signsTitle": "Reconnaissance de langue des signes",
    "signsIntro": "Projet en cours : reconnaissance de gestes à partir de séquences de points clés extraites de vidéos, avec Python et PyTorch.",
    "sequences": "Séquences vidéo",
    "projectNote": "Les illustrations des projets sont schématiques.",
    "approachEyebrow": "03 / À PROPOS",
    "approachTitle": "Mes domaines<br>d’intérêt",
    "approachLead": "Je m’intéresse au traitement d’image, à l’analyse de données et aux systèmes embarqués.",
    "approachBody": "J’ai travaillé sur ces sujets pendant mes stages et mes projets, en Python, C et VHDL.",
    "principle1": "Traitement d’image",
    "principle1Body": "Filtrage, seuillage, morphologie mathématique, segmentation et extraction de caractéristiques.",
    "principle2": "Analyse de données",
    "principle2Body": "Analyse de séries temporelles, FFT, statistiques et évaluation des résultats en Python.",
    "principle3": "Systèmes embarqués",
    "principle3Body": "Acquisition de mesures sur ESP32, développement en C et traitement de données sur FPGA en VHDL.",
    "journeyEyebrow": "04 / FORMATION ET COMPÉTENCES",
    "journeyAside": "Physique, électronique, traitement du signal et de l’image.",
    "journeyTitle": "Formation<br>et compétences",
    "journeyIntro": "Après une licence de physique à Limoges, j’ai intégré l’ENSEIRB-MATMECA en électronique. Je suis aujourd’hui en option Traitement du Signal et de l’Image.",
    "degree1": "Diplôme d’ingénieur en électronique<br>Option Traitement du Signal et de l’Image",
    "university": "Université de Limoges",
    "degree2": "Licence de physique<br>Électronique des hautes fréquences et photonique",
    "languagesTitle": "LANGUES",
    "languageArabic": "Arabe",
    "languageNative": "Langue maternelle",
    "languageFrench": "Français",
    "languageEnglish": "Anglais",
    "languageGerman": "Allemand",
    "toolbox": "COMPÉTENCES TECHNIQUES",
    "skillImage": "Image & données",
    "skillSystems": "Systèmes",
    "skillMethods": "Analyse & développement",
    "statistics": "Statistiques",
    "engagement": "En parallèle de mes études, j’ai été responsable relations entreprises au Forum INGÉNIB et intervenant pour la Junior-Entreprise AEI.",
    "contactEyebrow": "05 / CONTACT",
    "contactAvailable": "PFE DÈS FÉVRIER 2027",
    "contactTitle": "Me contacter",
    "contactBody": "Je serais ravi d’échanger avec vous au sujet d’une offre de stage ou de mes projets. Je suis basé à Bordeaux et mobile en France.",
    "footerNote": "Élève ingénieur en électronique · ENSEIRB-MATMECA",
    "backTop": "Retour en haut ↑",
    "talkProject": "Me contacter à propos de ce projet",
    "close": "Fermer",
    "courseworkTitle": "Enseignements en cours",
    "courseworkIntro": "Cette année, je suis ces enseignements dans le cadre de ma spécialisation en Traitement du Signal et de l’Image.",
    "courseworkStatus": "En cours · 2026-2027",
    "courseworkDeepTitle": "Apprentissage profond",
    "courseworkDeep1": "MLP avec NumPy et PyTorch, sur des exemples simples et sur MNIST.",
    "courseworkDeep2": "Entraînement et suivi des résultats avec TensorBoard.",
    "courseworkDeep3": "Réseaux convolutifs (CNN) et fine-tuning de ResNet.",
    "courseworkDeep4": "Réseaux récurrents (RNN) et Transformers.",
    "courseworkDeep5": "Auto-encodeurs variationnels (VAE) et modèles de diffusion.",
    "courseworkVisionTitle": "Vision par ordinateur",
    "courseworkVision1": "Transformations d’images et correction de la distorsion.",
    "courseworkVision2": "Rectification homographique et mosaïque d’images aériennes.",
    "courseworkVision3": "Rectification stéréo et mise en correspondance SGM.",
    "courseworkVision4": "Ajustement de faisceaux (Bundle Adjustment).",
    "courseworkVision5": "Interpolation de vues.",
    "courseworkCnnLink": "Support du TP CNN ↗",
    "courseworkBundleLink": "Support du TP Bundle Adjustment ↗",
    "courseworkSource": "Supports de cours de Guillaume Bourmaud ↗",
    "certificationsTitle": "Certifications",
    "certArm": "Embedded Systems Essentials with Arm",
    "certIbm": "Python Basics for Data Science",
    "certRadio": "Certificat radioamateur",
    "certLaser": "Personne exposée aux risques laser (PERL)",
    "certLlm": "Building Customized LLMs with OpenAI",
    "certLlmTopic": "Formation sur les modèles de langage",
    "courseworkPatternTitle": "Reconnaissance de formes",
    "courseworkPattern1": "Détection de formes par transformée de Hough.",
    "courseworkPattern2": "Descripteurs HOG et LBP, réduction de dimension par ACP.",
    "courseworkPattern3": "Classification non supervisée : CAH et K-means.",
    "courseworkPattern4": "Classification supervisée : LDA, QDA, k-NN et SVM.",
    "courseworkPattern5": "Reconnaissance de caractères et évaluation par matrice de confusion.",
    "courseworkPatternLink": "Supports TSIA2 ↗",
    "courseworkGpuTitle": "Calcul accéléré en C, Python et GPU",
    "courseworkGpu1": "Optimisation de traitements d’image en C et Python.",
    "courseworkGpu2": "Interfaces Python/C avec Cython.",
    "courseworkGpu3": "Parallélisation sur CPU avec OpenMP et sur GPU avec CUDA.",
    "courseworkGpu4": "Filtrage bilatéral et comparaison des temps de calcul.",
    "courseworkGpuLink": "Supports TIMG3 ↗",
    "courseworkAppliedTitle": "Applications du Deep Learning",
    "courseworkApplied1": "Classification d’images avec PyTorch.",
    "courseworkApplied2": "Comparaison de YOLO11 et Faster R-CNN sur PASCAL VOC 2007.",
    "courseworkApplied3": "Analyse des détections correctes et erronées.",
    "courseworkApplied4": "Évaluation : précision, rappel, F1, AP50/AP75 et temps d’inférence.",
    "courseworkAppliedLink": "Supports TS329 ↗",
    "navInternships": "Stages",
    "internshipsEyebrow": "01 / EXPÉRIENCE PROFESSIONNELLE",
    "internshipsTitle": "Mes stages",
    "internshipsAside": "Systèmes embarqués et traitement d’image.",
    "stageDetails": "Voir le stage",
    "stageCode": "Code sur GitHub ↗",
    "stageNovespaceDates": "Juin - septembre 2026",
    "stageNovespaceLocation": "Mérignac, France",
    "stageNovespaceRole": "Stagiaire ingénieur · Systèmes embarqués et analyse de données",
    "stageNovespaceSummary": "Amélioration de la plateforme de mesure de données d’environnement en vol de l’A310 Zero-G.",
    "stageNovespace1": "Analyse des séries temporelles et diagnostic des irrégularités d’acquisition à 10 Hz.",
    "stageNovespace2": "Évolution de la plateforme Linux/Python, diffusion des mesures et validation en vol.",
    "stageSelvaDates": "Juin 2025",
    "stageSelvaLocation": "Limoges, France",
    "stageSelvaRole": "Stagiaire R&D · Systèmes embarqués",
    "stageSelvaSummary": "Développement d’un driver pour l’accéléromètre ADXL355 sur ESP32.",
    "stageSelva1": "Programmation en C sous ESP-IDF et communication I²C.",
    "stageSelva2": "Acquisition de mesures, caractérisation du capteur et analyse fréquentielle par FFT.",
    "stageAlphanovDates": "Février - juillet 2024",
    "stageAlphanovLocation": "Talence, France",
    "stageAlphanovRole": "Stagiaire R&D · Traitement d’image",
    "stageAlphanovSummary": "Analyse automatique de 10 000 images de barreaux de fibre optique sur un banc optique motorisé.",
    "stageAlphanov1": "Seuillage, morphologie mathématique et composantes connexes pour détecter et mesurer les objets.",
    "stageAlphanov2": "Interface Python/PyQt5 pour l’acquisition, le traitement et l’affichage en temps réel.",
    "internshipFigureNote": "Les illustrations sont schématiques."
  },
  "en": {
    "skip": "Skip to content",
    "navProjects": "Projects",
    "navApproach": "About",
    "navJourney": "Background",
    "navContact": "Contact",
    "availability": "FINAL-YEAR INTERNSHIP · FEB 2027 · 6 MONTHS",
    "heroLine1": "Marouane",
    "heroLine2": "JORIO",
    "heroIntro": "I’m in my final year of electronics engineering at ENSEIRB-MATMECA, specialising in Signal and Image Processing. I’m looking for a six-month final-year internship in Computer Vision and AI, starting in February 2027.",
    "explore": "View my projects",
    "writeMe": "Get in touch",
    "location": "Bordeaux, France",
    "visualLabel": "3D POINT CLOUD",
    "artCaption": "Interactive 3D visualisation",
    "strip1": "IMAGE PROCESSING",
    "strip2": "EMBEDDED SYSTEMS",
    "strip3": "SIGNAL PROCESSING",
    "projectsEyebrow": "02 / PROJECTS",
    "projectsAside": "Projects completed as part of my studies.",
    "projectsTitle": "My projects",
    "filterAll": "All <span>02</span>",
    "filterVision": "Image & AI",
    "filterSystems": "Systems",
    "acquisitionLabel": "EMBEDDED DATA ACQUISITION",
    "internship": "ENGINEERING INTERNSHIP",
    "novespaceTitle": "In-flight measurement platform",
    "novespaceIntro": "At Novespace, I worked on the A310 Zero-G data acquisition system: analysing measurements, updating the platform and testing it in flight.",
    "realtime": "Real time",
    "caseStudy": "View project",
    "rdInternship": "R&D INTERNSHIP",
    "alphanovTitle": "Optical fibre image analysis",
    "alphanovIntro": "At ALPhANOV, I developed a processing pipeline to analyse 10,000 optical fibre rod images, detect objects and measure their diameters.",
    "imageProcessing": "Image processing",
    "academicProject": "ACADEMIC PROJECT",
    "fpgaTitle": "Data processing on an FPGA",
    "fpgaIntro": "A two-person project on the PYNQ-Z2: calculating moving averages in Python and VHDL, then comparing processing times and data transfers.",
    "inProgress": "IN PROGRESS",
    "deepLearningProject": "DEEP LEARNING PROJECT",
    "signsTitle": "Sign language recognition",
    "signsIntro": "Ongoing project: recognising gestures from sequences of keypoints extracted from videos, using Python and PyTorch.",
    "sequences": "Video sequences",
    "projectNote": "The project illustrations are schematic.",
    "approachEyebrow": "03 / ABOUT",
    "approachTitle": "Areas of<br>interest",
    "approachLead": "I am interested in image processing, data analysis and embedded systems.",
    "approachBody": "I have worked on these topics during my internships and projects, using Python, C and VHDL.",
    "principle1": "Image processing",
    "principle1Body": "Filtering, thresholding, mathematical morphology, segmentation and feature extraction.",
    "principle2": "Data analysis",
    "principle2Body": "Time series analysis, FFT, statistics and evaluation of results in Python.",
    "principle3": "Embedded systems",
    "principle3Body": "Measurement acquisition on ESP32, C development and FPGA data processing in VHDL.",
    "journeyEyebrow": "04 / EDUCATION AND SKILLS",
    "journeyAside": "Physics, electronics, signal and image processing.",
    "journeyTitle": "Education<br>and skills",
    "journeyIntro": "After a physics degree in Limoges, I joined ENSEIRB-MATMECA to study electronics engineering. I am now specialising in Signal and Image Processing.",
    "degree1": "Engineering degree in electronics<br>Specialisation in Signal and Image Processing",
    "university": "University of Limoges",
    "degree2": "BSc in Physics<br>High-frequency electronics and photonics",
    "languagesTitle": "LANGUAGES",
    "languageArabic": "Arabic",
    "languageNative": "Native",
    "languageFrench": "French",
    "languageEnglish": "English",
    "languageGerman": "German",
    "toolbox": "TECHNICAL SKILLS",
    "skillImage": "Image & data",
    "skillSystems": "Systems",
    "skillMethods": "Analysis & development",
    "statistics": "Statistics",
    "engagement": "Alongside my studies, I was responsible for corporate relations at Forum INGÉNIB and worked with the AEI Junior Enterprise.",
    "contactEyebrow": "05 / CONTACT",
    "contactAvailable": "INTERNSHIP FROM FEB 2027",
    "contactTitle": "Get in touch",
    "contactBody": "I would be happy to discuss an internship opportunity or my projects. I’m based in Bordeaux and open to opportunities across France.",
    "footerNote": "Electronics engineering student · ENSEIRB-MATMECA",
    "backTop": "Back to top ↑",
    "talkProject": "Contact me about this project",
    "close": "Close",
    "courseworkTitle": "Current coursework",
    "courseworkIntro": "This year, I am taking these courses as part of my specialisation in Signal and Image Processing.",
    "courseworkStatus": "In progress · 2026-2027",
    "courseworkDeepTitle": "Deep learning",
    "courseworkDeep1": "MLPs with NumPy and PyTorch, using simple examples and MNIST.",
    "courseworkDeep2": "Training and tracking results with TensorBoard.",
    "courseworkDeep3": "Convolutional neural networks (CNNs) and ResNet fine-tuning.",
    "courseworkDeep4": "Recurrent neural networks (RNNs) and Transformers.",
    "courseworkDeep5": "Variational autoencoders (VAEs) and diffusion models.",
    "courseworkVisionTitle": "Computer vision",
    "courseworkVision1": "Image transformations and distortion correction.",
    "courseworkVision2": "Homographic rectification and aerial image mosaicing.",
    "courseworkVision3": "Stereo rectification and SGM matching.",
    "courseworkVision4": "Bundle adjustment.",
    "courseworkVision5": "View interpolation.",
    "courseworkCnnLink": "CNN practical course material ↗",
    "courseworkBundleLink": "Bundle adjustment course material ↗",
    "courseworkSource": "Course materials by Guillaume Bourmaud ↗",
    "certificationsTitle": "Certifications",
    "certArm": "Embedded Systems Essentials with Arm",
    "certIbm": "Python Basics for Data Science",
    "certRadio": "Amateur radio certificate",
    "certLaser": "Laser safety training (PERL)",
    "certLlm": "Building Customized LLMs with OpenAI",
    "certLlmTopic": "Training in language models",
    "courseworkPatternTitle": "Pattern recognition",
    "courseworkPattern1": "Shape detection using the Hough transform.",
    "courseworkPattern2": "HOG and LBP descriptors, dimensionality reduction with PCA.",
    "courseworkPattern3": "Unsupervised classification: hierarchical clustering and K-means.",
    "courseworkPattern4": "Supervised classification: LDA, QDA, k-NN and SVM.",
    "courseworkPattern5": "Character recognition and evaluation using confusion matrices.",
    "courseworkPatternLink": "TSIA2 course materials ↗",
    "courseworkGpuTitle": "Accelerated computing with C, Python and GPUs",
    "courseworkGpu1": "Optimising image processing in C and Python.",
    "courseworkGpu2": "Python/C interfaces with Cython.",
    "courseworkGpu3": "CPU parallelisation with OpenMP and GPU computing with CUDA.",
    "courseworkGpu4": "Bilateral filtering and comparison of computation times.",
    "courseworkGpuLink": "TIMG3 course materials ↗",
    "courseworkAppliedTitle": "Deep learning applications",
    "courseworkApplied1": "Image classification with PyTorch.",
    "courseworkApplied2": "Comparing YOLO11 and Faster R-CNN on PASCAL VOC 2007.",
    "courseworkApplied3": "Analysis of correct and incorrect detections.",
    "courseworkApplied4": "Evaluation: precision, recall, F1, AP50/AP75 and inference time.",
    "courseworkAppliedLink": "TS329 course materials ↗",
    "navInternships": "Internships",
    "internshipsEyebrow": "01 / PROFESSIONAL EXPERIENCE",
    "internshipsTitle": "My internships",
    "internshipsAside": "Embedded systems and image processing.",
    "stageDetails": "View internship",
    "stageCode": "Code on GitHub ↗",
    "stageNovespaceDates": "June - September 2026",
    "stageNovespaceLocation": "Mérignac, France",
    "stageNovespaceRole": "Engineering intern · Embedded systems and data analysis",
    "stageNovespaceSummary": "Improving the environmental data acquisition platform aboard the A310 Zero-G.",
    "stageNovespace1": "Time series analysis and diagnosis of acquisition timing irregularities at 10 Hz.",
    "stageNovespace2": "Updating the Linux/Python platform, distributing measurements and validating the system in flight.",
    "stageSelvaDates": "June 2025",
    "stageSelvaLocation": "Limoges, France",
    "stageSelvaRole": "R&D intern · Embedded systems",
    "stageSelvaSummary": "Developing an ADXL355 accelerometer driver on ESP32.",
    "stageSelva1": "C programming with ESP-IDF and I²C communication.",
    "stageSelva2": "Measurement acquisition, sensor characterisation and frequency analysis using FFT.",
    "stageAlphanovDates": "February - July 2024",
    "stageAlphanovLocation": "Talence, France",
    "stageAlphanovRole": "R&D intern · Image processing",
    "stageAlphanovSummary": "Automatically analysing 10,000 optical fibre rod images on a motorised optical bench.",
    "stageAlphanov1": "Thresholding, mathematical morphology and connected components to detect and measure objects.",
    "stageAlphanov2": "A Python/PyQt5 interface for real-time acquisition, processing and display.",
    "internshipFigureNote": "The illustrations are schematic."
  }
};
const cases = {
  "novespace": {
    "fr": {
      "kicker": "NOVESPACE · STAGE INGÉNIEUR · JUIN-SEPT. 2026",
      "title": "Plateforme de mesure en vol",
      "subtitle": "Plateforme d’acquisition embarquée à bord de l’Airbus A310 Zero-G, Mérignac.",
      "stats": [
        [
          "10 Hz",
          "Fréquence d’acquisition nominale"
        ],
        [
          "Linux",
          "Plateforme embarquée"
        ],
        [
          "Python",
          "Acquisition et analyse"
        ]
      ],
      "sections": [
        [
          "Contexte",
          "Le Pi-Server enregistre les données d’environnement de l’A310 Zero-G pendant les vols paraboliques. Mon stage portait sur l’amélioration de la plateforme et la régularité de l’acquisition à 10 Hz."
        ],
        [
          "Travail réalisé",
          [
            "J’ai analysé les séries temporelles en Python pour identifier les trous d’échantillonnage, la gigue, les valeurs figées et la dérive.",
            "J’ai comparé plusieurs configurations et réalisé des essais contrôlés pour vérifier les causes possibles des irrégularités.",
            "J’ai participé à l’évolution de la plateforme sous Linux, avec l’enregistrement local et la diffusion des mesures sur le réseau et l’interface web.",
            "J’ai automatisé l’analyse après vol et vérifié les résultats sur les enregistrements des vols."
          ]
        ]
      ],
      "limit": "Illustration de la trajectoire, sans données de vol."
    },
    "en": {
      "kicker": "NOVESPACE · ENGINEERING INTERNSHIP · JUN-SEP 2026",
      "title": "In-flight measurement platform",
      "subtitle": "An onboard acquisition platform for the Airbus A310 Zero-G, Mérignac.",
      "stats": [
        [
          "10 Hz",
          "Nominal acquisition rate"
        ],
        [
          "Linux",
          "Embedded platform"
        ],
        [
          "Python",
          "Acquisition and analysis"
        ]
      ],
      "sections": [
        [
          "Context",
          "The Pi-Server records environmental data from the A310 Zero-G during parabolic flights. My internship focused on improving the platform and the timing consistency of acquisition at 10 Hz."
        ],
        [
          "My work",
          [
            "I analysed time series in Python to identify sampling gaps, jitter, frozen values and drift.",
            "I compared configurations and ran controlled tests to check possible causes of the timing irregularities.",
            "I contributed to the Linux platform update, including local recording and distribution of measurements over the network and web interface.",
            "I automated post-flight analysis and checked the results using flight recordings."
          ]
        ]
      ],
      "limit": "Schematic trajectory, without flight data."
    }
  },
  "alphanov": {
    "fr": {
      "kicker": "ALPHANOV · STAGE R&D · FÉV.-JUIL. 2024",
      "title": "Analyse d’images de fibres optiques",
      "subtitle": "Analyse d’images sur banc optique motorisé, Talence.",
      "stats": [
        [
          "10 000",
          "Images à analyser"
        ],
        [
          "Image",
          "Détection et mesure"
        ],
        [
          "PyQt5",
          "Interface d’acquisition"
        ]
      ],
      "sections": [
        [
          "Contexte",
          "Le stage portait sur l’analyse automatique de 10 000 images de barreaux de fibre optique, acquises sur un banc optique motorisé."
        ],
        [
          "Travail réalisé",
          [
            "J’ai développé le traitement des images par seuillage, morphologie mathématique et composantes connexes.",
            "J’ai extrait les objets détectés pour mesurer leur diamètre et calculer leur centre de masse.",
            "J’ai intégré l’acquisition et l’analyse en temps réel dans une interface Python / PyQt5.",
            "J’ai défini les critères de validation des résultats du traitement."
          ]
        ]
      ],
      "limit": "Illustration schématique des fibres optiques."
    },
    "en": {
      "kicker": "ALPHANOV · R&D INTERNSHIP · FEB-JUL 2024",
      "title": "Optical fibre image analysis",
      "subtitle": "Image analysis on a motorised optical bench, Talence.",
      "stats": [
        [
          "10,000",
          "Images to analyse"
        ],
        [
          "Image",
          "Detection and measurement"
        ],
        [
          "PyQt5",
          "Acquisition interface"
        ]
      ],
      "sections": [
        [
          "Context",
          "The internship involved automatically analysing 10,000 optical fibre rod images acquired on a motorised optical bench."
        ],
        [
          "My work",
          [
            "I developed image processing using thresholding, mathematical morphology and connected components.",
            "I extracted the detected objects to measure their diameters and calculate their centres of mass.",
            "I integrated real-time acquisition and analysis into a Python / PyQt5 interface.",
            "I defined criteria for validating the processing results."
          ]
        ]
      ],
      "limit": "Schematic illustration of optical fibres."
    }
  },
  "fpga": {
    "fr": {
      "kicker": "ENSEIRB-MATMECA · PROJET ACADÉMIQUE · 2025-2026",
      "title": "Traitement de données sur FPGA",
      "subtitle": "Traitement d’un flux de données sur SoC FPGA PYNQ-Z2, projet en binôme.",
      "stats": [
        [
          "ARM + FPGA",
          "Architecture SoC"
        ],
        [
          "VHDL",
          "Logique programmable"
        ],
        [
          "Python",
          "Référence et comparaison"
        ]
      ],
      "sections": [
        [
          "Objectif",
          "Calculer des moyennes mobiles sur un flux de prix, puis comparer une implémentation Python à une version en logique programmable."
        ],
        [
          "Travail réalisé en binôme",
          [
            "Implémentation de référence en Python avec NumPy.",
            "Calcul des moyennes mobiles en VHDL sur la carte PYNQ-Z2.",
            "Communication entre la partie ARM et la logique programmable.",
            "Comparaison des temps de calcul et du coût des transferts de données."
          ]
        ],
        [
          "Résultat de la comparaison",
          "Les transferts de données ont été identifiés comme un facteur limitant. Le temps de calcul du FPGA doit donc être distingué du temps de traitement complet."
        ]
      ],
      "limit": "Projet académique réalisé en binôme."
    },
    "en": {
      "kicker": "ENSEIRB-MATMECA · ACADEMIC PROJECT · 2025-2026",
      "title": "Data processing on an FPGA",
      "subtitle": "Data stream processing on a PYNQ-Z2 FPGA SoC, a two-person project.",
      "stats": [
        [
          "ARM + FPGA",
          "SoC architecture"
        ],
        [
          "VHDL",
          "Programmable logic"
        ],
        [
          "Python",
          "Reference and comparison"
        ]
      ],
      "sections": [
        [
          "Goal",
          "Calculate moving averages on a price stream, then compare a Python implementation with a programmable logic version."
        ],
        [
          "Work completed as a pair",
          [
            "Reference implementation in Python with NumPy.",
            "Moving-average calculations in VHDL on the PYNQ-Z2 board.",
            "Communication between the ARM processor and programmable logic.",
            "Comparison of computation times and data transfer overhead."
          ]
        ],
        [
          "Comparison result",
          "Data transfers were identified as a limiting factor. FPGA computation time therefore needs to be distinguished from total processing time."
        ]
      ],
      "limit": "A two-person academic project."
    }
  },
  "signs": {
    "fr": {
      "kicker": "ENSEIRB-MATMECA · PROJET EN COURS · 2026-2027",
      "title": "Reconnaissance de langue des signes",
      "subtitle": "Reconnaissance de langue des signes à partir de séquences temporelles de points clés.",
      "stats": [
        [
          "Vidéo",
          "Source des points clés"
        ],
        [
          "PyTorch",
          "Apprentissage profond"
        ],
        [
          "En cours",
          "Projet 2026-2027"
        ]
      ],
      "sections": [
        [
          "Objectif",
          "Reconnaître des gestes à partir de séquences de points clés extraites de vidéos, avec Python et PyTorch."
        ],
        [
          "Travail en cours",
          [
            "Constitution d’un jeu de données réel et extraction des séquences de points clés.",
            "Pré-entraînement sur WLASL puis adaptation du modèle par fine-tuning.",
            "Évaluation des résultats et analyse des erreurs.",
            "Étude de l’effet des occultations et des différences entre utilisateurs."
          ]
        ]
      ],
      "limit": "Projet en cours pour l’année 2026-2027."
    },
    "en": {
      "kicker": "ENSEIRB-MATMECA · IN PROGRESS · 2026-2027",
      "title": "Sign language recognition",
      "subtitle": "Sign language recognition from temporal sequences of keypoints.",
      "stats": [
        [
          "Video",
          "Keypoint source"
        ],
        [
          "PyTorch",
          "Deep learning"
        ],
        [
          "In progress",
          "2026-2027 project"
        ]
      ],
      "sections": [
        [
          "Goal",
          "Recognise gestures from keypoint sequences extracted from videos, using Python and PyTorch."
        ],
        [
          "Work in progress",
          [
            "Build a real-world dataset and extract keypoint sequences.",
            "Pre-train on WLASL, then adapt the model through fine-tuning.",
            "Evaluate results and analyse errors.",
            "Study the effects of occlusion and differences between users."
          ]
        ]
      ],
      "limit": "Ongoing project for the 2026-2027 academic year."
    }
  },
  "selva": {
    "fr": {
      "kicker": "SELVA SYSTEMS · STAGE R&D · JUIN 2025",
      "title": "Driver ADXL355 sur ESP32",
      "subtitle": "Développement embarqué et caractérisation d’un accéléromètre, Limoges.",
      "stats": [
        [
          "ESP32",
          "Microcontrôleur"
        ],
        [
          "C / ESP-IDF",
          "Développement embarqué"
        ],
        [
          "I²C",
          "Communication avec le capteur"
        ]
      ],
      "sections": [
        [
          "Contexte",
          "Mon stage chez SELVA Systems portait sur l’acquisition et la validation des mesures d’un accéléromètre ADXL355."
        ],
        [
          "Travail réalisé",
          [
            "J’ai développé un driver en C sous ESP-IDF pour communiquer avec le capteur depuis un ESP32.",
            "J’ai travaillé sur l’acquisition des mesures et la caractérisation du capteur.",
            "J’ai analysé les données dans le domaine fréquentiel à l’aide de la FFT."
          ]
        ]
      ],
      "limit": "Le driver est disponible sur mon dépôt GitHub."
    },
    "en": {
      "kicker": "SELVA SYSTEMS · R&D INTERNSHIP · JUNE 2025",
      "title": "ADXL355 driver on ESP32",
      "subtitle": "Embedded development and accelerometer characterisation, Limoges.",
      "stats": [
        [
          "ESP32",
          "Microcontroller"
        ],
        [
          "C / ESP-IDF",
          "Embedded development"
        ],
        [
          "I²C",
          "Sensor communication"
        ]
      ],
      "sections": [
        [
          "Context",
          "My internship at SELVA Systems focused on acquiring and validating measurements from an ADXL355 accelerometer."
        ],
        [
          "My work",
          [
            "I developed a C driver with ESP-IDF to communicate with the sensor from an ESP32.",
            "I worked on measurement acquisition and sensor characterisation.",
            "I analysed the data in the frequency domain using FFT."
          ]
        ]
      ],
      "limit": "The driver is available in my GitHub repository."
    }
  }
};
const dialog = document.getElementById('project-dialog');
let activeProject = null;
function applyLanguage(next){
 language=next;
 document.documentElement.lang=next;
 document.querySelectorAll('[data-i18n]').forEach(el=>{const value=translations[next][el.dataset.i18n];if(value!==undefined)el.innerHTML=value;});
 const toggle=document.getElementById('language');toggle.textContent=next==='fr'?'EN':'FR';toggle.setAttribute('aria-label',next==='fr'?'Switch to English':'Passer en français');
 document.title=next==='fr'?'Marouane Jorio | Computer Vision & IA':'Marouane Jorio | Computer Vision & AI';
 document.querySelector('meta[name="description"]').content=next==='fr'?'Marouane Jorio, élève ingénieur à l’ENSEIRB-MATMECA. Computer Vision et IA, traitement d’image et systèmes embarqués. À la recherche d’un PFE dès février 2027.':'Marouane Jorio, engineering student at ENSEIRB-MATMECA. Computer Vision and AI, image processing and embedded systems. Seeking a final-year internship from February 2027.';
 document.querySelector('.hero-focus').innerHTML=next==='fr'?'COMPUTER VISION <span>&</span> IA':'COMPUTER VISION <span>&</span> AI';
 const labels=next==='fr'?['Navigation principale','Navigation mobile','Filtrer les projets','Copier l’adresse e-mail','Fermer le projet','Envoyer un e-mail à Marouane']:['Main navigation','Mobile navigation','Filter projects','Copy email address','Close project','Email Marouane'];
 ['.desktop-nav','.mobile-nav','.filters','#copy-email','#close-dialog','.contact-arrow'].forEach((s,i)=>document.querySelector(s).setAttribute('aria-label',labels[i]));
 document.querySelectorAll('.project-visual, .internship-visual').forEach(el=>{const name=cases[el.dataset.project][next].title;el.setAttribute('aria-label',(next==='fr'?'Lire : ':'Read: ')+name);});
 document.querySelector('.brand').setAttribute('aria-label',next==='fr'?'Marouane Jorio, accueil':'Marouane Jorio, home');
 document.getElementById('vision-art').setAttribute('aria-label',next==='fr'?'Nuage de points 3D interactif':'Interactive 3D point cloud');
 document.getElementById('copy-email').title=labels[3];document.getElementById('copy-status').textContent='';
 updateMenuLabel();updateFilterStatus();if(dialog.open&&activeProject)renderProject(activeProject);
 try{localStorage.setItem('mj-language',next);}catch{}
 drawArt();
}
function updateMenuLabel(){const b=document.querySelector('.menu-button');b.setAttribute('aria-label',language==='fr'?(b.getAttribute('aria-expanded')==='true'?'Fermer le menu':'Ouvrir le menu'):(b.getAttribute('aria-expanded')==='true'?'Close menu':'Open menu'));}
document.getElementById('language').addEventListener('click',()=>applyLanguage(language==='fr'?'en':'fr'));
const menuButton=document.querySelector('.menu-button');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));document.getElementById('mobile-nav').hidden=!open;updateMenuLabel();});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');document.getElementById('mobile-nav').hidden=true;updateMenuLabel();}));
function updateFilterStatus(){const n=[...document.querySelectorAll('.project-card')].filter(el=>!el.hidden).length;document.getElementById('filter-status').textContent=language==='fr'?(n===1?'1 projet affiché':`${n} projets affichés`):(n===1?'1 project shown':`${n} projects shown`);}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;});updateFilterStatus();}));
function element(tag,text,className){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;if(className)el.className=className;return el;}
function renderProject(key){const p=cases[key][language];document.getElementById('dialog-kicker').textContent=p.kicker;const body=document.getElementById('dialog-body');body.replaceChildren();const title=element('h2',p.title);title.id='dialog-title';body.append(title,element('p',p.subtitle,'dialog-subtitle'));const stats=element('div',undefined,'dialog-highlight');p.stats.forEach(([value,label])=>{const item=element('div');item.append(element('strong',value),element('span',label));stats.append(item);});body.append(stats);p.sections.forEach(([heading,content])=>{const section=element('section',undefined,'dialog-section');section.append(element('h3',heading));if(Array.isArray(content)){const list=element('ul');content.forEach(t=>list.append(element('li',t)));section.append(list);}else section.append(element('p',content));body.append(section);});body.append(element('p',p.limit,'dialog-limit'));}
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{activeProject=b.dataset.project;renderProject(activeProject);dialog.showModal();document.body.classList.add('modal-open');dialog.scrollTop=0;}));
function closeDialog(){dialog.close();}
document.getElementById('close-dialog').addEventListener('click',closeDialog);document.getElementById('dialog-done').addEventListener('click',closeDialog);
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)closeDialog();}});
document.getElementById('copy-email').addEventListener('click',async()=>{
 const status=document.getElementById('copy-status');let copied=false;
 try{if(navigator.clipboard){await navigator.clipboard.writeText('jorio.marouane@gmail.com');copied=true;}}catch{}
 if(!copied){const field=document.createElement('textarea');field.value='jorio.marouane@gmail.com';field.setAttribute('readonly','');field.style.cssText='position:fixed;left:-9999px;top:0';document.body.append(field);field.select();try{copied=document.execCommand('copy');}catch{}field.remove();document.getElementById('copy-email').focus();}
 if(copied){status.textContent=language==='fr'?'Copié !':'Copied!';}else{status.textContent=language==='fr'?'Sélectionne l’adresse pour la copier.':'Select the address to copy it.';const range=document.createRange();range.selectNodeContents(document.querySelector('.email-wrap>a'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);}
});
// Original generative illustration. This is a schematic, not measured data.
const canvas=document.getElementById('vision-art');
const ctx=canvas.getContext('2d');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let artPointer=0;
function drawArt(){
 if(!ctx)return;
 const w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);
 ctx.fillStyle='#eef3fa';ctx.fillRect(0,0,w,h);
 ctx.strokeStyle='#96add422';ctx.lineWidth=.7;
 for(let x=0;x<w;x+=48){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}for(let y=0;y<h;y+=48){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
 ctx.strokeStyle='#9cb0d646';ctx.beginPath();ctx.moveTo(0,385);ctx.lineTo(w,385);ctx.moveTo(360,0);ctx.lineTo(360,h);ctx.stroke();
 const nodes=[];const ax=1.08+artPointer*.08,ay=-.35+artPointer*.18,az=-.16;
 for(let i=0;i<112;i++){const u=i/112*Math.PI*2;for(let j=0;j<30;j++){const v=j/30*Math.PI*2;const tube=72+13*Math.cos(u*3);const radius=171+tube*Math.cos(v);let x=radius*Math.cos(u),y=radius*Math.sin(u),z=tube*Math.sin(v)+29*Math.sin(2*u);const y1=y*Math.cos(ax)-z*Math.sin(ax),z1=y*Math.sin(ax)+z*Math.cos(ax);y=y1;z=z1;const x2=x*Math.cos(ay)+z*Math.sin(ay),z2=-x*Math.sin(ay)+z*Math.cos(ay);x=x2;z=z2;const xx=x*Math.cos(az)-y*Math.sin(az),yy=x*Math.sin(az)+y*Math.cos(az);const depth=940/(940+z);nodes.push({x:360+xx*depth*1.06,y:367+yy*depth*1.06,z,alpha:.24+(240-z)/650,size:.85+(240-z)/420});}}
 nodes.sort((a,b)=>b.z-a.z);nodes.forEach(n=>{ctx.fillStyle=`rgba(46,49,146,${Math.min(.9,n.alpha)})`;ctx.beginPath();ctx.arc(n.x,n.y,n.size,0,Math.PI*2);ctx.fill();});
 ctx.strokeStyle='#0077c044';ctx.lineWidth=.9;ctx.beginPath();ctx.ellipse(360,380,290,160,-.29,0,Math.PI*2);ctx.stroke();
 ctx.fillStyle='#e94e1b';[[104,427],[616,280]].forEach(([x,y])=>{ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#e94e1b66';ctx.beginPath();ctx.arc(x,y,9,0,Math.PI*2);ctx.stroke();});
 ctx.fillStyle='#6b7280';ctx.font='10px monospace';ctx.fillText(language==='fr'?'3 360 POINTS · VISUALISATION':'3,360 POINTS · VISUALISATION',52,657);
}
canvas.addEventListener('pointermove',e=>{if(reducedMotion.matches||e.pointerType==='touch')return;artPointer=(e.clientX-canvas.getBoundingClientRect().left)/canvas.clientWidth-.5;drawArt();});
canvas.addEventListener('pointerleave',()=>{artPointer=0;drawArt();});
let savedLanguage='fr';try{savedLanguage=localStorage.getItem('mj-language')||'fr';}catch{}applyLanguage(savedLanguage==='en'?'en':'fr');
