---
id: v1-machineidentityupdated-machine-identity-v1
title: MachineidentityupdatedMachineIdentityV1
pagination_label: MachineidentityupdatedMachineIdentityV1
sidebar_label: MachineidentityupdatedMachineIdentityV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineidentityupdatedMachineIdentityV1', 'v1MachineidentityupdatedMachineIdentityV1']
slug: /tools/sdk/typescript/triggers/models/machineidentityupdated-machine-identity-v1
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedMachineIdentityV1', 'v1MachineidentityupdatedMachineIdentityV1']
---

# MachineidentityupdatedMachineIdentityV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Unique identifier for the machine identity. | [default to undefined]
**name** | **(optional)** `string` | Name of the machine identity. | [default to undefined]
**created** | `string` | Creation timestamp. | [default to undefined]
**modified** | `string` | Last modified timestamp. | [default to undefined]
**businessApplication** | **(optional)** `string` | Associated business application. | [default to undefined]
**description** | **(optional)** `string` | Description of the machine identity. | [default to undefined]
**attributes** | **(optional)**  | The attributes assigned to the identity. | [default to undefined]
**subtype** | `string` | Subtype of the machine identity. | [default to undefined]
**owners** | **(optional)** `Array<MachineidentityownerreferenceV1>` | List of owners. | [default to undefined]
**sourceId** | **(optional)** `string` | Source identifier. | [default to undefined]
**uuid** | **(optional)** `string` | UUID of the machine identity. | [default to undefined]
**nativeIdentity** | **(optional)** `string` | Native identity value. | [default to undefined]
**manuallyEdited** | `boolean` | Indicates if manually edited. | [default to false]
**manuallyCreated** | **(optional)** `boolean` | Indicates if manually created. | [default to false]
**datasetId** | **(optional)** `string` | Dataset identifier. | [default to undefined]
**source** | **(optional)** `MachineidentitysourcereferenceV1` |  | [default to undefined]
**userEntitlements** | **(optional)** `Array<MachineidentityuserentitlementsV1>` | List of user entitlements. | [default to undefined]
**existsOnSource** | **(optional)** `string` | Existence status on source. | [default to undefined]

