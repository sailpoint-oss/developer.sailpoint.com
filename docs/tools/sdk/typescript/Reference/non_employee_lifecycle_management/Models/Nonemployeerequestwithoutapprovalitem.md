---
id: v1-nonemployeerequestwithoutapprovalitem-v1
title: NonemployeerequestwithoutapprovalitemV1
pagination_label: NonemployeerequestwithoutapprovalitemV1
sidebar_label: NonemployeerequestwithoutapprovalitemV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'NonemployeerequestwithoutapprovalitemV1', 'v1NonemployeerequestwithoutapprovalitemV1']
slug: /tools/sdk/typescript/non_employee_lifecycle_management/models/nonemployeerequestwithoutapprovalitem-v1
tags: ['SDK', 'Software Development Kit', 'NonemployeerequestwithoutapprovalitemV1', 'v1NonemployeerequestwithoutapprovalitemV1']
---

# NonemployeerequestwithoutapprovalitemV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Non-Employee request id. | [default to undefined]
**requester** | **(optional)** `NonemployeeidentityreferencewithidV1` |  | [default to undefined]
**accountName** | **(optional)** `string` | Requested identity account name. | [default to undefined]
**firstName** | **(optional)** `string` | Non-Employee\'s first name. | [default to undefined]
**lastName** | **(optional)** `string` | Non-Employee\'s last name. | [default to undefined]
**email** | **(optional)** `string` | Non-Employee\'s email. | [default to undefined]
**phone** | **(optional)** `string` | Non-Employee\'s phone. | [default to undefined]
**manager** | **(optional)** `string` | The account ID of a valid identity to serve as this non-employee\'s manager. | [default to undefined]
**nonEmployeeSource** | **(optional)** `NonemployeesourcelitewithschemaattributesV1` |  | [default to undefined]
**data** | **(optional)**  | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [default to undefined]
**approvalStatus** | **(optional)** `ApprovalstatusV1` |  | [default to undefined]
**comment** | **(optional)** `string` | Comment of requester | [default to undefined]
**completionDate** | **(optional)** `string` | When the request was completely approved. | [default to undefined]
**startDate** | **(optional)** `string` | Non-Employee employment start date. | [default to undefined]
**endDate** | **(optional)** `string` | Non-Employee employment end date. | [default to undefined]
**modified** | **(optional)** `string` | When the request was last modified. | [default to undefined]
**created** | **(optional)** `string` | When the request was created. | [default to undefined]

