---
id: v1-machineidentityuserentitlements
title: Machineidentityuserentitlements
pagination_label: Machineidentityuserentitlements
sidebar_label: Machineidentityuserentitlements
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentityuserentitlements', 'V1Machineidentityuserentitlements'] 
slug: /tools/sdk/go/triggers/models/machineidentityuserentitlements
tags: ['SDK', 'Software Development Kit', 'Machineidentityuserentitlements', 'V1Machineidentityuserentitlements']
---

# Machineidentityuserentitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementId** | **string** | Entitlement identifier. | 
**DisplayName** | **string** | Display name of the entitlement. | 
**Source** | [**Machineidentitysourcereference**](machineidentitysourcereference) |  | 

## Methods

### NewMachineidentityuserentitlements

`func NewMachineidentityuserentitlements(entitlementId string, displayName string, source Machineidentitysourcereference, ) *Machineidentityuserentitlements`

NewMachineidentityuserentitlements instantiates a new Machineidentityuserentitlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityuserentitlementsWithDefaults

`func NewMachineidentityuserentitlementsWithDefaults() *Machineidentityuserentitlements`

NewMachineidentityuserentitlementsWithDefaults instantiates a new Machineidentityuserentitlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementId

`func (o *Machineidentityuserentitlements) GetEntitlementId() string`

GetEntitlementId returns the EntitlementId field if non-nil, zero value otherwise.

### GetEntitlementIdOk

`func (o *Machineidentityuserentitlements) GetEntitlementIdOk() (*string, bool)`

GetEntitlementIdOk returns a tuple with the EntitlementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementId

`func (o *Machineidentityuserentitlements) SetEntitlementId(v string)`

SetEntitlementId sets EntitlementId field to given value.


### GetDisplayName

`func (o *Machineidentityuserentitlements) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Machineidentityuserentitlements) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Machineidentityuserentitlements) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetSource

`func (o *Machineidentityuserentitlements) GetSource() Machineidentitysourcereference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Machineidentityuserentitlements) GetSourceOk() (*Machineidentitysourcereference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Machineidentityuserentitlements) SetSource(v Machineidentitysourcereference)`

SetSource sets Source field to given value.



