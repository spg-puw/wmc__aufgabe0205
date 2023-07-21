# Aufgabe Funktionen

Die folgenden Aufgaben wurde aus dem [Repository von Koll. Schletz](https://github.com/schletz/Wmc/blob/main/31_JavaScript/41_FunctionsPrototype.md#%C3%BCbung) übernommen und um Tests ergänzt.

## Aufgabe 1

### Datumserweiterung

Es können auch bei bestehenden Objekten wie z. B. *Date* Funktionen und Properties hinzugefügt werden.
Füge zum *Date* Objekt 2 Methoden hinzu:
- *schoolyearBegin(year)* liefert ein Date Objekt, welches den ersten Montag im September liefert.
- *toGermanDateString()* soll die aktuelle Instanz als deutsches Datum (DD.MM.YYYY) ausgeben.

Bearbeite die Datei *aufgabe1.mjs*<br>Die Datei kann mit `npm run aufgabe1` ausgeführt werden.

Beachte die folgenden Hinweise:

- Überlege, ob Date selbst oder der prototype erweitert werden soll.
- Mit `("00" + myVal).slice(-2)` kann eine ganze Zahl in einen String mit führender 0 umgewandelt
  werden. *slice(-2)* liefert die rechten 2 Stellen zurück. So wird z. B. aus 1 der String "001" und
  nach *slice(-2)* der String "01".
- Beachte, dass *Date.prototype.getMonth()* die Monate bei 0 zu zählen beginnt. Auch der Konstruktor
  von Date *Date(year, month, day)* erwartet das Monat beginnend mit 0.
- *Date.prototype.getDay()* liefert den Wochentag, *Date.prototype.getDate()* den Tag des Monats.
- *Date.prototype.getFullYear()* liefert das Jahr.

### Ausgabe

```text
07.09.2020
06.09.2021
05.09.2022
04.09.2023
02.09.2024
01.09.2025
07.09.2026
06.09.2027
04.09.2028
03.09.2029
02.09.2030
01.09.2031
06.09.2032
05.09.2033
04.09.2034
03.09.2035
01.09.2036
07.09.2037
06.09.2038
05.09.2039
```

## Aufgabe 2

### Lottoziehung

Implementiere eine Lottoziehung. Bei einer Lottoziehung werden eindeutige Werte zwischen 1 und
45 gezogen. Verwende daher zum Speichern der gezogenen Zahlen und des einzelnen Tipps ein Set.
Auf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set kannst
du die Methoden, die es bietet, nachlesen.

Erweitere zuerst das Set, sodass es eine Methode *countIdentical(other)* besitzt. Es wird die
Anzahl der Werte, die sowohl im eigenen Set als auch in *other* enthalten sind, zurückgegeben.

Danach implementiere die Konstruktorfunktion *Lottery(number)*. Die gezogenen Zahlen werden
als Array übergeben. Der Konstruktor von Set kann das Array in ein Set umwandeln. Verwende
zur Speicherung der Tipps ein Array von Sets.

Die Methode *addTipp* fügt nur Tipps hinzu, die 6 unterschiedliche Werte haben. Die Methode
*getStatistics* liefert ein JSON Objekt mit der Anzahl der übereinstimmenden Zahlen als Key und
der Anzahl der gespeicherten Tipps als Wert.

Bearbeite die Datei *aufgabe2.mjs*<br>Die Datei kann mit `npm run aufgabe1` ausgeführt werden. Die korrekte
Ausgabe muss der unten angezeigten Ausgabe entsprechen.

### Ausgabe

```text
4 identical values.
{ '0': 2, '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1 }
```

## Testsetup

Es wird *jest* zum Testen verwendet. Das Setup erfolgt:

```sh
npm install
```

Das Programm selber kann mit folgendem Befehl gestartet werden:

```sh
npm run start

# für Aufgabe 1
npm run aufgabe1
node aufgabe1.mjs

# für Aufgabe 2
npm run aufgabe2
node aufgabe2.mjs
```

Anschließend können die Tests mit folgendem Befehl durchlaufen werden:

```sh
npm run test
```
