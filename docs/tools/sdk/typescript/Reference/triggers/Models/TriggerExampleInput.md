---
id: v1-trigger-example-input-v1
title: TriggerExampleInputV1
pagination_label: TriggerExampleInputV1
sidebar_label: TriggerExampleInputV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TriggerExampleInputV1', 'v1TriggerExampleInputV1']
slug: /tools/sdk/typescript/triggers/models/trigger-example-input-v1
tags: ['SDK', 'Software Development Kit', 'TriggerExampleInputV1', 'v1TriggerExampleInputV1']
---

# TriggerExampleInputV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request. | [default to undefined]
**requestedFor** | `Array<AccessitemrequestedfordtoV1>` | Identities access was requested for. | [default to undefined]
**requestedItems** | `Array<AccessrequestpreapprovalRequestedItemsInnerV1>` | Details of the access items being requested. | [default to undefined]
**requestedBy** | `AccessitemrequesterdtoV1` |  | [default to undefined]
**requestedItemsStatus** | `Array<AccessrequestpostapprovalRequestedItemsStatusInnerV1>` | Details on the outcome of each access item. | [default to undefined]
**source** | `AccountsourcereferenceV1` |  | [default to undefined]
**status** | `string` | The overall status of the collection. | [default to undefined]
**started** | `string` | The date and time when the account collection started. | [default to undefined]
**completed** | `string` | The date and time when the account collection finished. | [default to undefined]
**errors** | `Array<string>` | A list of any accumulated error messages that occurred during provisioning. | [default to undefined]
**warnings** | `Array<string>` | A list of any accumulated warning messages that occurred during provisioning. | [default to undefined]
**stats** | `AccountscollectedforaggregationStatsV1` |  | [default to undefined]
**identity** | `IdentitydeletedIdentityV1` |  | [default to undefined]
**account** | `Accountv2V1` |  | [default to undefined]
**changes** | `Array<IdentityattributeschangedChangesInnerV1>` | A list of one or more identity attributes that changed on the identity. | [default to undefined]
**attributes** |  | The attributes of the account. The contents of attributes depends on the account schema for the source. | [default to undefined]
**entitlementCount** | **(optional)** `number` | The number of entitlements associated with this account. | [default to undefined]
**event** | `AccountupdatedEventV1` |  | [default to undefined]
**accountChangeTypes** | `Array<string>` | The types of changes that occurred to the account. | [default to undefined]
**singleValueAttributeChanges** | `Array<MachineidentityupdatedSingleValueAttributeChangesInnerV1>` | Details about the single-value attribute changes that occurred. | [default to undefined]
**multiValueAttributeChanges** | `Array<AccountupdatedMultiValueAttributeChangesInnerV1>` | Details about the multi-value attribute changes that occurred to the account. | [default to undefined]
**entitlementChanges** | `Array<AccountupdatedEntitlementChangesInnerV1>` | Details about the entitlement changes that occurred to the account. | [default to undefined]
**campaign** | `CampaigngeneratedCampaignV1` |  | [default to undefined]
**certification** | `CertificationsignedoffCertificationV1` |  | [default to undefined]
**eventType** | `string` | Type of the event. | [default to undefined]
**machineIdentity** | `MachineidentitydeletedMachineIdentityV1` |  | [default to undefined]
**machineIdentityChangeTypes** | `Array<string>` | Types of changes that occurred to the machine identity. | [default to undefined]
**userEntitlementChanges** | `MachineidentityupdatedUserEntitlementChangesV1` |  | [default to undefined]
**ownerChanges** | `MachineidentityupdatedOwnerChangesV1` |  | [default to undefined]
**trackingNumber** | `string` | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | [default to undefined]
**sources** | `string` | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | [default to undefined]
**action** | **(optional)** `string` | Origin of where the provisioning request came from. | [default to undefined]
**recipient** | `ProvisioningcompletedRecipientV1` |  | [default to undefined]
**requester** | **(optional)** `ProvisioningcompletedRequesterV1` |  | [default to undefined]
**accountRequests** | `Array<ProvisioningcompletedAccountRequestsInnerV1>` | A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable. | [default to undefined]
**fileName** | `string` | A name for the report file. | [default to undefined]
**ownerEmail** | `string` | The email address of the identity that owns the saved search. | [default to undefined]
**ownerName** | `string` | The name of the identity that owns the saved search. | [default to undefined]
**query** | `string` | The search query that was used to generate the report. | [default to undefined]
**searchName** | `string` | The name of the saved search. | [default to undefined]
**searchResults** | `SavedsearchcompleteSearchResultsV1` |  | [default to undefined]
**signedS3Url** | `string` | The Amazon S3 URL to download the report from. | [default to undefined]
**uuid** | **(optional)** `string` | Source unique identifier for the identity. UUID is generated by the source system. | [default to undefined]
**id** | `string` | The unique ID of the source. | [default to undefined]
**nativeIdentifier** | `string` | Unique ID of the account on the source. | [default to undefined]
**sourceId** | `string` | The ID of the source. | [default to undefined]
**sourceName** | `string` | The name of the source. | [default to undefined]
**identityId** | `string` | The ID of the identity that is correlated with this account. | [default to undefined]
**identityName** | `string` | The name of the identity that is correlated with this account. | [default to undefined]
**name** | `string` | The user friendly name of the source. | [default to undefined]
**type** | `string` | The connection type of the source. | [default to undefined]
**created** | `string` | The date and time the status change occurred. | [default to undefined]
**connector** | `string` | The connector type used to connect to the source. | [default to undefined]
**actor** | `SourceupdatedActorV1` |  | [default to undefined]
**deleted** | `string` | The date and time the source was deleted. | [default to undefined]
**modified** | `string` | The date and time the source was modified. | [default to undefined]
**application** | `VaclusterstatuschangeeventApplicationV1` |  | [default to undefined]
**healthCheckResult** | `VaclusterstatuschangeeventHealthCheckResultV1` |  | [default to undefined]
**previousHealthCheckResult** | `VaclusterstatuschangeeventPreviousHealthCheckResultV1` |  | [default to undefined]

