---
id: v1-roleminingpotentialroleprovisionrequest-v1
title: RoleminingpotentialroleprovisionrequestV1
pagination_label: RoleminingpotentialroleprovisionrequestV1
sidebar_label: RoleminingpotentialroleprovisionrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleminingpotentialroleprovisionrequestV1', 'v1RoleminingpotentialroleprovisionrequestV1']
slug: /tools/sdk/typescript/iai_role_mining/models/roleminingpotentialroleprovisionrequest-v1
tags: ['SDK', 'Software Development Kit', 'RoleminingpotentialroleprovisionrequestV1', 'v1RoleminingpotentialroleprovisionrequestV1']
---

# RoleminingpotentialroleprovisionrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roleName** | **(optional)** `string` | Name of the new role being created | [default to undefined]
**roleDescription** | **(optional)** `string` | Short description of the new role being created | [default to undefined]
**ownerId** | **(optional)** `string` | ID of the identity that will own this role | [default to undefined]
**includeIdentities** | **(optional)** `boolean` | When true, create access requests for the identities associated with the potential role | [default to false]
**directlyAssignedEntitlements** | **(optional)** `boolean` | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [default to false]

