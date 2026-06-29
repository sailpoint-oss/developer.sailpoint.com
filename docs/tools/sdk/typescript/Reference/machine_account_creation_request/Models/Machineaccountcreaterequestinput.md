---
id: v1-machineaccountcreaterequestinput-v1
title: MachineaccountcreaterequestinputV1
pagination_label: MachineaccountcreaterequestinputV1
sidebar_label: MachineaccountcreaterequestinputV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineaccountcreaterequestinputV1', 'v1MachineaccountcreaterequestinputV1']
slug: /tools/sdk/typescript/machine_account_creation_request/models/machineaccountcreaterequestinput-v1
tags: ['SDK', 'Software Development Kit', 'MachineaccountcreaterequestinputV1', 'v1MachineaccountcreaterequestinputV1']
---

# MachineaccountcreaterequestinputV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subtypeId** | `string` | Subtype ID for which machine account create is enabled and user have the entitlement to create the machine account. | [default to undefined]
**formId** | **(optional)** `string` | Form ID selected by user for the machine account create request. | [default to undefined]
**ownerIdentityId** | `string` | Owner Identity ID. This identity will be assigned as an owner of the created machine account. | [default to undefined]
**machineIdentityId** | **(optional)** `string` | Machine identity to correlate with the created machine account. If not provided, a new machine identity will be created. | [default to undefined]
**environment** | **(optional)** `string` | Environment type to use for the machine account. | [default to undefined]
**description** | **(optional)** `string` | Description for the machine account. | [default to undefined]
**userInput** | **(optional)** `object` | Fields of the form linked to the subtype in approval settings. | [default to undefined]
**entitlementIds** | **(optional)** `Array<string>` | List of entitlement IDs to provision for created machine account. | [default to undefined]

