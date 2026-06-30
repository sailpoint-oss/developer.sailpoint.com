---
id: v1-certificationsignedoff-certification-v1
title: CertificationsignedoffCertificationV1
pagination_label: CertificationsignedoffCertificationV1
sidebar_label: CertificationsignedoffCertificationV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CertificationsignedoffCertificationV1', 'v1CertificationsignedoffCertificationV1']
slug: /tools/sdk/typescript/triggers/models/certificationsignedoff-certification-v1
tags: ['SDK', 'Software Development Kit', 'CertificationsignedoffCertificationV1', 'v1CertificationsignedoffCertificationV1']
---

# CertificationsignedoffCertificationV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Unique ID of the certification. | [default to undefined]
**name** | `string` | The name of the certification. | [default to undefined]
**created** | `string` | The date and time the certification was created. | [default to undefined]
**modified** | **(optional)** `string` | The date and time the certification was last modified. | [default to undefined]
**campaignRef** | `CampaignreferenceV1` |  | [default to undefined]
**phase** | `CertificationphaseV1` |  | [default to undefined]
**due** | `string` | The due date of the certification. | [default to undefined]
**signed** | `string` | The date the reviewer signed off on the certification. | [default to undefined]
**reviewer** | `ReviewerV1` |  | [default to undefined]
**reassignment** | **(optional)** `ReassignmentV1` |  | [default to undefined]
**hasErrors** | `boolean` | Indicates it the certification has any errors. | [default to undefined]
**errorMessage** | **(optional)** `string` | A message indicating what the error is. | [default to undefined]
**completed** | `boolean` | Indicates if all certification decisions have been made. | [default to undefined]
**decisionsMade** | `number` | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | [default to undefined]
**decisionsTotal** | `number` | The total number of approve/revoke/acknowledge decisions for the certification. | [default to undefined]
**entitiesCompleted** | `number` | The number of entities (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | [default to undefined]
**entitiesTotal** | `number` | The total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [default to undefined]

