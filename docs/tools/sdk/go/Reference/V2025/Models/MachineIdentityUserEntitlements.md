---
id: v2025-machine-identity-user-entitlements
title: MachineIdentityUserEntitlements
pagination_label: MachineIdentityUserEntitlements
sidebar_label: MachineIdentityUserEntitlements
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityUserEntitlements', 'V2025MachineIdentityUserEntitlements'] 
slug: /tools/sdk/go/v2025/models/machine-identity-user-entitlements
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUserEntitlements', 'V2025MachineIdentityUserEntitlements']
---

# MachineIdentityUserEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementId** | **string** | Entitlement identifier. | 
**DisplayName** | **string** | Display name of the entitlement. | 
**Source** | [**MachineIdentitySourceReference**](machine-identity-source-reference) |  | 

## Methods

### NewMachineIdentityUserEntitlements

`func NewMachineIdentityUserEntitlements(entitlementId string, displayName string, source MachineIdentitySourceReference, ) *MachineIdentityUserEntitlements`

NewMachineIdentityUserEntitlements instantiates a new MachineIdentityUserEntitlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityUserEntitlementsWithDefaults

`func NewMachineIdentityUserEntitlementsWithDefaults() *MachineIdentityUserEntitlements`

NewMachineIdentityUserEntitlementsWithDefaults instantiates a new MachineIdentityUserEntitlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementId

`func (o *MachineIdentityUserEntitlements) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *MachineIdentityUserEntitlements) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *MachineIdentityUserEntitlements) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.


### GetDisplayName

`func (o *MachineIdentityUserEntitlements) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *MachineIdentityUserEntitlements) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *MachineIdentityUserEntitlements) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetSource

`func (o *MachineIdentityUserEntitlements) GetSource() MachineIdentitySourceReference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MachineIdentityUserEntitlements) GetSourceOk() (*MachineIdentitySourceReference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MachineIdentityUserEntitlements) SetSource(v MachineIdentitySourceReference)`

SetSource sets Source field to given value.



