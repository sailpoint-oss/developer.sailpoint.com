---
id: v1-accessrequestitem-v1
title: AccessrequestitemV1
pagination_label: AccessrequestitemV1
sidebar_label: AccessrequestitemV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessrequestitemV1', 'v1AccessrequestitemV1']
slug: /tools/sdk/typescript/access_requests/models/accessrequestitem-v1
tags: ['SDK', 'Software Development Kit', 'AccessrequestitemV1', 'v1AccessrequestitemV1']
---

# AccessrequestitemV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | The type of the item being requested. | [default to undefined]
**id** | `string` | ID of Role, Access Profile or Entitlement being requested. | [default to undefined]
**comment** | **(optional)** `string` | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [default to undefined]
**startDate** | **(optional)** `string` | The date and time the role or access profile or entitlement is/will be provisioned to the specified identity. Also known as the sunrise date. * Specify a date-time in the future. * This date-time can be used to indicate date-time when access item will be provisioned on the identity account. A GRANT_ACCESS request can use startDate to specify when to schedule provisioning of access item for an identity/account & a MODIFY_ACCESS request can use startDate to change the provisioning date-time of already assigned access item. But REVOKE_ACCESS request can not have startDate field. You can change the sunrise date in requests for yourself or others you are authorized to request for. * If the startDate is in the past, then the provisioning will be processed as soon as possible, but no guarantees can be made about when the provisioning will occur. If the startDate is in the future, then the provisioning will be scheduled to occur on that date and time. If no startDate is provided, then the provisioning will be processed as soon as possible.  | [default to undefined]
**removeDate** | **(optional)** `string` | The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date-time in the future. * The current SLA for the deprovisioning is 24 hours. * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for.  | [default to undefined]
**assignmentId** | **(optional)** `string` | The assignmentId for a specific role assignment on the identity. This id is used to revoke that specific roleAssignment on that identity. * For use with REVOKE_ACCESS requests for roles for identities with multiple accounts on a single source.  | [default to undefined]
**nativeIdentity** | **(optional)** `string` | The unique identifier for an account on the identity, designated as the account ID attribute in the source\'s account schema. This is used to revoke a specific attributeAssignment on the identity. * For use with REVOKE_ACCESS requests for entitlements for identities with multiple accounts on a single source.  | [default to undefined]

