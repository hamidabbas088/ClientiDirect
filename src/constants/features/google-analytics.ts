import MarketingCard1 from '../../assets/images/marketing-card1.png';
import MarketingCard2 from '../../assets/images/marketing-card2.png';
import MarketingCard3 from '../../assets/images/marketing-card3.png';
import AnalyticsIcon1 from '../../assets/svgs/analytics-icon1.svg';
import AnalyticsIcon2 from '../../assets/svgs/analytics-icon2.svg';
import AnalyticsIcon3 from '../../assets/svgs/analytics-icon3.svg';
import OptimizedIcon1 from '../../assets/svgs/optimize-icon1.svg';
import OptimizedIcon2 from '../../assets/svgs/optimized-icon2.svg';
import OptimizedIcon3 from '../../assets/svgs/optimized-icon3.svg';
import RevenueIcon1 from '../../assets/svgs/revenue-icon1.svg';
import RevenueIcon2 from '../../assets/svgs/revenue-icon2.svg';
import RevenueIcon3 from '../../assets/svgs/revenue-icon3.svg';
import RevenueIcon4 from '../../assets/svgs/revenue-icon4.svg';

export const reviews = [
  {
    id: 1,
    rating: 5,
    reviewBy: 'ClientiDirect i-a întrecut pe toți',
    content:
      'Dintre toate instrumentele similare pe care le-am testat, ClientiDirect i-a întrecut pe toți. Alți furnizori detectează cu aproximativ 60-70% mai puține companii.',
    reviewer: 'Inga B.',
  },
  {
    id: 2,
    rating: 5,
    reviewBy: 'Date extrem de precise pentru un preț corect',
    content:
      'Găsim jucătorii B2B care accesează site-ul nostru pentru a-i viza cu outreach rece – Date extrem de precise despre companii pentru un preț corect.',
    reviewer: 'Courtenay F.',
  },
  {
    id: 3,
    rating: 4.5,
    reviewBy:
      'Generare de leaduri și urmărire a vizitatorilor clară și precisă',
    content:
      'Nu sunt sigur cum fac asta, dar ClientiDirect a reușit să identifice cu precizie cel mai mare procent din traficul nostru.',
    reviewer: 'Becca R.',
  },
];

export const analyticsReviewsCards = [
  {
    id: 1,
    rating: 5,
    reviewBy:
      '“Un instrument excelent pentru a-l adăuga în trusa ta de marketing”',
    content:
      '“ClientiDirect ne ajută să înțelegem mai bine traficul de pe site-ul nostru. Apreciem ușurința în utilizare și analizele oferite.”',
    reviewer: 'Gabriela M.',
  },
  {
    id: 2,
    rating: 5,
    reviewBy: '“O comoară ascunsă”',
    content:
      '“Ne ajută să aducem la un loc toate eforturile noastre de marketing și să vedem care canale sunt eficiente.”',
    reviewer: 'Cristina P.',
  },
  {
    id: 3,
    rating: 4.5,
    reviewBy: '„ClientiDirect își face treaba!”',
    content:
      '„Google Analytics nu era suficient, așa că aveam nevoie de mai multe informații, iar ClientiDirect mi le oferă în timp real”',
    reviewer: 'Alexandra R.',
  },
];

export const analyticsHeroData = [
  {
    imageSrc: AnalyticsIcon1,
    altText: 'Imaginea Unu',
    description:
      'Îmbogățește traficul anonim din GA cu date detaliate despre companii',
  },
  {
    imageSrc: AnalyticsIcon2,
    altText: 'Imaginea Doi',
    description: 'Analizează acțiunile de marketing în context cu încredere',
  },
  {
    imageSrc: AnalyticsIcon3,
    altText: 'Imaginea Trei',
    description: 'Optimizează și testează pentru a atinge obiective mai mari',
  },
];

export const MarketingSectionData = [
  {
    image: MarketingCard1,
    alt: 'Imaginea unu',
    title: 'De la numere la companii',
    content:
      'Folosind date de identificare în timp real, ClientiDirect adaugă nume de companii și informații firmografice la sesiuni, fără a se baza pe conversii.',
  },
  {
    image: MarketingCard2,
    alt: 'Imaginea Doi',
    title: 'Dimensiuni personalizate puternice',
    content:
      'Accesați numele companiilor, dimensiunile, industriile și multe altele prin Google Analytics cu dimensiuni personalizate.',
  },
  {
    image: MarketingCard3,
    alt: 'Imaginea doi',
    title: 'Parcurgeri complete ale cumpărătorilor',
    content:
      'Leagă mai mulți vizitatori și dispozitive de o companie, astfel încât să obții o imagine completă a parcursului conturilor până la conversie.',
  },
];

