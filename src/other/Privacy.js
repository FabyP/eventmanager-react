// Privacy.js
import React, { Component } from "react";
import "./Other.css";


class Privacy extends Component {
	render() {
		return (
			<div className="app-content">
				<ui5-title level="H1">Datenschutzerklärung</ui5-title>
				<div className="law-section">
					<p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
					<p>
						Fabienne Pipping<br />
						Gänsweide 28<br />
						35745 Herborn<br />
						02772 40728<br />
						<ui5-link href="mailto:fabienne.pipping@iem.thm.de">fabienne.pipping@gmail.com</ui5-link>
					</p>
				</div>

				<div className="law-section">
					<ui5-title level="H2">Ihre Betroffenenrechte</ui5-title>
					<p>
						Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
					</p>
					<ul>
						<li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
						<li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
						<li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
						<li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
						<li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
						<li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
					</ul>
					<p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
					<p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
					<p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <ui5-link href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="nofollow noopener">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</ui5-link>.</p>
				</div>

				<div className="law-section">
					<ui5-title level="H2">Änderung unserer Datenschutzbestimmungen</ui5-title>
					<p>
					Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung
					</p>
				</div>

				<div className="law-section">
					<ui5-title level="H2">Fragen an den Datenschutzbeauftragten</ui5-title>
					<p>
						Das Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
					</p>
					<p>
						Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
					</p>
				</div>

				<div className="law-section">
					<ui5-title level="H3">Urherberrecht</ui5-title>
					<p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
				</div>

				<div className="law-section">
				<p><em>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für <ui5-link href="https://www.activemind.de/datenschutz/datenschutzhinweis-generator/" target="_blank" rel="noopener">externe Datenschutzbeauftragte</ui5-link> (Version #2019-04-10).</em></p>
				</div>
			</div>
		)
	}
}

export default Privacy;