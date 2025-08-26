---
id: v2025-machine-identity-request-user-entitlements
title: MachineIdentityRequestUserEntitlements
pagination_label: MachineIdentityRequestUserEntitlements
sidebar_label: MachineIdentityRequestUserEntitlements
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityRequestUserEntitlements', 'V2025MachineIdentityRequestUserEntitlements'] 
slug: /tools/sdk/go/v2025/models/machine-identity-request-user-entitlements
tags: ['SDK', 'Software Development Kit', 'MachineIdentityRequestUserEntitlements', 'V2025MachineIdentityRequestUserEntitlements']
---

# MachineIdentityRequestUserEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementId** | **string** | The ID of the entitlement | 
**SourceId** | **string** | The source ID of the entitlement | 

## Methods

### NewMachineIdentityRequestUserEntitlements

`func NewMachineIdentityRequestUserEntitlements(entitlementId string, sourceId string, ) *MachineIdentityRequestUserEntitlements`

NewMachineIdentityRequestUserEntitlements instantiates a new MachineIdentityRequestUserEntitlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityRequestUserEntitlementsWithDefaults

`func NewMachineIdentityRequestUserEntitlementsWithDefaults() *MachineIdentityRequestUserEntitlements`

NewMachineIdentityRequestUserEntitlementsWithDefaults instantiates a new MachineIdentityRequestUserEntitlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementId

`func (o *MachineIdentityRequestUserEntitlements) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *MachineIdentityRequestUserEntitlements) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *MachineIdentityRequestUserEntitlements) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.


### GetSourceId

`func (o *MachineIdentityRequestUserEntitlements) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineIdentityRequestUserEntitlements) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineIdentityRequestUserEntitlements) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.



