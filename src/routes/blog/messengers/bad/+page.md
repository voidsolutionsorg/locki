---
layout: blog
title: Loše aplikacije za dopisivanje
description: |
  Oj aplikacijo, pitoma ružice,
  kad si rasla, na šta si gledala?

  Il' si rasla biti privatna,
  il' na ideju da si anonimna,
  il' na korist svojih korisnika?

  Oj korisniče, moje bedno vlasništvo,
  nit' sam rasla biti privatna,
  nit' na ideju da sam anonimna,
  nit' na tvoju korist,

  već sam, mlada, prema $$$ rasla!
featuredImage: /favicon.svg
---

# Uvod

Neke aplikacije za dopisivanje su jasno nebezbedne (npr. SMS i Email), neke nemaju šifrovanje _od kraja do kraja_ ([e2ee](https://en.wikipedia.org/wiki/End-to-end_encryption)), dok neke otvoreno češljaju poruke korisnika kako bi se uverile da su po njihovim propisima... Problem nastaje kad opšta javnost smatra da je aplikacija bezbednom za upotrebu dok ona zapravo ne poštuje korisničku privatnost.

Iako mnogi od nas misle da informacije koje pružamo online nisu dovoljne da se stvori konkretan profil o nama, Signal je objavio članak pod naslovom [Instagram reklame koje vam Facebook ne pokazuje](https://www.signal.org/blog/the-instagram-ads-you-will-never-see/) u kome otvoreno da kompanije ne samo da imaju informacije o zanimanju i lokaciji korisnika, već i o njihovom statusu veze, koje hobije vole, koga od poznatih podržavaju, političko opredeljenje, seksualnost i mnoge druge privatne informacije.

# [Messenger](https://www.messenger.com/)

Iako na Messenger-u postoji opcija za šifrovanje poruka, ona nije uvek uključena već se očekuje od korisnika da zna da ta opcija postoji i kako da je aktivira. Nažalost, kako god opisali taj vid šifrovanja nemoguće je biti siguran da li je to stvarno ispoštovano ili Meta ima pristup svakoj poruci.

Facebook je već [upitnog kredibiliteta](https://www.vice.com/en/article/n7zevd/this-is-the-data-facebook-gave-police-to-prosecute-a-teenager-for-abortion) i godinama se pokazao kao platforma koja nema interese korisnika kao svoj cilj, a samim tim i svaka nova aplikacija koju Meta otkupi potpada pod to pravilo (Instagram, WhatsApp).

# [Viber](https://www.viber.com/)

Viber, za razliku od drugih, nije imao incidente gde otvoreno prodaje i zloupotrebljava korisničke podatke, ali kada su pitani šifruju li poruke i na koji način odgovor je bio "Nešto slično Signalu, ali ne možemo pokazati tačno šta niti kako".

Koliko god želeli da verujemo nekome, ako evidentno skrivaju algoritme šifrovanja (pogotovo što ti algoritmi nisu revolucionarni) moramo postaviti pitanje da li se uopšte isplati koristiti takve aplikacije.

# [WhatsApp](https://www.whatsapp.com/)

WhatsApp je zapravo jedina aplikacija kompanije Meta koja neironično koristi Signal-ov protocol za šifrovanje poruka _od kraja do kraja_. Iako se to ne može tačno proveriti, jer kôd aplikacije nije otvoren, postoji drugi problem... Čak i da je slanje poruka između dva člana apsolutno privatno, prilikom slanja poruke nekoj osobi ta ista poruka se šalje i WhatsApp serveru radi provere za ilegalne aktivnosti. Naime, ovo je nedavno dodato _unapređenje_ koje služi da "zaštiti decu", ali zato apsolutno narušava čitavu svrhu iza šifrovanja.

# [Telegram](https://telegram.org/)

Za razliku od pomenutih aplikacija, izvorni kôd Telegram-a je otvoren i proveren za tačne tvrdnje o privatnosti. Uprkos tome, šifrovanje _od kraja do kraja_ je fabrički isključeno i radi **_samo prilikom dopisivanja 1 na 1_**, dok u grupama (nezavisno od veličine) ne postoji takvo šifrovanje.

Reklamiranje sebe kao _privatnu_ alternativu za popularne aplikacije za dopisivanje dok zaista nije mnogo drugačija od njih je veoma zabrinjavajuća okolnost.

# Zaključak

Veoma je važno samostalno istražiti i uveriti se u bezbednost, privatnost i anonimnost aplikacija koje koristimo. Za preporučene aplikacije za dopisivanje [kliknite ovde](/blog/messengers/good)
