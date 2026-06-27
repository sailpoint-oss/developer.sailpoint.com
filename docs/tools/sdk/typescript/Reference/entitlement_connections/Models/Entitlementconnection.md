---
id: v1-entitlementconnection-v1
title: EntitlementconnectionV1
pagination_label: EntitlementconnectionV1
sidebar_label: EntitlementconnectionV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EntitlementconnectionV1', 'v1EntitlementconnectionV1']
slug: /tools/sdk/typescript/entitlement_connections/models/entitlementconnection-v1
tags: ['SDK', 'Software Development Kit', 'EntitlementconnectionV1', 'v1EntitlementconnectionV1']
---

# EntitlementconnectionV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **(optional)** `string` | Tenant identifier that owns the connection. | [default to undefined]
**connectionId** | **(optional)** `string` | Entitlement connection identifier. | [default to undefined]
**identityId** | **(optional)** `string` | Identity identifier associated with the connection. | [default to undefined]
**machineIdentityId** | **(optional)** `string` | Machine identity identifier when the connection is machine-backed. | [default to undefined]
**accountId** | **(optional)** `string` | Account identifier for the connected source account. | [default to undefined]
**entitlementId** | **(optional)** `string` | Entitlement identifier on the source. | [default to undefined]
**sourceId** | **(optional)** `string` | Source identifier that provides the account and entitlement. | [default to undefined]
**standalone** | **(optional)** `boolean` | Indicates whether the connection is marked as standalone. | [default to false]
**attributeName** | **(optional)** `string` | Entitlement attribute name on the source. | [default to undefined]
**attributeValue** | **(optional)** `string` | Entitlement attribute value on the source. | [default to undefined]
**type** | **(optional)** `string` | Connection type classification. | [default to undefined]
**state** | **(optional)** `string` | Current lifecycle state of the connection. | [default to undefined]
**stateChanged** | **(optional)** `string` | Time the connection state was last updated. | [default to undefined]
**stateChangedBy** | **(optional)** `string` | Identifier of the actor that last changed state. | [default to undefined]
**jitActivation** | **(optional)** `string` | Time JIT activation occurred. | [default to undefined]
**jitProvision** | **(optional)** `string` | Time provisioning completed for JIT activation. | [default to undefined]
**jitDeactivation** | **(optional)** `string` | Time JIT deactivation occurred. | [default to undefined]
**jitDeprovision** | **(optional)** `string` | Time deprovisioning completed after JIT deactivation. | [default to undefined]
**jitExpiration** | **(optional)** `string` | Time when JIT access expires. | [default to undefined]
**deleteAfter** | **(optional)** `string` | Time after which the connection is eligible for deletion. | [default to undefined]
**created** | **(optional)** `string` | Time when the connection was created. | [default to undefined]
**modified** | **(optional)** `string` | Time when the connection was last modified. | [default to undefined]
**actorName** | **(optional)** `string` | Display value for the actor associated with the latest change. | [default to undefined]

