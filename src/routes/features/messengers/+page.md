---
layout: features
title: Aplikacije za dopisivanje
description: Messengers koji koriste E2E enkripciju i nemaju pristup sadžaju poruka
featuredImage: /android-chrome-192x192.png
---

## Uvod

Slanje poruka i pozivanje je suštinska svrha telefona ali danas ni to nije potpuno bezbedno. Većina aplikacija za dopisivanje čuva podatke na serverima, koji mogu biti hakovani a konverzacije otkrivene, takođe niko od nas nije siguran da se naše konverzacije ne prisluškivaju.

## Tox

## Signal

## Silence

## Sesion

Za kreiranje sesion naloga nije potrebno uneti broj telefona, email adresu niti bilo koji lični podatak koji može da poveže sesion nalog i fizičko lice. Jedino što je potrebno da se kreira sesion nalog je "sigurnosna fraza" tj. reč koju korisnik naloga koristi da vrati izgubljen nalog ili ga prebaci na drugi telefon.

Sesion koristi lokinet što je posebna verzija tora napravljena samo za sesion. Svaki podatak poslat preko sesiona prolazi kroz tri mesta uz to da ni jedno mesto nema sve optrebne podatke o pošiljaocu, primaocu i poslatom sadržaju.

Bitno je naglasiti da je sesion "open source" (kod čitavoj projekta je otvoren za javnost) što osigurava svakog korisnika da su sve izjave o privatnosti aplikacije potpuno tačne.

## Briar

Briar se ne oslanja na skladištenje podataka u serverima već na direktnu komunikaciju između dva telefona (svaki poslat podatak se šuva samo na telefonu primaoca i pošiljaoca) pa tako krađa i nadgledanje poslatog materijala postaje nemoguće.

Velika prednost ove aplikacije je što joj za rad nije potrebna internet konekcija već se telefoni međusobno mogu povezati wifi-jem ili čak bluetooth-om.

Jedna od nesvakidašnjih opcija u poređenju sa ostalim aplikacijama za slanje poruka je "panic button", ova opcija služi da korisnik pritiskom na dugme obriše sve podatke sa svog briara.

## Telegram
