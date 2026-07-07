---
id: v1-requesteditemdtoref-v1
title: RequesteditemdtorefV1
pagination_label: RequesteditemdtorefV1
sidebar_label: RequesteditemdtorefV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RequesteditemdtorefV1', 'v1RequesteditemdtorefV1']
slug: /tools/sdk/typescript/access_requests/models/requesteditemdtoref-v1
tags: ['SDK', 'Software Development Kit', 'RequesteditemdtorefV1', 'v1RequesteditemdtorefV1']
---

# RequesteditemdtorefV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | The type of the item being requested. | [default to undefined]
**id** | `string` | ID of Role, Access Profile or Entitlement being requested. | [default to undefined]
**comment** | **(optional)** `string` | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [default to undefined]
**startDate** | **(optional)** `string` | The date and time the role or access profile or entitlement is/will be provisioned to the specified identity. Also known as the sunrise date. * Specify a date-time in the future. * This date-time can be used to indicate date-time when access item will be provisioned on the identity account. A GRANT_ACCESS request can use startDate to specify when to schedule provisioning of access item for an identity/account & a MODIFY_ACCESS request can use startDate to change the provisioning date-time of already assigned access item. But REVOKE_ACCESS request can not have startDate field. You can change the sunrise date in requests for yourself or others you are authorized to request for. * If the startDate is in the past, then the provisioning will be processed as soon as possible, but no guarantees can be made about when the provisioning will occur. If the startDate is in the future, then the provisioning will be scheduled to occur on that date and time. If no startDate is provided, then the provisioning will be processed as soon as possible.  | [default to undefined]
**removeDate** | **(optional)** `string` | The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date-time in the future. * The current SLA for the deprovisioning is 24 hours. * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for.  | [default to undefined]
**accountSelection** | **(optional)** `Array<SourceitemrefV1>` | The accounts where the access item will be provisioned to * Includes selections performed by the user in the event of multiple accounts existing on the same source * Also includes details for sources where user only has one account  | [default to undefined]

