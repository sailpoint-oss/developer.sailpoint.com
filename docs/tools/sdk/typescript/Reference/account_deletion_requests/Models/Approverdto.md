---
id: v1-approverdto-v1
title: ApproverdtoV1
pagination_label: ApproverdtoV1
sidebar_label: ApproverdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApproverdtoV1', 'v1ApproverdtoV1']
slug: /tools/sdk/typescript/account_deletion_requests/models/approverdto-v1
tags: ['SDK', 'Software Development Kit', 'ApproverdtoV1', 'v1ApproverdtoV1']
---

# ApproverdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityID** | **(optional)** `string` | Identity ID and it cannot be null. | [default to undefined]
**id** | **(optional)** `string` | Optional id | [default to undefined]
**name** | **(optional)** `string` | Identity display name | [default to undefined]
**email** | **(optional)** `string` | Email address of identity | [default to undefined]
**type** | **(optional)** `string` | Used to mention type of data transfer object in this case it is used to transfer IDENTITY data. | [default to undefined]
**ownerOf** | **(optional)** `Array<ApproverreferenceV1>` | List of reference of identity type dto for account owner identities | [default to undefined]
**actionedAs** | **(optional)** `Array<ApproverreferenceV1>` | List of reference of identity type dto who acted on behalf of other identities. | [default to undefined]
**members** | **(optional)** `Array<ApproverreferenceV1>` | List of reference of identity type dto for member identities. | [default to undefined]

