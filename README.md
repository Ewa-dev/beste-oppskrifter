# Hva nettstedet gjør og hvem det er laget for

En oppskriftsportalen laget med  Next.js og TypeScript. Dette er et nettsted som hjelper brukere med å finne gode oppskrifter til
forskjellige anledninger. 

Det er laget for alle som liker å lage mat, spesielt studenter, familier og de som ønsker inspirasjon til enkle og gode måltider.

Nettstedet inneholder:
-Forside: Presenterer nettstedet.
-Oppskrifter: Viser en oversikt over oppskrifter hentet fra et eksternt API.
-Detaljside: Viser mer informasjon om en valgt oppskrift med ingredienser, bilde og fremgangsmåte.
-Søk funskjon: Gjør det mulig å søke etter oppskrifter ved hjelp av navn eller søkeord.
-Paginering: Gjør det mulig å navigere mellom flere sider med oppskrifter.
-Loading Skeleton: Viser en lasteindikator mens oppskriftene hentes fra API-et.
-Om oss: Gir informasjon om nettstedet og hvem det er laget for.

# Hvilket API som brukes

Prosjektet bruker https://dummyjson.com/docs/recipes API. Det leverer informasjon om: navn, bilde, ingredienser, fremgangsmåte.

# Hvordan prosjektet installeres og startes

For å kjøre prosjektet lokalt må du ha Node.js installert.

1.	Klon Git-repositoriet:
git clone https://github.com/Ewa-dev/beste-oppskrifter

2.	Gå til prosjektmappen:
cd beste-oppskrifter

3.	Installer avhengighetene:
npm install

4.	Start utviklingsserveren:
npm run dev

5.	Åpne nettleseren på:
http://localhost:3000

# Kjente begrensninger

1. Oppskriftene hentes fra DummyJSON API og kan derfor ikke redigeres av brukeren.
2. Innholdet er avhengig av at det eksterne API-et er tilgjengelig.
3. Utvalget av oppskrifter er begrenset til dataene som tilbys av API-et.
4. Endres det DummyJSON Api for et annet API med flere oppskrifter, må det endres paginering for å ikke vise hver tall (det kan ta for mye plass og se ikke fint ut, spesielt på midre enheter).

# Teknologier

- Next.js
- React
- TypeScript
- CSS
- HTML

# Utvikler

Prosjektet er utviklet av Ewa, student av Frontend Utvikling ved Gokstad Akademiet.


