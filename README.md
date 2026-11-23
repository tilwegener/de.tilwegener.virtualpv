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

## GitHub-Release zu Homey hochladen

1. Erstelle in den [Homey Developer Tools](https://tools.developer.homey.app/me) einen Personal Access Token für das Athom-Konto, dem die App gehört. Hinterlege ihn im GitHub-Repository unter **Settings → Secrets and variables → Actions** als Repository-Secret `HOMEY_PAT`.
2. Setze die gewünschte Version in `.homeycompose/app.json` und ergänze den englischen Eintrag (`en`) für dieselbe Version in `.homeychangelog.json`. Führe `npm run validate` aus und committe auch das erzeugte `app.json`.
3. Veröffentliche auf GitHub ein Release für diesen Commit mit dem Tag `<Version>` oder `v<Version>`, zum Beispiel `1.0.0` oder `v1.0.0`. Der Workflow lädt den Build als Entwurf in die Homey Developer Tools hoch. Von dort kannst du ihn als Testversion freigeben oder zur Prüfung für den Homey App Store einreichen.
