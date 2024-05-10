---
layout: blog
title: Search engines
description: Alternativno guglanje
featuredImage: /favicon.svg
---

# Uvod

## Šta je Search engine

Search engine ili _pretraživač_ je website koji dobavlja linkove ka drugim website-ovima korišćenjem ključnih reči unetih za pretragu. Glavni primer bi bio [Google](https://www.google.com/). Svaki pojam koji nas interesuje unosi se na search engine što znači, u slučaju da je to Google, sve znatiželje poslate u obliku upita mogu biti sačuvane i obrađene radi _unapređenja našeg iskustva_ tj. iskorišćene u svrhu personalizovanih reklama i drugih gadosti.

Na svu sreću, postoje pretraživači koji se ne bave prikupljanjem ličnih podataka i prikazivanjem reklama... bar neki to tvrde ali je upitno da li govore istinu.

## [DuckDuckGo](https://duckduckgo.com/)

Najpoznatiji _privatan_ search engine. Svoje rezultate dobavlja direktno od [Bing-a](https://www.bing.com/) i prikazuje ih bez pratećih kolačića i reklama. Naizgled odličan izbor, iako mu nedostaje kvalitet rezultata po kome je Google poznat, ali to je samo varka. Microsoft, kompanija čiji je Bing pretraživač, je glavni sponzor DuckDuckGo pretraživača i ;[ugovorom zabranjuje blokiranje sopstvenih invaznih kolačića](https://www.tomsguide.com/news/duckduckgo-privacy-browser-facing-backlash-over-microsoft-trackers) na DuckDuckGo pretraživaču.

## [Startpage](https://www.startpage.com)

Nalik DuckDuckGo-u, sebe imenuje za _privatan_ search engine. Za razliku od DDG-a, rezultate nabavlja od Google pretraživača umesto Bing-a. Stvoren u EU (Holandija) drži se rigozornih zakona za protekciju ličnih podataka ([GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation)) i pored nabavke rezultata omogućava _anonimni prikaz_ drugih sajteva, što služi za prikrivanje IP adrese korisnika prilikom pristupa željenom sajtu. Glavna mana Startpage pretraživača je brzina tj. manjak iste, u proseku je duplo sporiji od Google-a a na lošim danima još više.

## [Brave search](https://search.brave.com)

Najpre stvoren kao privatna alternative za Google Chrome, Brave search je stvoren da zameni Google search engine. Pored toga što nabavlja rezultate od Google, i što je drastično brži u time spram Startpage, takođe je počeo da samostalno prikuplja rezultate _puzeći_ internet i time osigurava daleko budućnost rada u slučaju da ne bude u mogućnosti uzimanja Google rezultata. Jedina vidna mana jeste kompanija iza pretraživača, isto kao i za browser, usled [kontraverznih postupaka](https://www.coindesk.com/business/2020/06/08/brave-browsers-affiliate-link-controversy-explained/).

## [SearXNG](https://github.com/searxng/searxng)

Najpoznatiji open-source metasearch engine. Dobavlja rezultate od desetine različitih pretraživača i spaja ih u jednu jednostavnu stranicu. Glavna prednost jeste mogućnost pregleda koda kao i samostalno dizanje softvera za ličnu upotrebu, ali ovo drugo je i mana. Ideja iza projekta je da svako ko želi može da podigne _svoj search engine_ što ujedno znači da mora imati predznanja za taj poduhvat kao i ga naknakdno održava. Problem sa tim je: ako se pretraga radi kroz softver a pretragu radi samo jedna osoba, kolika je razlika između toga i direktnog korišćenja zlonamernog pretraživača? Istina je da postoje metode koja umanjuju opseg informacija prikupljenih od strane drugih pretraživača korišćenjem SearXNG softvera, ali i dalje pozivi za pretragu dolaze za mali broj korisnika sa jedne lokacije čime zlonamernici i dalje mogu da grade profil kojim mogu da zarade. A u slučaju da se ne podiže softver samostalno nego koristi nečiji to onda dovodi u pitanje: kome više veruješ, Google ili nekom strancu sa interneta da rukuje sa tvojim podacima?

## [Hearchco](https://hearch.co)

Hearchco (nadalje Hrčko) je novi pretraživač stvoren sa ciljem da bude anoniman i brz, koristi rezultate sa više različitih search engines (kao i SearXNG) poput Google-a, Bing-a, DuckDuckGo-a, Brave search-a i mnogih drugih pa su rezultati drastično opširniji i precizniji. Glavna prednost Hrčka naspram SearXNG jeste postojanje [glavne instance](https://hearch.co), što omogućava prosečnim korisnicima lak pristup privatnom pretraživanju. Svaka pretraga se sprovodi kroz Hrčko server, što znači da pretraživači nalik Google i Bing ne mogu da vide koji korisnik je šta pretražio. Što više korisnika Hrčko ima to servis postaje anonimniji.

Nalik SearXNG, Hearchco je takođe [otvorenog izvornog koda](https://github.com/hearchco) i bilo ko sa znanjem može podići sopstvenu kopiju softvera. Doduše, Hrčko ima potpuno drugačiju ideju iza samostalnog podizanja softvera: Dok je SearXNG jedna kompletna aplikacija koju svako podiže za sopstvenu korist, Hrčko ima modularan dizajn koji omogućava korisnicima da koriste samo deo koji žele i takođe poseduje sistem agregacije rezultata sa više podignutih softvera. To ukratko znači da je Hrčko softver distribuiran kroz sve korisnike koji ga koriste i svi se međusobno pomažu prilikom dobavke rezultata. Ovaj sistem eksponencijalno poboljšava iskustvo korisnika i čini ceo ekosistem drastično stabilnijim.
