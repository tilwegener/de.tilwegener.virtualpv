# Virtuelle PV-Anlage für Homey

Füge in Homey ein **Virtuelles Balkonkraftwerk** hinzu. Das Gerät erscheint als Solaranlage in Homey Energy.

- **Aktuelle Erzeugungsleistung (W)** ist die momentane Leistung deines Balkonkraftwerks. Gib sie positiv ein, zum Beispiel 450 W. Bei Stillstand setze sie auf 0 W.
- **Gesamtertrag (kWh)** ist der kumulierte Erzeugungszähler deines Wechselrichters, zum Beispiel 128,354 kWh. Für automatische Aktualisierungen übergib den Gesamtstand bei jeder Messung.

Beide Werte lassen sich in den erweiterten Geräteeinstellungen eingeben. Für automatische Aktualisierungen nutze die Flow-Aktionen **Erzeugungsleistung setzen** und **Gesamtertrag setzen**. Die Aktionen akzeptieren Zahlen-Tokens.

## Entwickeln und installieren

Voraussetzungen sind Node.js 24 oder neuer für die Homey CLI und ein kompatibles Homey mit Homey OS 12 oder neuer.

```sh
npm ci
npm run validate
npx homey login
npx homey select
npm run start -- --remote
```

Der letzte Befehl startet die App zum Entwickeln auf dem gewählten Homey. Mit `npx homey app install` kannst du sie direkt auf dem gewählten Homey installieren.

Bearbeite das App-Manifest unter `.homeycompose/app.json` und die Treiberdateien unter `drivers/virtual-pv/`. Die Homey CLI erzeugt bei der Validierung das zusammengeführte `app.json`.
