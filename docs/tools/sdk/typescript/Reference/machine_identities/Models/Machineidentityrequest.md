---
id: v1-machineidentityrequest-v1
title: MachineidentityrequestV1
pagination_label: MachineidentityrequestV1
sidebar_label: MachineidentityrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineidentityrequestV1', 'v1MachineidentityrequestV1']
slug: /tools/sdk/typescript/machine_identities/models/machineidentityrequest-v1
tags: ['SDK', 'Software Development Kit', 'MachineidentityrequestV1', 'v1MachineidentityrequestV1']
---

# MachineidentityrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**nativeIdentity** | `string` | The native identity associated to the machine identity directly aggregated from a source | [default to undefined]
**description** | **(optional)** `string` | Description of machine identity | [default to undefined]
**attributes** | **(optional)** `object` | A map of custom machine identity attributes | [default to undefined]
**subtype** | `string` | The subtype value associated to the machine identity | [default to undefined]
**owners** | **(optional)** `MachineIdentityDtoOwnersV1` |  | [default to undefined]
**sourceId** | **(optional)** `string` | The source id associated to the machine identity | [default to undefined]
**uuid** | **(optional)** `string` | The UUID associated to the machine identity directly aggregated from a source | [default to undefined]
**userEntitlements** | **(optional)** `Array<MachineIdentityRequestUserEntitlementsV1>` | The user entitlements associated to the machine identity | [default to undefined]

