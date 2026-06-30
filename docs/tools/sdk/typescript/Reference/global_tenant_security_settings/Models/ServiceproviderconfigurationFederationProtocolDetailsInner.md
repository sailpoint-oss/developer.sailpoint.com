---
id: v1-serviceproviderconfiguration-federation-protocol-details-inner-v1
title: ServiceproviderconfigurationFederationProtocolDetailsInnerV1
pagination_label: ServiceproviderconfigurationFederationProtocolDetailsInnerV1
sidebar_label: ServiceproviderconfigurationFederationProtocolDetailsInnerV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ServiceproviderconfigurationFederationProtocolDetailsInnerV1', 'v1ServiceproviderconfigurationFederationProtocolDetailsInnerV1']
slug: /tools/sdk/typescript/global_tenant_security_settings/models/serviceproviderconfiguration-federation-protocol-details-inner-v1
tags: ['SDK', 'Software Development Kit', 'ServiceproviderconfigurationFederationProtocolDetailsInnerV1', 'v1ServiceproviderconfigurationFederationProtocolDetailsInnerV1']
---

# ServiceproviderconfigurationFederationProtocolDetailsInnerV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **(optional)** `string` | Federation protocol role | [default to undefined]
**entityId** | **(optional)** `string` | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [default to undefined]
**binding** | **(optional)** `string` | Defines the binding used for the SAML flow. Used with IDP configurations. | [default to undefined]
**authnContext** | **(optional)** `string` | Specifies the SAML authentication method to use. Used with IDP configurations. | [default to undefined]
**logoutUrl** | **(optional)** `string` | The IDP logout URL. Used with IDP configurations. | [default to undefined]
**includeAuthnContext** | **(optional)** `boolean` | Determines if the configured AuthnContext should be used or the default. Used with IDP configurations. | [default to false]
**nameId** | **(optional)** `string` | The name id format to use. Used with IDP configurations. | [default to undefined]
**jitConfiguration** | **(optional)** `JitconfigurationV1` |  | [default to undefined]
**cert** | **(optional)** `string` | The Base64-encoded certificate used by the IDP. Used with IDP configurations. | [default to undefined]
**loginUrlPost** | **(optional)** `string` | The IDP POST URL, used with IDP HTTP-POST bindings for IDP-initiated logins. Used with IDP configurations. | [default to undefined]
**loginUrlRedirect** | **(optional)** `string` | The IDP Redirect URL. Used with IDP configurations. | [default to undefined]
**mappingAttribute** | `string` | Return the saml Id for the given user, based on the IDN as SP settings of the org. Used with IDP configurations. | [default to undefined]
**certificateExpirationDate** | **(optional)** `string` | The expiration date extracted from the certificate. | [default to undefined]
**certificateName** | **(optional)** `string` | The name extracted from the certificate. | [default to undefined]
**alias** | **(optional)** `string` | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [default to undefined]
**callbackUrl** | `string` | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | [default to undefined]
**legacyAcsUrl** | **(optional)** `string` | The legacy ACS URL used for SAML authentication. Used with SP configurations. | [default to undefined]

