import {
	faCircleCheck,
	faCircleExclamation,
	faKey,
	faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";
import {
	getInvalidStateDisplay,
	getMissingCallbackParamsDisplay,
	getOAuthRedirectErrorDisplay,
} from "../utils/sailappsAuthMessages";
import styles from "./sailapps.module.css";

/** @typedef {'loading' | 'ready' | 'error'} PageStatus */

/**
 * Version prefix for the paste code. The prefix lets a client reject a value
 * that came from somewhere else, and lets us change the payload later.
 */
const PASTE_CODE_PREFIX = "sp1.";

function toBase64Url(value) {
	const bytes = new TextEncoder().encode(value);
	let binary = "";
	for (const byte of bytes) {
		binary += String.fromCharCode(byte);
	}
	return btoa(binary)
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "");
}

/**
 * Packs the authorization code and the state into one value the user copies.
 * The application that started sign-in unpacks it, compares the state with the
 * value it sent, and exchanges the code for a token itself.
 */
function buildPasteCode(code, state) {
	return (
		PASTE_CODE_PREFIX + toBase64Url(JSON.stringify({ v: 1, code, state }))
	);
}

/**
 * Derives the short code shown in both the application and this page.
 * The application derives the same value from the state it sent.
 */
function formatConfirmationCode(state) {
	if (!state || state.length < 8) {
		return null;
	}
	return `${state.slice(0, 4)}-${state.slice(4, 8)}`;
}

function ResultBanner({ display }) {
	if (!display) {
		return null;
	}

	const icon =
		display.severity === "success"
			? faCircleCheck
			: display.severity === "warning"
				? faTriangleExclamation
				: faCircleExclamation;

	const className =
		display.severity === "success"
			? styles.resultSuccess
			: display.severity === "warning"
				? styles.resultWarning
				: styles.resultError;

	return (
		<div className={className} role="alert">
			<FontAwesomeIcon icon={icon} className={styles.resultIcon} />
			<div className={styles.resultText}>
				<p className={styles.resultTitle}>{display.title}</p>
				<p className={styles.resultMessage}>{display.message}</p>
				{display.hint ? (
					<p className={styles.resultHint}>{display.hint}</p>
				) : null}
			</div>
		</div>
	);
}

function SailApps() {
	const [pasteCode, setPasteCode] = useState("");
	const [confirmationCode, setConfirmationCode] = useState("");
	/** @type {[PageStatus, function]} */
	const [pageStatus, setPageStatus] = useState("loading");
	const [copied, setCopied] = useState(false);
	const [resultDisplay, setResultDisplay] = useState(null);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const oauthError = urlParams.get("error");
		const oauthErrorDescription = urlParams.get("error_description");
		const code = urlParams.get("code");
		const stateParam = urlParams.get("state");

		// Remove the authorization code from the address bar before anything else
		// runs. The code must not reach browser history, a bookmark, or a referrer.
		window.history.replaceState({}, document.title, window.location.pathname);

		if (oauthError) {
			setResultDisplay(
				getOAuthRedirectErrorDisplay(oauthError, oauthErrorDescription),
			);
			setPageStatus("error");
			return;
		}

		if (!code || !stateParam) {
			setResultDisplay(
				getMissingCallbackParamsDisplay(Boolean(code), Boolean(stateParam)),
			);
			setPageStatus("error");
			return;
		}

		const confirmation = formatConfirmationCode(stateParam);
		if (!confirmation) {
			setResultDisplay(getInvalidStateDisplay());
			setPageStatus("error");
			return;
		}

		setPasteCode(buildPasteCode(code, stateParam));
		setConfirmationCode(confirmation);
		setPageStatus("ready");
	}, []);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(pasteCode);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	};

	return (
		<Layout noFooter title="SailPoint Application Authentication">
			<div className={styles.gettingStartedText}>
				<FontAwesomeIcon
					icon={faKey}
					style={{ fontSize: "3rem" }}
					className={styles.docCardIcon}
					size="3x"
				/>
				<h1 className={styles.gettingStartedOne}>
					SailPoint Application Authentication
				</h1>

				{pageStatus === "loading" ? (
					<p className={styles.gettingStartedTwo}>Loading…</p>
				) : null}

				{pageStatus === "ready" ? (
					<>
						<p className={styles.gettingStartedTwo}>
							Copy the code below and paste it into the application that
							started sign-in. Make sure that the application shows the
							confirmation code <strong>{confirmationCode}</strong>.
						</p>

						<div className={styles.gettingStartedThree}>
							<p className={styles.pasteCodeLabel}>Your one-time code</p>
							<code className={styles.pasteCode}>{pasteCode}</code>
							<div className={styles.button}>
								<button
									type="button"
									onClick={handleCopy}
									className={styles.link}
								>
									{copied ? "Copied" : "Copy code"}
								</button>
							</div>
						</div>

						<ResultBanner
							display={{
								severity: "warning",
								title: "Paste this code only into the application you started",
								message:
									"The code grants access to your SailPoint tenant for that application.",
								hint: "The code works one time only, and it expires in a few minutes. This page never sends the code anywhere.",
							}}
						/>
					</>
				) : null}

				{resultDisplay ? <ResultBanner display={resultDisplay} /> : null}
			</div>
		</Layout>
	);
}

export default SailApps;
