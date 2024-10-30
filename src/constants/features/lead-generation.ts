import Integrate from '@/assets/images/integrate.webp';
import Notify from '@/assets/images/notify.webp';
import Retarget from '@/assets/images/retarget.webp';
import LeadHeroIcon1 from '@/assets/svgs/lead-hero-icon1.svg';
import LeadHeroIcon2 from '@/assets/svgs/lead-hero-icon2.svg';
import LeadHeroIcon3 from '@/assets/svgs/lead-hero-icon3.svg';

export const reviews = [
  {
    id: 1,
    rating: 5,
    reviewBy: 'ClientiDirect i-a întrecut pe toți',
    content:
      'Dintre toate instrumentele similare pe care le-am testat, ClientiDirect i-a întrecut pe toți. Alți furnizori detectează cu aproximativ 60-70% mai puține companii.',
    reviewer: 'Ana N.',
  },
  {
    id: 2,
    rating: 5,
    reviewBy: 'Date extrem de precise pentru un preț corect',
    content:
      'Găsim jucătorii B2B care accesează site-ul nostru pentru a-i viza cu outreach rece – Date extrem de precise despre companii pentru un preț corect.',
    reviewer: 'Daniela L',
  },
  {
    id: 3,
    rating: 4.5,
    revieBy: 'Generare de leaduri și urmărire a vizitatorilor clară și precisă',
    content:
      'Nu sunt sigur cum fac asta, dar ClientiDirect a reușit să identifice cu precizie cel mai mare procent din traficul nostru.',
    reviewer: 'Simona F.',
  },
];

export const pros = [
  {
    id: 1,
    title: 'Califică',
    description:
      'Califică automat leadurile și mută-le în următoarea etapă a procesului tău de vânzări.',
    image: 'qualify.webp',
  },
  {
    id: 2,
    title: 'Prioritizează',
    description:
      'Investește timpul în prospecți promițători prioritizând leadurile cu cea mai mare intenție.',
    image: 'prioritize.webp',
  },
  {
    id: 3,
    title: 'Asignare',
    description:
      'Notifică și asignează membri ai echipei în timp ce redirecționezi leadurile către platformele tale preferate.',
    image: 'assign.webp',
  },
  {
    id: 4,
    title: 'Exportă',
    description:
      'Exportă datele despre leaduri și vizite în mai multe formate sau sincronizează-le cu alte instrumente.',
    image: 'export.webp',
  },
];

export const data = [
  {
    id: 1,
    title: 'Integrează',
    description:
      'Conectează-te cu instrumentele folosite de echipele tale și trimite leaduri calificate sau pre-calificate împreună cu informații îmbogățite despre companie.',
    image: Integrate,
  },
  {
    id: 2,
    title: 'Notifică',
    description:
      'Configurează notificări personalizate pentru actualizările cu intenții ridicate, astfel încât conversațiile să rămână relevante și tranzacțiile să se închidă mai repede.',
    image: Notify,
  },
  {
    id: 3,
    title: 'Retargetează',
    description:
      'Rulează campanii de retargetare pe LinkedIn pentru leaduri potrivite și conectează-te cu Google Analytics pentru a crea audiențe pentru reclame.',
    image: Retarget,
  },
];

export const leadHeroData = [
  {
    imageSrc: LeadHeroIcon1,
    altText: 'Imaginea Unu',
    description:
      'Identifică mai multe companii care vizitează site-ul tău web.',
  },
  {
    imageSrc: LeadHeroIcon2,
    altText: 'Imaginea Doi',
    description: 'Segmentează lead-urile în audiențe care convertesc.',
  },
  {
    imageSrc: LeadHeroIcon3,
    altText: 'Imaginea Trei',
    description: 'Automatizează activitățile pe canale și aplicații.',
  },
];
