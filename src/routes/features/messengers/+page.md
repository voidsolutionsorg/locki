---
layout: features
title: Aplikacije za dopisivanje
description: Messengers koji koriste E2E enkripciju i nemaju pristup sadžaju poruka
featuredImage: /android-chrome-192x192.png
---

## Uvod

Slanje poruka i pozivanje je suštinska svrha telefona ali danas ni to nije potpuno bezbedno. Većina aplikacija za dopisivanje čuva podatke na serverima, koji mogu biti hakovani a konverzacije otkrivene, takođe niko ne može biti siguran da se konverzacije ne prisluškivaju i podaci ne zloupotrebljivaju.

## Tox

## Signal

## Silence

## Session

Za kreiranje Session naloga nije potrebno uneti broj telefona, email adresu niti bilo koji lični podatak koji može da poveže nalog i fizičko lice. Jedino što je potrebno da se kreira nalog jeste "sigurnosna fraza" tj. reč koju korisnik naloga koristi da vrati izgubljen nalog ili ga prebaci na drugi telefon.

Session koristi "lokinet" što je decentralizovan "internet unutar interneta" nalik Tor-u. Svaki podatak poslat preko Session aplikacije prolazi kroz tri node-a uz to da ni jedan nema sve potrebne podatke o pošiljaocu, primaocu i poslatom sadržaju.

Bitno je naglasiti da je Session [otvorenog izvora i proveren](https://blog.quarkslab.com/resources/2021-05-04_audit-of-session-secure-messaging-application/20-08-Oxen-REP-v1.4.pdf) što osigurava svakom korisniku da su izjave o privatnosti aplikacije korektne.

## Briar

Briar se ne oslanja na skladištenje podataka u serverima već na direktnu komunikaciju između dva telefona (svaki poslat podatak se čuva samo na telefonu primaoca i pošiljaoca) pa tako krađa i nadgledanje poslatog materijala postaje nemoguće.

Velika prednost ove aplikacije je što joj za rad nije potrebna internet konekcija već se telefoni međusobno mogu povezati sa WiFi Direct ili čak Bluetooth.

Jedna od nesvakidašnjih opcija u poređenju sa ostalim aplikacijama za slanje poruka je "panic button", ova opcija služi da korisnik pritiskom na dugme obriše sve podatke sa Briar aplikacije.

## Telegram