export const revenueSectionData = [
  {
    image: RevenueIcon1,
    heading: 'Segmentează',
    subHeading:
      'Folosește filtre firmografice ale companiei pentru a crea segmente formate din vizitatori care corespund profilului tău ideal de client.',
  },
  {
    image: RevenueIcon2,
    heading: 'Audiențe',
    subHeading:
      'Construiește audiențe din companiile care se transformă în clienți, astfel încât cheltuielile tale pentru reclame să nu se îndrepte către vizitatori care nu vor cumpăra niciodată.',
  },
  {
    image: RevenueIcon3,
    heading: 'Analizează',
    subHeading:
      'Mapează comportamentul și activitățile în funcție de profilul ideal al clientului pentru a înțelege ce funcționează și ce irosește bugetul.',
  },
  {
    image: RevenueIcon4,
    heading: 'Retargetare',
    subHeading:
      'Retargetează doar companiile potrivite în căutare și afișare, excluzând vizitatorii nepotriviți din campaniile plătite viitoare.',
  },
];

export const OptimizeCardData = [
  {
    icon: OptimizedIcon1,
    heading: 'Testează',
    description:
      'Obține feedback imediat asupra testelor tale și atinge relevanța statistică fără a cheltui în timp ce aștepți conversiile.',
  },
  {
    icon: OptimizedIcon2,
    heading: 'Optimizează',
    description:
      'Ia decizii mai bune cu o imagine completă a modului în care fiecare dintre acțiunile tale performează în atragerea vizitatorilor din piața ta țintă.',
  },
  {
    icon: OptimizedIcon3,
    heading: 'Tablou de bord',
    description:
      'Creează tablouri de bord personalizate în Google Data Studio sau folosește șabloanele noastre.',
  },
];

export const analyticsFaqList = [
  {
    question:
      'Pot alege ce informații trimite ClientiDirect către Google Analytics?',
    answer: [
      'Da, este posibil să selectezi care atribute ale companiei dorești să sincronizezi în Google Analytics.',
      'Exemple includ:',
      'Numele companiei',
      'Domeniul companiei',
      'Dimensiunea companiei',
      'Industria companiei',
      'Locația companiei și altele',
    ],
  },
  {
    question: 'Cum pot accesa datele SnitcClientiDirecther în GA?',
    answer:
      'Atributele companiei sunt sincronizate în Google Analytics ca dimensiuni personalizate cu care poți îmbogăți sau filtra rapoartele, crea audiențe și construi tablouri de bord.',
  },
  {
    question: 'Cum pot începe?',
    answer:
      'Începe cu o perioadă de probă gratuită și accesează pagina de integrări din setările tale pentru a configura integrarea.',
  },
  {
    question: 'Am nevoie de cunoștințe tehnice pentru a configura integrarea?',
    answer:
      'Nu, nu sunt necesare abilități tehnice pentru a configura integrările. Este o instalare cu un singur clic. Suntem, de asemenea, disponibili să te sprijinim dacă este necesar.',
  },
  {
    question: 'ClientiDirect suportă GA4?',
    answer: 'Da, suportăm!',
  },
  {
    question: 'Voi primi suport pentru bune practici și implementare?',
    answer:
      'Înțelegem că utilizarea datelor despre companii în Google Analytics este o metodă nouă de lucru, așa că suntem bucuroși să discutăm și să te ghidăm către cele mai bune metode de a obține informații valoroase și de a construi audiențe. Ghidurile noastre sunt, de asemenea, pline de sfaturi utile și bune practici pentru a te ajuta să începi.',
  },
  {
    question: 'Cum funcționează prețurile?',
    answer:
      'Poți testa integrarea prin proba gratuită. Pentru a utiliza îmbogățirea Google Analytics după încheierea perioadei de probă, va trebui să începi un abonament cu noi. Integrarea este inclusă în costul abonamentului contului tău și poți vedea diferitele nivele de prețuri pentru a vedea cât va costa.',
  },
  {
    question:
      'Ce fac dacă am nevoie de ajutor pentru construirea de rapoarte și tablouri de bord?',
    answer:
      'Avem tablouri de bord predefinite în Looker Studio (GDS) pentru tine, care includ prezentări generale ale site-ului, rapoarte de marketing plătit și organic, precum și tablouri de bord pentru raportarea bazată pe conturi.',
  },
];

