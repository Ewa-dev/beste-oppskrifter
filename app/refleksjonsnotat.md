Delinnlevering 2: Bygg et nettsted for å utforske et tema
Arbeidskrav 2 handlet om å utvikle et nettsted med Next.js og TypeScript som hjelper brukeren med å finne og utforske informasjon om et tema en velger. Jeg har valgt en oppskriftsportal som gjør det enkelt å finne retter. Grunnet til valget er at jeg selv liker å lage mat og dette er et tema vi har ikke jobbet ennå under studiene.
Beste Oppskrifter er en portal som henter data fra DummyJSON API. Dette var en naturlig valt siden vi brukte DummyJSON på forelesning. 
Designet jeg har valgt viser lyse farger og gulrøtter i bakgrunn slik at det er brukervennlig, tydelig og er forbundet med sunn mat. 
Nettstedet inneholder flere sider: 
-Hjem- det kan enten velges Home eller logo for å åpne den, den presenterer nesttstedet,
-Oppskrifter- viser en oversikt over oppskrifter hentet fra et eksternt API, 
-Detaljside- viser mer informasjon om en valgt oppskrift med ingredienser, bilde og fremgangsmåte,
-Om oss- gir informasjon om nettstedet og hvem det er laget for.
I tillegg er det flere funksjoner:
-Søkefeltet-gjør det mulig å søke etter oppskrifter ved hjelp av navn eller søkeord,
-Paginering- gjør det mulig å navigere mellom flere sider med oppskrifter,
-Loading Skeleton- viser en lasteindikator mens oppskriftene hentes fra API-et.
Jeg har laget flere gjenbrukbare komponenter som ligger i en mappe. 
Utfordring underveis var med pagination der det plutselig kom flere sider til valg, selv om med 12 oppskrifter på en side skulle det komt 5 sider da man var på side nr 5(på sider 1 til 4 var det riktig visning av 5 sider til valg, på side 5 var det 25 sider til valg). Etter å ha sjekket css filene fant jeg en feil i kode der Math.ceil funksjonen var brukt med feil. Etter å ha rettet linje til total elementer delt på elementer på en side var feilen fikset. Utenom dette var det flere små feil underveis.
Det er flere muligheter for filtrering som valg av kalorier, cuisine eller vanskelighetsgrad. Med mer tid ville jeg gjerne jobbe med filtrering, for eksempel at man kunne huke av uønskede ingredienser ved allergier osv. Samtidig er søkefeltet der man kan skrive ønskede ingredienser.

Kilden:
Bakgrunnsbilde av gulrøtter: https://pixabay.com/no/illustrations/gulrot-bakgrunn-tapet-gr%C3%B8nnsaker-4818847/ keenyam
bilde av logo: https://pixabay.com/no/vectors/illustrasjon-av-kokegryte-10139930/ SVGcraft
emoji: https://emojidb.org/
