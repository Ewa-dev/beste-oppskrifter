Delinnlevering 2: Bygg et nettsted for å utforske et tema

Arbeidskrav 2 handlet om å utvikle et nettsted med Next.js og TypeScript som hjelper brukeren med å finne og utforske informasjon om et tema. Jeg har valgt å lage en oppskriftsportal som gjør det enkelt å finne retter. Grunnet til valget er at jeg selv liker å lage mat og dette er et tema vi har ikke jobbet med under studiene ennå.

Beste Oppskrifter er en portal som henter data fra DummyJSON API. Dette var en naturlig valg siden vi brukte DummyJSON i undervisningen og. Jeg har valgt å bruke name, ingredients, instructions og image fra API-et. Etter min mening var dette tilstrekkelig for å lage en enkel og oversiktlig nettside. Jeg ønsket heller å fokusere meg på funksjonalitet enn på å hente mange data eller bruke mye tid på styling av ekstra elementer. 

Designet jeg har valgt bruker lyse farger og gulrotmotiv i bakgrunnen. Målet var å skape et brukervennlig og oversiktlig design som passer til temaet mat og matlaging. 

Nettstedet inneholder flere sider: 
-Hjem- det kan enten velges Hjem eller logo for å åpne den; den presenterer nesttstedet,
-Oppskrifter- viser en oversikt over oppskrifter hentet fra et eksternt API, 
-Detaljside- viser mer informasjon om en valgt oppskrift med ingredienser, bilde og fremgangsmåte,
-Om oss- gir informasjon om nettstedet og hvem det er laget for.

I tillegg er det flere funksjoner:
-Søkefeltet-gjør det mulig å søke etter oppskrifter ved hjelp av navn eller søkeord,
-Paginering- gjør det mulig å navigere mellom flere sider med oppskrifter,
-Loading Skeleton- viser en lasteindikator mens oppskriftene hentes fra API-et.

Jeg har laget flere gjenbrukbare komponenter som er samlet i egne mapper. Dette gjør koden mer oversiktlig og gjør det enklere å gjenbruke komponentene på flere sider.

En utfordring jeg møtte underveis var knyttet til pagination. Plutselig dukket det opp flere sidetall enn forventet. Med 12 oppskrifter per side skulle det totalt vøre fem sider. På side 1–4 ble det vist riktig antall sidetall, men da jeg kom til side 5, dukket det plutselig opp 25 sider. Etter å ha undersøkt koden fant jeg ut beregninen med Math.ceil() var feil. Jeg rettet beregningen slik at det totale antallet elementer ble delt på antall elementer per side. Da fungerte pagineringen som forventet. I tillegg opplevde jeg flere små feil underveis som jeg måtte undersøke og rette.

Det finnes flere muligheter for å utvikle nesttstedet, for eksempel filtrering etter kaloriinnhold, cuisine eller vanskelighetsgrad. Med mer tid ville jeg gjerne ha jobbet videre med filtreringsfunksjoner. En interessant mulighet kunne vært å la brukeren velge bort bestemte ingredienser ved allergier eller matpreferanser.

Gjennom arbeidet har jeg fått mer erfaring med Next.js, TypeScript, API+integrasjon, dynamiske ruter og gjenbrukbare komponenter.

Kilden:
Bakgrunnsbilde av gulrøtter: https://pixabay.com/no/illustrations/gulrot-bakgrunn-tapet-gr%C3%B8nnsaker-4818847/ keenyam
bilde av logo: https://pixabay.com/no/vectors/illustrasjon-av-kokegryte-10139930/ SVGcraft
emoji: https://emojidb.org/
