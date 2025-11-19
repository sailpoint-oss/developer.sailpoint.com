---
id: v2025-machine-identity-response-user-entitlements
title: MachineIdentityResponseUserEntitlements
pagination_label: MachineIdentityResponseUserEntitlements
sidebar_label: MachineIdentityResponseUserEntitlements
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityResponseUserEntitlements', 'V2025MachineIdentityResponseUserEntitlements'] 
slug: /tools/sdk/go/v2025/models/machine-identity-response-user-entitlements
tags: ['SDK', 'Software Development Kit', 'MachineIdentityResponseUserEntitlements', 'V2025MachineIdentityResponseUserEntitlements']
---

# MachineIdentityResponseUserEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **string** | The source ID of the entitlement | [optional] 
**EntitlementId** | Pointer to **string** | The ID of the entitlement | [optional] 
**DisplayName** | Pointer to **string** | The display name of the entitlement | [optional] 
**Source** | Pointer to **map[string]interface{}** | The source of the entitlement | [optional] 

## Methods

### NewMachineIdentityResponseUserEntitlements

`func NewMachineIdentityResponseUserEntitlements() *MachineIdentityResponseUserEntitlements`

NewMachineIdentityResponseUserEntitlements instantiates a new MachineIdentityResponseUserEntitlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityResponseUserEntitlementsWithDefaults

`func NewMachineIdentityResponseUserEntitlementsWithDefaults() *MachineIdentityResponseUserEntitlements`

NewMachineIdentityResponseUserEntitlementsWithDefaults instantiates a new MachineIdentityResponseUserEntitlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *MachineIdentityResponseUserEntitlements) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineIdentityResponseUserEntitlements) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineIdentityResponseUserEntitlements) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineIdentityResponseUserEntitlements) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetEntitlementId

`func (o *MachineIdentityResponseUserEntitlements) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *MachineIdentityResponseUserEntitlements) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *MachineIdentityResponseUserEntitlements) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.

### HasEntitlementId

`func (o *MachineIdentityResponseUserEntitlements) HasEntitlementId() bool`

HasEntitlementId returns a boolean if a field has been set.

### GetDisplayName

`func (o *MachineIdentityResponseUserEntitlements) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *MachineIdentityResponseUserEntitlements) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *MachineIdentityResponseUserEntitlements) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *MachineIdentityResponseUserEntitlements) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSource

`func (o *MachineIdentityResponseUserEntitlements) GetSource() map[string]interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MachineIdentityResponseUserEntitlements) GetSourceOk() (*map[string]interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MachineIdentityResponseUserEntitlements) SetSource(v map[string]interface{})`

SetSource sets Source field to given value.

### HasSource

`func (o *MachineIdentityResponseUserEntitlements) HasSource() bool`

HasSource returns a boolean if a field has been set.


