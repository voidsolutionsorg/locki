---
layout: blog
title: Preporučene aplikacije za dopisivanje
description: |
  Privatnost znači da su tvoji podaci samo tvoji.
  Anonimnost znači da je tvoj online identitet odvojen od realnog.
  Sigurnost znači da možeš verovati u prve dve tvrdnje.
featuredImage: /favicon.svg
---

# Uvod

Slanje poruka je jedna od glavnih uloga telefona, nažalost danas je veoma teško bezbedno i privatno poslati poruku. Ovo su aplikacije otvorenog izvornog koda, koje koriste algoritme za šifrovanje poruka i štite korisnike od nepoželjnih očiju.

# [Signal](https://www.signal.org/)

Signal je jedna od najpoznatijih privatnih aplikacija za dopisivanje, stvorena 2013. od strane neprofitne organizacije. U [više navrata je proveren](https://community.signalusers.org/t/overview-of-third-party-security-audits/13243) od stranih tela i izvorni kôd je otvoren široj javnosti. Jedina mana pripisuje se tome da je svaki nalog povezan sa brojem telefona. To znači da se lako može otkriti privatni identitet iza nečijeg naloga, drugačije rečeno, poruke i pozivi su privatni ali ne i anonimni.

Signal se preporučuje za upotrebu kad nemate problem sa manjkom anonimnosti (razgovarate sa ljudima koji vas poznaju). Aplikacija je najsličnija većini modernih aplikacija za dopisivanje pa je zato i najlakša za upotrebu.

# [Session](https://getsession.org/)

Za kreiranje Session naloga nije potrebno uneti broj telefona, email adresu niti bilo koji lični podatak koji može da poveže nalog i fizičko lice. Jedino što je potrebno da se kreira nalog jeste "sigurnosna fraza" tj. reč koju korisnik naloga koristi da vrati izgubljen nalog ili da ga prebaci na drugi telefon.

Session koristi [_lokinet_](https://lokinet.org/) koji je decentralizovan _internet unutar interneta_ nalik Tor-u, samo mnogo efikasniji i time brži za slanje poruka. Svaki podatak poslat preko Session aplikacije prolazi kroz tri čvora, uz to da ni jedan nema sve potrebne podatke o pošiljaocu, primaocu i poslatom sadržaju.

Bitno je naglasiti da je Session [otvorenog izvora i proveren](https://blog.quarkslab.com/resources/2021-05-04_audit-of-session-secure-messaging-application/20-08-Oxen-REP-v1.4.pdf) što osigurava svakom korisniku da su izjave o privatnosti i anonimnosti aplikacije validne.

Session je zapravo anoniman, tj. nije moguće povezati privatni identitet sa nalogom. Zbog toga se preporučuje za dopisivanje sa strancima i ljudima kojima nije potrebno/poželjno da znaju tačno sa kime komuniciraju.

# [Briar](https://briarproject.org/)

Briar se ne oslanja na skladištenje podataka na serverima već na direktnu komunikaciju između dva telefona, svaki poslat podatak se čuva samo na telefonu primaoca i pošiljaoca, pa tako krađa i nadgledanje poslatog materijala postaje nemoguće.

Velika prednost ove aplikacije je što joj za rad nije potrebna internet konekcija već se telefoni međusobno mogu povezati sa WiFi ili Bluetooth.

Jedna od nesvakidašnjih funkcionalnosti u poređenju sa ostalim aplikacijama za slanje poruka je _panic button_. Ova opcija služi da korisnik pritiskom na dugme obriše sve podatke sa Briar aplikacije i time u potpunosti razori svoj trag, poput Tanosa samo što je moralno prihvatljivo.

Nudi korisnicima maksimalnu privatnost i anonimnost ali po cenu komfora. Naime, kako bi poruka stigla do primaoca oba uređaja moraju imati uključenu aplikaciju makar u pozadini (što troši bateriju) ili se dopisivati u dogovoreno vreme.

Ovo je već teška artiljerija, praktično nemoguće za ometanje kontakta i narušavanje privatnosti. Preporučuje se kad želite da budete sigurni da ništa ne može da stane na put komunikaciji sa drugom osobom.

# [Silence](https://silence.im/)

Silence je aplikacija koja vrši šifrovanje SMS poruka Signal-ovim protokolom. Velika mana ove aplikacije je što se oslanja na SMS poruke (najnebezbedniji način za slanje poruka) ali to joj je i najveća prednost. Ponekad smo prosto primorani da koristimo SMS poruke kao što je mesto na kom je signal previše loš za slanje poruka preko interneta.

Preporučuje se kao poslednja opcija, ukoliko ste primorani da koristite SMS poruke, da makar niko ne može da vidi šta pišete.
