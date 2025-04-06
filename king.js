const hexagrammes = [
  {
    "numero": 1,
    "binaire": "111111",
    "nom": "Qián 乾 – Le Ciel",
    "interprétation": {
      "générale": "Tu entres dans une phase d'élan et de force créative.",
      "amour": "Une relation puissante peut émerger. Montre-toi sûr de toi.",
      "santé": "Ton énergie est haute, veille à ne pas te surmener.",
      "spirituel": "Un grand souffle créatif t'accompagne."
    }
  },
  {
    "numero": 2,
    "binaire": "000000",
    "nom": "Kūn 坤 – La Terre",
    "interprétation": {
      "générale": "C'est un temps pour écouter, accueillir et suivre la voie naturelle.",
      "amour": "Sois patient et à l'écoute dans ta relation.",
      "santé": "Repose-toi et recharge tes énergies.",
      "spirituel": "Ouvre-toi à la guidance universelle."
    }
  },
  {
    "numero": 3,
    "binaire": "100010",
    "nom": "Zhūn 屯 – La Difficulté Initiale",
    "interprétation": {
      "générale": "Les débuts sont chaotiques, mais pleins de potentiel.",
      "amour": "La relation commence difficilement, mais peut grandir.",
      "santé": "Petits troubles initiaux, mais guérison possible.",
      "spirituel": "Les premiers pas sont importants, même s'ils sont flous."
    }
  },
  {
    "numero": 4,
    "binaire": "010001",
    "nom": "Méng 蒙 – L'Inexpérience",
    "interprétation": {
      "générale": "Tu apprends encore. Demande de l'aide si besoin.",
      "amour": "Ne sois pas naïf, découvre avec respect.",
      "santé": "Renseigne-toi, n'agis pas à l'aveugle.",
      "spirituel": "Le début du chemin nécessite humilité et écoute."
    }
  },
  {
    "numero": 5,
    "binaire": "111010",
    "nom": "Xū 需 – L'Attente",
    "interprétation": {
      "générale": "La patience est la clé. Les choses viennent à leur heure.",
      "amour": "Attends le bon moment pour te dévoiler.",
      "santé": "Récupération en cours. N'interviens pas trop vite.",
      "spirituel": "Sois tranquille, tout se met en place."
    }
  },
  {
    "numero": 6,
    "binaire": "010111",
    "nom": "Sòng 訟 – Le Conflit",
    "interprétation": {
      "générale": "Un désaccord est présent. Cherche une résolution calme.",
      "amour": "Des tensions. Le dialogue est nécessaire.",
      "santé": "Un conflit interne ou externe affecte ton énergie.",
      "spirituel": "Apprends à faire la paix en toi."
    }
  },
  {
    "numero": 7,
    "binaire": "000010",
    "nom": "Shī 師 – L’Armée",
    "interprétation": {
      "générale": "Organisation et discipline mènent à la réussite.",
      "amour": "Laisse les émotions se structurer.",
      "santé": "Une discipline stricte est recommandée.",
      "spirituel": "Structure ton chemin intérieur."
    }
  },
  {
    "numero": 8,
    "binaire": "010000",
    "nom": "Bǐ 比 – La Solidarité",
    "interprétation": {
      "générale": "Le moment est à l’union et à l’entraide.",
      "amour": "Une complicité sincère peut naître.",
      "santé": "Tu n’es pas seul, demande du soutien.",
      "spirituel": "Unis-toi à une communauté ou à des valeurs profondes."
    }
  },
  {
    "numero": 9,
    "binaire": "111001",
    "nom": "Xiǎo Chù 小畜 – La Force Apprivoisée du Petit",
    "interprétation": {
      "générale": "Les petites forces agissent dans l’ombre. Ne force rien.",
      "amour": "Un lien discret mais puissant grandit.",
      "santé": "Attention aux détails. Petits ajustements utiles.",
      "spirituel": "La subtilité est ta force actuelle."
    }
  },
  {
    "numero": 10,
    "binaire": "100111",
    "nom": "Lǚ 履 – La Conduite",
    "interprétation": {
      "générale": "Marche avec précaution. Reste digne et juste.",
      "amour": "Avance avec respect mutuel.",
      "santé": "Fais attention à ta posture, à ton équilibre.",
      "spirituel": "Sois attentif à la manière dont tu avances."
    }
  },
  {
    "numero": 11,
    "binaire": "001111",
    "nom": "Tài 泰 – La Paix",
    "interprétation": {
      "générale": "Tout s’harmonise. Une grande paix intérieure et extérieure est là.",
      "amour": "Le lien est fluide et sincère.",
      "santé": "Excellente vitalité, équilibre atteint.",
      "spirituel": "Connexion douce et stable avec l’univers."
    }
  },
  {
    "numero": 12,
    "binaire": "111100",
    "nom": "Pǐ 否 – Le Blocage",
    "interprétation": {
      "générale": "Un blocage temporaire est présent. Ne lutte pas, attends.",
      "amour": "Une fermeture émotionnelle doit être respectée.",
      "santé": "Énergie bloquée, besoin de repos.",
      "spirituel": "Tu es entre deux phases. Sois patient."
    }
  },
  {
    "numero": 13,
    "binaire": "111011",
    "nom": "Tóng Rén 同人 – La Communauté",
    "interprétation": {
      "générale": "L’union avec les autres t’apporte force et inspiration.",
      "amour": "Une ouverture sincère unit les cœurs.",
      "santé": "Partage tes forces. Ne reste pas isolé.",
      "spirituel": "Les âmes se rassemblent vers un but commun."
    }
  },
  {
    "numero": 14,
    "binaire": "110111",
    "nom": "Dà Yǒu 大有 – La Grande Possession",
    "interprétation": {
      "générale": "Tu disposes de ressources ou de talents puissants.",
      "amour": "Richesse du cœur à partager.",
      "santé": "Vitalité abondante. Canalise-la bien.",
      "spirituel": "Une bénédiction intérieure rayonne."
    }
  },
  {
    "numero": 15,
    "binaire": "001000",
    "nom": "Qiān 謙 – L’Humilité",
    "interprétation": {
      "générale": "Garde les pieds sur terre. La sagesse vient avec l’humilité.",
      "amour": "Modestie et respect favorisent l’amour.",
      "santé": "Ne surestime pas ta force. Reviens à l’essentiel.",
      "spirituel": "L’humilité ouvre les portes du ciel."
    }
  },
  {
    "numero": 16,
    "binaire": "000100",
    "nom": "Yù 豫 – L’Engouement",
    "interprétation": {
      "générale": "Une joie profonde est en approche. Exprime-la avec sagesse.",
      "amour": "La relation est joyeuse, pleine de promesses.",
      "santé": "Un regain d’énergie arrive. Profite-en.",
      "spirituel": "La joie peut être un moteur d’élévation."
    }
  },
  {
    "numero": 17,
    "binaire": "100110",
    "nom": "Suí 隨 – Le Suivre",
    "interprétation": {
      "générale": "Suis le courant avec souplesse. L’harmonie viendra.",
      "amour": "Suis ton cœur, il connaît la voie.",
      "santé": "Ne force rien, écoute ton rythme.",
      "spirituel": "La guidance vient quand tu lâches prise."
    }
  },
  {
    "numero": 18,
    "binaire": "011001",
    "nom": "Gǔ 蠱 – La Détérioration",
    "interprétation": {
      "générale": "Quelque chose doit être réparé ou purifié.",
      "amour": "Une ancienne blessure demande réparation.",
      "santé": "Détox nécessaire. Libère-toi du passé.",
      "spirituel": "Une purification profonde est en cours."
    }
  },
  {
    "numero": 19,
    "binaire": "000011",
    "nom": "Lín 臨 – L'Approche",
    "interprétation": {
      "générale": "Un nouveau cycle arrive. Prépare-toi à l'accueillir avec maturité.",
      "amour": "Une relation s'approche, pleine de promesses.",
      "santé": "Ton état s'améliore. Continue les bonnes habitudes.",
      "spirituel": "Une nouvelle vérité se rapproche. Sois ouvert."
    }
  },
  {
    "numero": 20,
    "binaire": "110000",
    "nom": "Guān 觀 – La Contemplation",
    "interprétation": {
      "générale": "Observe avant d’agir. La lucidité mène au progrès.",
      "amour": "Regarde vraiment l’autre. Tu verras clair.",
      "santé": "Prends du recul sur ton hygiène de vie.",
      "spirituel": "L’introspection t’élève."
    }
  },
  {
    "numero": 21,
    "binaire": "100101",
    "nom": "Shì Hé 噬嗑 – Mordre et Distinguer",
    "interprétation": {
      "générale": "Il faut trancher une situation confuse ou injuste.",
      "amour": "Exprime clairement ce qui doit être dit.",
      "santé": "Coupe les mauvaises habitudes.",
      "spirituel": "Élimine le superflu pour accéder à l’essentiel."
    }
  },
  {
    "numero": 22,
    "binaire": "101001",
    "nom": "Bì 賁 – La Grâce",
    "interprétation": {
      "générale": "L’esthétique et l’élégance t’entourent. Reste sincère malgré les apparences.",
      "amour": "Un moment de beauté partagée.",
      "santé": "Rayonnement intérieur. Évite les excès.",
      "spirituel": "La beauté mène à la vérité."
    }
  },
  {
    "numero": 23,
    "binaire": "000001",
    "nom": "Bō 剝 – L’Érosion",
    "interprétation": {
      "générale": "Quelque chose se défait. Laisse partir ce qui doit.",
      "amour": "Une séparation ou transformation est en cours.",
      "santé": "Reprise lente. Va à l’essentiel.",
      "spirituel": "Déshabille-toi des illusions. Le vrai reste."
    }
  },
  {
    "numero": 24,
    "binaire": "100000",
    "nom": "Fù 復 – Le Retour",
    "interprétation": {
      "générale": "Un cycle se boucle. C’est le moment de repartir sur de nouvelles bases.",
      "amour": "Un ancien lien peut renaître.",
      "santé": "Amélioration progressive.",
      "spirituel": "Le retour à soi est une renaissance."
    }
  },
  {
    "numero": 25,
    "binaire": "111001",
    "nom": "Wú Wàng 无妄 – L’Innocence",
    "interprétation": {
      "générale": "Agis avec spontanéité et vérité. L’univers te soutient.",
      "amour": "Sois vrai, sans calcul.",
      "santé": "L’équilibre revient naturellement.",
      "spirituel": "L’innocence est ta force spirituelle."
    }
  },
  {
    "numero": 26,
    "binaire": "010110",
    "nom": "Dà Chù 大畜 – Le Grand Apprivoisement",
    "interprétation": {
      "générale": "La force maîtrisée mène à la sagesse.",
      "amour": "Fais preuve de retenue et de patience.",
      "santé": "Canalise ton énergie pour la guérison.",
      "spirituel": "L’intérieur se construit lentement mais sûrement."
    }
  },
  {
    "numero": 27,
    "binaire": "100001",
    "nom": "Yí 頤 – La Nourriture",
    "interprétation": {
      "générale": "Ce que tu consommes nourrit ton esprit. Choisis bien.",
      "amour": "Nourris la relation avec attention.",
      "santé": "Revois ton alimentation physique et mentale.",
      "spirituel": "Alimente ton âme avec ce qui l’élève."
    }
  },
  {
    "numero": 28,
    "binaire": "011110",
    "nom": "Dà Guò 大過 – La Grande Traversée",
    "interprétation": {
      "générale": "Un défi majeur approche. Affronte-le avec courage.",
      "amour": "Une étape intense à franchir ensemble.",
      "santé": "Besoin d’attention sérieuse. Ne minimise rien.",
      "spirituel": "Une grande épreuve transforme profondément."
    }
  },
  {
    "numero": 29,
    "binaire": "010010",
    "nom": "Kǎn 坎 – L’Eau / L’Abîme",
    "interprétation": {
      "générale": "Un passage difficile, mais nécessaire à la transformation.",
      "amour": "Des émotions profondes te bouleversent.",
      "santé": "Attention aux troubles liés à l’émotionnel.",
      "spirituel": "Traverse l’ombre pour trouver la lumière."
    }
  },
  {
    "numero": 30,
    "binaire": "101101",
    "nom": "Lí 離 – Le Feu / La Clarté",
    "interprétation": {
      "générale": "La clarté intérieure éclaire ton chemin.",
      "amour": "L’amour brûle intensément. Reste lucide.",
      "santé": "Vitalité forte, mais surveille les inflammations.",
      "spirituel": "Une illumination intérieure t’éveille."
    }
  },
  {
    "numero": 31,
    "binaire": "110100",
    "nom": "Xián 咸 – L’Influence",
    "interprétation": {
      "générale": "Quelqu'un ou quelque chose va t'influencer profondément.",
      "amour": "L'amour naît d'une attraction subtile.",
      "santé": "Écoute ton intuition pour soigner ton corps.",
      "spirituel": "Un nouveau maître ou guide pourrait apparaître."
    }
  },
  {
    "numero": 32,
    "binaire": "001011",
    "nom": "Héng 恆 – La Durée",
    "interprétation": {
      "générale": "La constance mène à la réussite durable.",
      "amour": "L’amour stable et fidèle porte ses fruits.",
      "santé": "Persévère dans tes soins ou routines.",
      "spirituel": "La discipline spirituelle t’ancre profondément."
    }
  },
  {
    "numero": 33,
    "binaire": "111000",
    "nom": "Dùn 遯 – La Retraite",
    "interprétation": {
      "générale": "Il est sage de te retirer pour préserver ton énergie.",
      "amour": "Un éloignement peut être bénéfique.",
      "santé": "Repose-toi, recharge tes batteries.",
      "spirituel": "La retraite intérieure permet l’éveil."
    }
  },
  {
    "numero": 34,
    "binaire": "000111",
    "nom": "Dà Zhuàng 大壯 – La Grande Puissance",
    "interprétation": {
      "générale": "Une énergie forte t’habite. Utilise-la avec sagesse.",
      "amour": "Une passion intense. Canalise-la.",
      "santé": "Force physique élevée. Attention à ne pas en abuser.",
      "spirituel": "Tu es prêt à avancer avec puissance intérieure."
    }
  },
  {
    "numero": 35,
    "binaire": "001110",
    "nom": "Jìn 晉 – Le Progrès",
    "interprétation": {
      "générale": "Une avancée rapide et brillante se manifeste.",
      "amour": "Le lien évolue positivement.",
      "santé": "Amélioration rapide, progrès visible.",
      "spirituel": "Une étape d’élévation arrive."
    }
  },
  {
    "numero": 36,
    "binaire": "011100",
    "nom": "Míng Yí 明夷 – L’Obscurcissement de la Lumière",
    "interprétation": {
      "générale": "Protège ta lumière intérieure dans un environnement hostile.",
      "amour": "Laisse les choses se calmer avant d’agir.",
      "santé": "Fais attention à ce que tu ne vois pas.",
      "spirituel": "Brille doucement, sans te dévoiler."
    }
  },
  {
    "numero": 37,
    "binaire": "101000",
    "nom": "Jiā Rén 家人 – La Famille",
    "interprétation": {
      "générale": "L’équilibre familial est central dans ta situation.",
      "amour": "Le foyer et la loyauté sont essentiels.",
      "santé": "Soins partagés, soutien familial.",
      "spirituel": "Ta mission est liée à ton clan ou tes racines."
    }
  },
  {
    "numero": 38,
    "binaire": "000101",
    "nom": "Kuí 睽 – L’Opposition",
    "interprétation": {
      "générale": "Un conflit ou une divergence apparaît. Écoute pour comprendre.",
      "amour": "Malentendus possibles, favorise la communication.",
      "santé": "Trouve l’origine des déséquilibres.",
      "spirituel": "Même dans l’opposition, un sens plus grand existe."
    }
  },
  {
    "numero": 39,
    "binaire": "010001",
    "nom": "Jiǎn 蹇 – L’Entrave",
    "interprétation": {
      "générale": "Un obstacle te ralentit, mais il est riche d’enseignements.",
      "amour": "Un blocage demande douceur et compréhension.",
      "santé": "Un ralentissement bénéfique pour éviter des excès.",
      "spirituel": "L’âme apprend aussi dans la difficulté."
    }
  },
  {
    "numero": 40,
    "binaire": "100010",
    "nom": "Jiě 解 – La Libération",
    "interprétation": {
      "générale": "Un soulagement arrive. Le problème se résout.",
      "amour": "La tension se relâche, un apaisement naît.",
      "santé": "Une guérison est proche ou en cours.",
      "spirituel": "Tu lâches enfin un fardeau ancien."
    }
  },
  {
    "numero": 41,
    "binaire": "100001",
    "nom": "Sǔn 損 – La Diminution",
    "interprétation": {
      "générale": "Tu vas devoir te simplifier, réduire pour mieux avancer.",
      "amour": "Moins d’attente, plus de présence.",
      "santé": "Allège-toi physiquement et mentalement.",
      "spirituel": "La sagesse vient avec le détachement."
    }
  },
  {
    "numero": 42,
    "binaire": "011000",
    "nom": "Yì 益 – L’Accroissement",
    "interprétation": {
      "générale": "Un bénéfice arrive. Profite-en pour aider autour de toi.",
      "amour": "Le lien s’enrichit.",
      "santé": "Gain d’énergie, guérison en vue.",
      "spirituel": "Ce que tu donnes revient multiplié."
    }
  },
  {
    "numero": 43,
    "binaire": "111110",
    "nom": "Guài 夬 – La Percée",
    "interprétation": {
      "générale": "Un obstacle est brisé. C’est le moment d’agir avec clarté.",
      "amour": "Exprime enfin ce que tu ressens.",
      "santé": "Libération d’un blocage ou d’un symptôme.",
      "spirituel": "Une percée spirituelle t’ouvre les yeux."
    }
  },
  {
    "numero": 44,
    "binaire": "011111",
    "nom": "Gòu 姤 – La Rencontre",
    "interprétation": {
      "générale": "Un événement ou une personne inattendue entre dans ta vie.",
      "amour": "Rencontre marquante, mais éphémère ou instable.",
      "santé": "Un nouveau facteur entre en jeu. Sois attentif.",
      "spirituel": "Une nouvelle voie s’ouvre à toi soudainement."
    }
  },
  {
    "numero": 45,
    "binaire": "000110",
    "nom": "Cuì 萃 – Le Rassemblement",
    "interprétation": {
      "générale": "Un appel à l’union et à la cohésion.",
      "amour": "Une union joyeuse, partagée avec d’autres.",
      "santé": "Amélioration grâce au soutien collectif.",
      "spirituel": "Rejoins une communauté qui élève ton âme."
    }
  },
  {
    "numero": 46,
    "binaire": "011000",
    "nom": "Shēng 升 – L’Élévation",
    "interprétation": {
      "générale": "Un progrès lent mais certain. Sois constant.",
      "amour": "Le lien s’élève avec patience.",
      "santé": "Amélioration régulière, continue ainsi.",
      "spirituel": "Ton niveau de conscience monte doucement."
    }
  },
  {
    "numero": 47,
    "binaire": "100110",
    "nom": "Kùn 困 – L’Épuisement",
    "interprétation": {
      "générale": "Tu es à bout. Le repos est prioritaire.",
      "amour": "Fatigue dans la relation. Prends du recul.",
      "santé": "Ton corps crie repos. Écoute-le.",
      "spirituel": "Le silence intérieur peut te régénérer."
    }
  },
  {
    "numero": 48,
    "binaire": "011001",
    "nom": "Jǐng 井 – Le Puits",
    "interprétation": {
      "générale": "Retourne à tes ressources profondes.",
      "amour": "L’amour véritable vient du cœur profond.",
      "santé": "Bois, respire, recharge-toi.",
      "spirituel": "Creuse en toi. La source est là."
    }
  },
  {
    "numero": 49,
    "binaire": "110101",
    "nom": "Gé 革 – La Révolution",
    "interprétation": {
      "générale": "Un changement radical s’impose. N’aie pas peur de l’inconnu.",
      "amour": "Nouvelle phase, fin ou renouveau.",
      "santé": "Changement d’habitudes nécessaire.",
      "spirituel": "Un saut de conscience est à portée."
    }
  },
  {
    "numero": 50,
    "binaire": "101011",
    "nom": "Dǐng 鼎 – Le Chaudron",
    "interprétation": {
      "générale": "Tu cuisines quelque chose de grand. Nourris-le avec attention.",
      "amour": "Une relation profonde et nourrissante.",
      "santé": "Cuisine, chaleur, transformation.",
      "spirituel": "Le sacré est dans ta transformation intérieure."
    }
  },
  {
    "numero": 51,
    "binaire": "100100",
    "nom": "Zhèn 震 – Le Tonnerre",
    "interprétation": {
      "générale": "Un choc te réveille. Une vérité éclate.",
      "amour": "Un événement soudain vient bouleverser la relation.",
      "santé": "Sois attentif aux tensions nerveuses.",
      "spirituel": "L’éveil vient parfois avec fracas."
    }
  },
  {
    "numero": 52,
    "binaire": "001001",
    "nom": "Gèn 艮 – L’Immobilisation",
    "interprétation": {
      "générale": "Il est temps de t’arrêter. Reste calme et ancré.",
      "amour": "Un moment de pause dans la relation.",
      "santé": "Repose-toi. Trop d’agitation nuit.",
      "spirituel": "Le silence intérieur révèle des trésors."
    }
  },
  {
    "numero": 53,
    "binaire": "110011",
    "nom": "Jiàn 漸 – Le Développement progressif",
    "interprétation": {
      "générale": "Les choses avancent lentement mais sûrement.",
      "amour": "La relation se renforce peu à peu.",
      "santé": "Rétablissement en douceur.",
      "spirituel": "Chaque pas te rapproche de ton centre."
    }
  },
  {
    "numero": 54,
    "binaire": "001101",
    "nom": "Guī Mèi 歸妹 – La Jeune Mariée",
    "interprétation": {
      "générale": "Un engagement hâtif pourrait être instable.",
      "amour": "Séduction, mais attention aux illusions.",
      "santé": "Nouvelles habitudes à stabiliser.",
      "spirituel": "N’avance pas trop vite sans ancrage."
    }
  },
  {
    "numero": 55,
    "binaire": "101110",
    "nom": "Fēng 豐 – L’Abondance",
    "interprétation": {
      "générale": "Tu es entouré de richesse. Partage et reconnais cette abondance.",
      "amour": "Un amour comblant. Garde la gratitude.",
      "santé": "Vitalité élevée. Reste équilibré.",
      "spirituel": "Une lumière puissante rayonne de toi."
    }
  },
  {
    "numero": 56,
    "binaire": "011101",
    "nom": "Lǚ 旅 – Le Voyage",
    "interprétation": {
      "générale": "Tu es en transition. Sois respectueux partout où tu vas.",
      "amour": "Une rencontre passagère peut marquer profondément.",
      "santé": "Besoin de changement, d’air ou de nouveauté.",
      "spirituel": "Chaque étape est une leçon d’âme."
    }
  },
  {
    "numero": 57,
    "binaire": "110110",
    "nom": "Xùn 巽 – Le Vent",
    "interprétation": {
      "générale": "Agis avec douceur et influence subtile.",
      "amour": "Séduction discrète et profonde.",
      "santé": "Respiration, massages, relaxation.",
      "spirituel": "L’Esprit te guide dans le silence."
    }
  },
  {
    "numero": 58,
    "binaire": "011011",
    "nom": "Duì 兌 – Le Lac / La Joie",
    "interprétation": {
      "générale": "Suis la joie. Elle montre le bon chemin.",
      "amour": "Un moment de plaisir partagé.",
      "santé": "Souris à ton corps, il te le rendra.",
      "spirituel": "La légèreté mène aussi à l’élévation."
    }
  },
  {
    "numero": 59,
    "binaire": "001110",
    "nom": "Huàn 渙 – La Dispersion",
    "interprétation": {
      "générale": "Dissous les tensions. Écarte-toi du chaos.",
      "amour": "Une distance peut clarifier les choses.",
      "santé": "Purge physique ou émotionnelle nécessaire.",
      "spirituel": "Libère-toi pour mieux t’unir."
    }
  },
  {
    "numero": 60,
    "binaire": "011100",
    "nom": "Jié 節 – La Limite",
    "interprétation": {
      "générale": "Fixe des limites saines pour préserver ton énergie.",
      "amour": "Respect mutuel dans les besoins et les espaces.",
      "santé": "Modération nécessaire.",
      "spirituel": "La rigueur te donne la liberté intérieure."
    }
  },
  {
    "numero": 61,
    "binaire": "110011",
    "nom": "Zhōng Fú 中孚 – La Vérité Intérieure",
    "interprétation": {
      "générale": "Sois fidèle à ton cœur. Le futur récompense l’authenticité.",
      "amour": "Un lien sincère peut naître ou se renforcer.",
      "santé": "Le corps suit l’état intérieur. Sois en paix.",
      "spirituel": "Ce qui est vrai vibre haut. Reste aligné."
    }
  },
  {
    "numero": 62,
    "binaire": "001100",
    "nom": "Xiǎo Guò 小過 – Le Petit Dépassement",
    "interprétation": {
      "générale": "Agis avec précaution. De petites choses font la différence.",
      "amour": "Un détail peut renforcer ou affaiblir un lien.",
      "santé": "Un petit ajustement suffit.",
      "spirituel": "Sois léger et précis. Chaque geste compte."
    }
  },
  {
    "numero": 63,
    "binaire": "101010",
    "nom": "Jì Jì 既濟 – Déjà accompli",
    "interprétation": {
      "générale": "Tu as atteint un sommet. Mais attention à l’excès de confiance.",
      "amour": "Stabilité acquise. Entretiens-la.",
      "santé": "Garde ton équilibre. Ne relâche pas trop vite.",
      "spirituel": "Même la paix demande vigilance."
    }
  },
  {
    "numero": 64,
    "binaire": "010101",
    "nom": "Wèi Jì 未濟 – Pas encore accompli",
    "interprétation": {
      "générale": "Tu es proche d’un accomplissement. Ne lâche pas.",
      "amour": "Une relation est sur le point de se transformer.",
      "santé": "Guérison presque là. Continue les efforts.",
      "spirituel": "L’initiation est en cours. Le passage approche."
    }
  }
];

