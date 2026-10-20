import React from "react";

import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { useTypedSelector } from "@theme/ApiItem/hooks";

function SecuritySchemes(props: any) {
  const options = useTypedSelector((state: any) => state.auth.options);
  const selected = useTypedSelector((state: any) => state.auth.selected);
  const infoAuthPath = `/${props.infoPath}#authentication`;

  if (selected === undefined) return null;

  if (options[selected]?.[0]?.type === undefined) {
    return null;
  }

  const selectedAuth = options[selected];

  const keyTranslations: Record<string, { id: string; message: string }> = {
    description: {
      id: "theme.openapi.securitySchemes.description",
      message: "description:",
    },
    scheme: {
      id: "theme.openapi.securitySchemes.scheme",
      message: "scheme:",
    },
    bearerFormat: {
      id: "theme.openapi.securitySchemes.bearerFormat",
      message: "bearerFormat:",
    },
    openIdConnectUrl: {
      id: "theme.openapi.securitySchemes.openIdConnectUrl",
      message: "openIdConnectUrl:",
    },
  };

  const renderRest = (rest: Record<string, any>) =>
    Object.keys(rest).map((k) => {
      const translation = keyTranslations[k];
      const label = translation
        ? translate({ id: translation.id, message: translation.message })
        : `${k}:`;
      return (
        <span key={k}>
          <strong>{label} </strong>
          {typeof rest[k] === "object"
            ? JSON.stringify(rest[k], null, 2)
            : String(rest[k])}
        </span>
      );
    });
  return (
    <details className="openapi-security__details" open={true}>
      <summary className="openapi-security__summary-container">
        <h4 className="openapi-security__summary-header">
          Authorization: {selectedAuth[0].name ?? selectedAuth[0].type}
        </h4>
      </summary>
      {selectedAuth.map((auth: any) => {
        const isHttp = auth.type === "http";
        const isApiKey = auth.type === "apiKey";
        const isOauth2 = auth.type === "oauth2";
        const isOpenId = auth.type === "openIdConnect";

        if (isHttp) {
          if (auth.scheme === "bearer") {
            const { name, key, type, scopes, ...rest } = auth;
            return (
              <React.Fragment key={auth.key}>
                <pre
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "var(--openapi-card-background-color)",
                  }}
                >
                  <span>
                    <strong>
                      {translate({
                        id: "theme.openapi.securitySchemes.name",
                        message: "name:",
                      })}
                    </strong>{" "}
                    <Link to={infoAuthPath}>{name ?? key}</Link>
                  </span>
                  <span>
                    <strong>
                      {translate({
                        id: "theme.openapi.securitySchemes.type",
                        message: "type:",
                      })}
                    </strong>{" "}
                    {type}
                  </span>
                  {scopes && scopes.length > 0 && (
                    <span>
                      <strong>
                        {translate({
                          id: "theme.openapi.securitySchemes.scopes",
                          message: "scopes:",
                        })}
                      </strong>{" "}
                      <code>
                        {auth.scopes.length > 0 ? auth.scopes.toString() : "[]"}
                      </code>
                    </span>
                  )}
                  {renderRest(rest)}
                </pre>
              </React.Fragment>
            );
          }
          if (auth.scheme === "basic") {
            const { name, key, type, scopes, ...rest } = auth;
            return (
              <React.Fragment key={auth.key}>
                <pre
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "var(--openapi-card-background-color)",
                  }}
                >
                  <span>
                    <strong>
                      {translate({
                        id: "theme.openapi.securitySchemes.name",
                        message: "name:",
                      })}
                    </strong>{" "}
                    <Link to={infoAuthPath}>{name ?? key}</Link>
                  </span>
                  <span>
                    <strong>
                      {translate({
                        id: "theme.openapi.securitySchemes.type",
                        message: "type:",
                      })}
                    </strong>{" "}
                    {type}
                  </span>
                  {scopes && scopes.length > 0 && (
                    <span>
                      <strong>
                        {translate({
                          id: "theme.openapi.securitySchemes.scopes",
                          message: "scopes:",
                        })}
                      </strong>{" "}
                      <code>
                        {auth.scopes.length > 0 ? auth.scopes.toString() : "[]"}
                      </code>
                    </span>
                  )}
                  {renderRest(rest)}
                </pre>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={auth.key}>
              <pre
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--openapi-card-background-color)",
                }}
              >
                <span>
                  <strong>
                    {translate({
                      id: "theme.openapi.securitySchemes.name",
                      message: "name:",
                    })}
                  </strong>{" "}
                  <Link to={infoAuthPath}>{auth.name ?? auth.key}</Link>
                </span>
                <span>
                  <strong>
                    {translate({
                      id: "theme.openapi.securitySchemes.type",
                      message: "type:",
                    })}
                  </strong>{" "}
                  {auth.type}
                </span>
                <span>
                  <strong>
                    {translate({
                      id: "theme.openapi.securitySchemes.in",
                      message: "in:",
                    })}
                  </strong>{" "}
                  {auth.in}
                </span>
              </pre>
            </React.Fragment>
          );
        }

        if (isApiKey) {
          const { name, key, type, scopes, ...rest } = auth;
          return (
            <React.Fragment key={auth.key}>
              <pre
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--openapi-card-background-color)",
                }}
              >
                <span>
                  <strong>
                    {translate({
                      id: "theme.openapi.securitySchemes.name",
                      message: "name:",
                    })}
                  </strong>{" "}
                  <Link to={infoAuthPath}>{name ?? key}</Link>
                </span>
                <span>
                  <strong>
                    {translate({
                      id: "theme.openapi.securitySchemes.type",
                      message: "type:",
                    })}
                  </strong>{" "}
                  {type}
                </span>
                {scopes && scopes.length > 0 && (
                  <span>
                    <strong>
                      {translate({
                        id: "theme.openapi.securitySchemes.scopes",
                        message: "scopes:",
                      })}
                    </strong>{" "}
                    <code>
                      {auth.scopes.length > 0 ? auth.scopes.toString() : "[]"}
                    </code>
                  </span>
                )}
                {renderRest(rest)}
              </pre>
            </React.Fragment>
          );
        }

        if (isOauth2) {
          const { scopes } = auth;
          return (
            <React.Fragment key={selected}>
              <pre
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--openapi-card-background-color)",
                }}
              >
                {props.item?.["security"] &&
                  props.item["security"].length > 0 && (
                    <code>
                      {props.item["security"].map(
                        (sec: any, index: number) => {
                          const secKey = Object.keys(sec)[0];
                          const securityScheme =
                            props.item["securitySchemes"]?.[secKey];
                          return (
                            <div key={secKey}>
                              <strong>type: </strong>
                              {securityScheme ? (
                                <Link to={infoAuthPath}>
                                  {securityScheme["x-displayName"]}
                                </Link>
                              ) : (
                                <Link to={infoAuthPath}>{secKey}</Link>
                              )}
                              {scopes && scopes.length > 0 && (
                                <div>
                                  <span>
                                    <strong>scopes: </strong>
                                    <code>
                                      {scopes.length > 0
                                        ? scopes.join(", ")
                                        : "[]"}
                                    </code>
                                  </span>
                                </div>
                              )}
                              {props.item["x-sailpoint-userLevels"] &&
                                props.item["x-sailpoint-userLevels"].length >
                                  0 &&
                                secKey !== "applicationAuth" && (
                                  <div>
                                    <span>
                                      <strong>user levels: </strong>
                                      <code>
                                        {props.item[
                                          "x-sailpoint-userLevels"
                                        ].join(", ")}
                                      </code>
                                    </span>
                                  </div>
                                )}
                              {index <
                                props.item["security"].length - 1 && <hr />}
                            </div>
                          );
                        }
                      )}
                    </code>
                  )}
              </pre>
            </React.Fragment>
          );
        }

        if (isOpenId) {
          const { name, key, scopes, type, ...rest } = auth;
          return (
            <React.Fragment key={auth.key}>
              <pre
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--openapi-card-background-color)",
                }}
              >
                <span>
                  <strong>
                    {translate({
                      id: "theme.openapi.securitySchemes.name",
                      message: "name:",
                    })}
                  </strong>{" "}
                  <Link to={infoAuthPath}>{name ?? key}</Link>
                </span>
                <span>
                  <strong>
                    {translate({
                      id: "theme.openapi.securitySchemes.type",
                      message: "type:",
                    })}
                  </strong>{" "}
                  {type}
                </span>
                {scopes && scopes.length > 0 && (
                  <span>
                    <strong>
                      {translate({
                        id: "theme.openapi.securitySchemes.scopes",
                        message: "scopes:",
                      })}
                    </strong>{" "}
                    <code>
                      {auth.scopes.length > 0 ? auth.scopes.toString() : "[]"}
                    </code>
                  </span>
                )}
                {renderRest(rest)}
              </pre>
            </React.Fragment>
          );
        }

        return undefined;
      })}
    </details>
  );
}

export default SecuritySchemes;
