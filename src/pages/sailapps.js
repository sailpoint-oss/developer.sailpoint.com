import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
	faCircleCheck,
	faCircleExclamation,
	faKey,
	faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";
import { SailAppsAuthError, sendCode } from "../services/SailAppsService";
import {
	getApiErrorDisplay,
	getInvalidStateDisplay,
	getMissingCallbackParamsDisplay,
	getOAuthRedirectErrorDisplay,
	SUCCESS_DISPLAY,
} from "../utils/sailappsAuthMessages";
import styles from "./sailapps.module.css";

/** @typedef {'loading' | 'ready' | 'success' | 'error'} PageStatus */

function formatConfirmationCode(uuid) {
	if (!uuid || uuid.length < 4) {
		return "----";
	}
	const tail = uuid.slice(-8);
	return `${tail.slice(0, 4).toUpperCase()}-${tail.slice(4).toUpperCase()}`;
}

function formatApiOrigin(baseURL) {
	if (!baseURL) {
		return null;
	}
	try {
		return new URL(baseURL).origin;
	} catch {
		return null;
	}
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
	const [authCode, setAuthCode] = useState("");
	const [state, setState] = useState("");
	const [uuid, setUuid] = useState("");
	const [apiOrigin, setApiOrigin] = useState("");
	/** @type {[PageStatus, function]} */
	const [pageStatus, setPageStatus] = useState("loading");
	const [isSending, setIsSending] = useState(false);
	const [resultDisplay, setResultDisplay] = useState(null);
	const { siteConfig } = useDocusaurusContext();

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const oauthError = urlParams.get("error");
		const oauthErrorDescription = urlParams.get("error_description");

		if (oauthError) {
			setResultDisplay(
				getOAuthRedirectErrorDisplay(oauthError, oauthErrorDescription),
			);
			setPageStatus("error");
			return;
		}

		const code = urlParams.get("code");
		const stateParam = urlParams.get("state");

		if (!code || !stateParam) {
			setResultDisplay(
				getMissingCallbackParamsDisplay(Boolean(code), Boolean(stateParam)),
			);
			setPageStatus("error");
			return;
		}

		try {
			const decodedState = JSON.parse(atob(stateParam));
			if (!decodedState?.id) {
				throw new Error("missing session id");
			}
			setAuthCode(code);
			setState(stateParam);
			setUuid(decodedState.id);
			setApiOrigin(formatApiOrigin(decodedState.baseURL) || "");
			setPageStatus("ready");
		} catch {
			setResultDisplay(getInvalidStateDisplay());
			setPageStatus("error");
		}
	}, []);

	const handleConfirm = async () => {
		if (!authCode) {
			setResultDisplay(getApiErrorDisplay("Code not provided"));
			setPageStatus("error");
			return;
		}

		setIsSending(true);
		setResultDisplay(null);

		try {
			const result = await sendCode(
				siteConfig.customFields.CMS_APP_API_ENDPOINT,
				authCode,
				state,
			);

			if (result?.message === "Token added successfully") {
				setPageStatus("success");
				setResultDisplay(SUCCESS_DISPLAY);
			} else {
				setPageStatus("error");
				setResultDisplay(
					getApiErrorDisplay(
						"Authentication failed: Unexpected response from server",
					),
				);
			}
		} catch (error) {
			setPageStatus("error");
			if (error instanceof SailAppsAuthError) {
				setResultDisplay(getApiErrorDisplay(error.message, error.status));
			} else if (error instanceof Error) {
				setResultDisplay(getApiErrorDisplay(error.message));
			} else {
				setResultDisplay(getApiErrorDisplay());
			}
		} finally {
			setIsSending(false);
		}
	};

	const showConfirmation = pageStatus === "ready" && state && uuid;
	const showGrantButton = showConfirmation && !isSending;

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
					<p className={styles.gettingStartedTwo}>
						Confirm the application you are authorizing shows the same
						confirmation code
						{apiOrigin ? ` and SailPoint URL (${apiOrigin})` : ""} before
						granting access.
					</p>
				) : null}

				{showConfirmation ? (
					<div className={styles.gettingStartedThree}>
						<p>
							Your confirmation code:
							<br />
							<span className={styles.bold}>
								{formatConfirmationCode(uuid)}
							</span>
						</p>
						{showGrantButton ? (
							<div className={styles.button}>
								<button
									type="button"
									onClick={handleConfirm}
									disabled={isSending}
									className={styles.link}
								>
									{isSending
										? "Confirming and sending…"
										: "Grant application access"}
								</button>
							</div>
						) : null}
					</div>
				) : null}

				{isSending ? (
					<p className={styles.gettingStartedThree}>Completing sign-in…</p>
				) : null}

				{resultDisplay ? <ResultBanner display={resultDisplay} /> : null}
			</div>
		</Layout>
	);
}

export default SailApps;