export const landingReviewCardsColumn1 = [
  {
    id: 1,
    rating: 5,
    reviewBy: 'Un instrument grozav de adăugat în trusa ta de marketing',
    content:
      'Echipa de la ClientiDirect nu doar că este ușor de lucrat cu ea, dar au proiectat o platformă intuitivă și eficientă. ClientiDirect ne ajută să înțelegem mai bine traficul de pe site-ul nostru. Apreciem ușurința de utilizare și analizele. De asemenea, se integrează în CRM-ul nostru, ceea ce este cireașa de pe tort.',
    reviewer: 'Andrei N.',
  },
  {
    id: 2,
    rating: 4.5,
    reviewBy: 'Cea mai bună platformă pentru a găsi lead-uri potrivite',
    content:
      'Este mai bună decât Google Analytics și Adobe și ne oferă mai multe informații despre traficul potrivit, astfel încât suntem în contact mai rapid cu lead-urile, cu detaliile de contact furnizate de ClientiDirect.',
    reviewer: 'Alexandru P.',
  },
  {
    id: 3,
    rating: 5,
    reviewBy: 'Calitate bună a datelor comparativ cu prețul',
    content:
      'Calitatea datelor este foarte bună în raport cu prețul. Suportul pentru clienți este foarte receptiv și întotdeauna gata să facă un efort suplimentar pentru a rezolva o problemă. Este o soluție software în dezvoltare care lansează frecvent funcții noi și este mereu deschisă la feedback.',
    reviewer: 'Mihai T.',
  },
];

export const landingReviewCardsColumn2 = [
  {
    id: 1,
    rating: 5,
    reviewBy: 'Calitate bună a datelor comparativ cu prețul',
    content:
      'Dintre toate instrumentele pe care le-am testat, ClientiDirect i-a depășit pe toți în ceea ce privește câte companii a găsit și ce fel de informații suplimentare am putut extrage din datele pe care le-a obținut de la companiile care ne-au vizitat site-ul. De exemplu – alți furnizori care oferă date similare detectează (în medie) cu aproximativ 60-70% mai puține companii decât ClientiDirect.',
    reviewer: 'Gabriel C.',
  },
  {
    id: 2,
    rating: 4.5,
    reviewBy: 'Am acționat și am obținut câteva succese inițiale',
    content:
      'Ușor de configurat. Iar datele furnizate sunt destul de bogate. Am putut găsi informații de contact cu câteva clicuri și am luat legătura cu posibile afaceri în câteva minute.',
    reviewer: 'Cristian M.',
  },
  {
    id: 3,
    rating: 5,
    reviewBy: 'Calitate bună a datelor comparativ cu prețul',
    content:
      'Dintre toate instrumentele pe care le-am testat, ClientiDirect i-a depășit pe toți în ceea ce privește câte companii a găsit și ce fel de informații suplimentare am putut extrage din datele pe care le-a obținut de la companiile care ne-au vizitat site-ul. De exemplu – alți furnizori care oferă date similare detectează (în medie) cu aproximativ 60-70% mai puține companii decât ClientiDirect.',
    reviewer: 'Maria I.',
  },
  {
    id: 4,
    rating: 5,
    reviewBy: 'Comoară ascunsă',
    content:
      'Am dat din greșeală peste ClientiDirect căutând un alt instrument, dar sunt foarte bucuros că am făcut-o! Fiind în B2B, acesta este o comoară ascunsă pentru a vedea ce companii vizitează site-ul tău. Acest lucru ne ajută să identificăm ce canale sunt eficiente în atragerea traficului și, de asemenea, completează strategia noastră de emailuri reci.',
    reviewer: 'Elena D.',
  },
];

export const landingReviewCardsColumn3 = [
  {
    id: 1,
    rating: 5,
    reviewBy:
      'Informații valoroase, configurare ușoară, echipă de suport prietenoasă și receptivă',
    content:
      'Îmi place configurarea ușoară, calitatea datelor care apar și capacitatea de a gestiona lucrurile pe cont propriu. Au o documentație excelentă și sunt fericiți să răspundă rapid și cuprinzător la întrebări.',
    reviewer: 'Ioana S.',
  },
  {
    id: 2,
    rating: 5,
    reviewBy: 'Instrument foarte eficient pentru identificarea lead-urilor',
    content:
      'ClientiDirect nu este doar un instrument excelent pentru a urmări vizitatorii site-ului și a înțelege cine sunt potențialii clienți, dar este și ușor de instalat. Echipa noastră l-a configurat în 10 minute și a obținut rezultate.',
    reviewer: 'Andreea C.',
  },
  {
    id: 3,
    rating: 5,
    reviewBy:
      'Groza pentru identificarea vizitatorilor și segmentarea companiilor în Google Analytics',
    content:
      'Îmi plac caracteristicile excelente și datele pe care le are pentru identificarea lead-urilor care nu completau formularul nostru. Ne place și integrarea cu Google Analytics, unde putem vedea detaliile lead-urilor direct în Google Analytics.',
    reviewer: 'Gabriela M.',
  },
];
