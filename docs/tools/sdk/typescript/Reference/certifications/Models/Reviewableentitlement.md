---
id: v1-reviewableentitlement-v1
title: ReviewableentitlementV1
pagination_label: ReviewableentitlementV1
sidebar_label: ReviewableentitlementV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ReviewableentitlementV1', 'v1ReviewableentitlementV1']
slug: /tools/sdk/typescript/certifications/models/reviewableentitlement-v1
tags: ['SDK', 'Software Development Kit', 'ReviewableentitlementV1', 'v1ReviewableentitlementV1']
---

# ReviewableentitlementV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id for the entitlement | [default to undefined]
**name** | **(optional)** `string` | The name of the entitlement | [default to undefined]
**description** | **(optional)** `string` | Information about the entitlement | [default to undefined]
**privileged** | **(optional)** `boolean` | Indicates if the entitlement is a privileged entitlement | [default to false]
**owner** | **(optional)** `IdentityreferencewithnameandemailV1` |  | [default to undefined]
**attributeName** | **(optional)** `string` | The name of the attribute on the source | [default to undefined]
**attributeValue** | **(optional)** `string` | The value of the attribute on the source | [default to undefined]
**sourceSchemaObjectType** | **(optional)** `string` | The schema object type on the source used to represent the entitlement and its attributes | [default to undefined]
**sourceName** | **(optional)** `string` | The name of the source for which this entitlement belongs | [default to undefined]
**sourceType** | **(optional)** `string` | The type of the source for which the entitlement belongs | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source for which the entitlement belongs | [default to undefined]
**hasPermissions** | **(optional)** `boolean` | Indicates if the entitlement has permissions | [default to false]
**isPermission** | **(optional)** `boolean` | Indicates if the entitlement is a representation of an account permission | [default to false]
**revocable** | **(optional)** `boolean` | Indicates whether the entitlement can be revoked | [default to false]
**cloudGoverned** | **(optional)** `boolean` | True if the entitlement is cloud governed | [default to false]
**containsDataAccess** | **(optional)** `boolean` | True if the entitlement has DAS data | [default to false]
**dataAccess** | **(optional)** `DataaccessV1` |  | [default to undefined]
**account** | **(optional)** `ReviewableentitlementAccountV1` |  | [default to undefined]