let lignes = [];

// Fonction pour lancer les pièces
function lancer() {
  if (lignes.length >= 6) {
    alert("Tu as déjà lancé 6 fois. Réinitialise pour recommencer.");
    return;
  }

  let pileOuFace = () => Math.random() < 0.5 ? 2 : 3;
  let p1 = pileOuFace();
  let p2 = pileOuFace();
  let p3 = pileOuFace();
  let total = p1 + p2 + p3;

  let binaire, mutable;
  switch (total) {
    case 6: binaire = 0; mutable = true; break;
    case 7: binaire = 1; mutable = false; break;
    case 8: binaire = 0; mutable = false; break;
    case 9: binaire = 1; mutable = true; break;
  }

  lignes.unshift({ binaire, mutable });

  document.getElementById("traits").innerHTML = lignes.map(l =>
    (l.binaire === 1 ? "───" : "─ ─") + (l.mutable ? " *" : "")
  ).join("<br>");

  const lancers = document.getElementById("lancers");
  lancers.innerHTML += `<p>Ligne ${7 - lignes.length} : ${p1} + ${p2} + ${p3} = ${total} (${total === 6 ? 'Yin mutant' : total === 7 ? 'Yang' : total === 8 ? 'Yin' : 'Yang mutant'})</p>`;

  if (lignes.length === 6) {
    afficherInterpretation();
}

// Fonction pour afficher l'interprétation
function afficherInterpretation() {
  const binaire = lignes.map(l => l.binaire).join('');
  const hex = hexagrammes.find(h => h.binaire === binaire);

  if (!hex) {
    document.getElementById("interpretation").innerHTML = "Hexagramme non trouvé.";
    return;
  }

  const select = document.getElementById("categorie");
  const categorie = select ? select.value : "générale";

  const questionInput = document.getElementById("questionUtilisateur");
  const questionTexte = questionInput && questionInput.value.trim() !== ""
    ? `<strong>Ta question :</strong> ${questionInput.value.trim()}<br><br>`
    : "";

  const texte = hex.interprétation[categorie];
  document.getElementById("interpretation").innerHTML = `
    ${questionTexte}
    <strong>${hex.nom}</strong><br><br>
    ${texte}<br><br>
    <em>(Hexagramme n°${hex.numero} – binaire : ${hex.binaire})</em>
  `;
}


}
