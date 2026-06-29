---
id: v1-nativechangedetectionconfig
title: Nativechangedetectionconfig
pagination_label: Nativechangedetectionconfig
sidebar_label: Nativechangedetectionconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nativechangedetectionconfig', 'V1Nativechangedetectionconfig'] 
slug: /tools/sdk/go/sources/models/nativechangedetectionconfig
tags: ['SDK', 'Software Development Kit', 'Nativechangedetectionconfig', 'V1Nativechangedetectionconfig']
---

# Nativechangedetectionconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | A flag indicating if Native Change Detection is enabled for a source. | [optional] [default to false]
**Operations** | Pointer to **[]string** | Operation types for which Native Change Detection is enabled for a source. | [optional] 
**AllEntitlements** | Pointer to **bool** | A flag indicating that all entitlements participate in Native Change Detection. | [optional] [default to false]
**AllNonEntitlementAttributes** | Pointer to **bool** | A flag indicating that all non-entitlement account attributes participate in Native Change Detection. | [optional] [default to false]
**SelectedEntitlements** | Pointer to **[]string** | If allEntitlements flag is off this field lists entitlements that participate in Native Change Detection. | [optional] 
**SelectedNonEntitlementAttributes** | Pointer to **[]string** | If allNonEntitlementAttributes flag is off this field lists non-entitlement account attributes that participate in Native Change Detection. | [optional] 

## Methods

### NewNativechangedetectionconfig

`func NewNativechangedetectionconfig() *Nativechangedetectionconfig`

NewNativechangedetectionconfig instantiates a new Nativechangedetectionconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNativechangedetectionconfigWithDefaults

`func NewNativechangedetectionconfigWithDefaults() *Nativechangedetectionconfig`

NewNativechangedetectionconfigWithDefaults instantiates a new Nativechangedetectionconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Nativechangedetectionconfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Nativechangedetectionconfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Nativechangedetectionconfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Nativechangedetectionconfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetOperations

`func (o *Nativechangedetectionconfig) GetOperations() []string`

GetOperations returns the Operations field if non-nil, zero value otherwise.

### GetOperationsOk

`func (o *Nativechangedetectionconfig) GetOperationsOk() (*[]string, bool)`

GetOperationsOk returns a tuple with the Operations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperations

`func (o *Nativechangedetectionconfig) SetOperations(v []string)`

SetOperations sets Operations field to given value.

### HasOperations

`func (o *Nativechangedetectionconfig) HasOperations() bool`

HasOperations returns a boolean if a field has been set.

### GetAllEntitlements

`func (o *Nativechangedetectionconfig) GetAllEntitlements() bool`

GetAllEntitlements returns the AllEntitlements field if non-nil, zero value otherwise.

### GetAllEntitlementsOk

`func (o *Nativechangedetectionconfig) GetAllEntitlementsOk() (*bool, bool)`

GetAllEntitlementsOk returns a tuple with the AllEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllEntitlements

`func (o *Nativechangedetectionconfig) SetAllEntitlements(v bool)`

SetAllEntitlements sets AllEntitlements field to given value.

### HasAllEntitlements

`func (o *Nativechangedetectionconfig) HasAllEntitlements() bool`

HasAllEntitlements returns a boolean if a field has been set.

### GetAllNonEntitlementAttributes

`func (o *Nativechangedetectionconfig) GetAllNonEntitlementAttributes() bool`

GetAllNonEntitlementAttributes returns the AllNonEntitlementAttributes field if non-nil, zero value otherwise.

### GetAllNonEntitlementAttributesOk

`func (o *Nativechangedetectionconfig) GetAllNonEntitlementAttributesOk() (*bool, bool)`

GetAllNonEntitlementAttributesOk returns a tuple with the AllNonEntitlementAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllNonEntitlementAttributes

`func (o *Nativechangedetectionconfig) SetAllNonEntitlementAttributes(v bool)`

SetAllNonEntitlementAttributes sets AllNonEntitlementAttributes field to given value.

### HasAllNonEntitlementAttributes

`func (o *Nativechangedetectionconfig) HasAllNonEntitlementAttributes() bool`

HasAllNonEntitlementAttributes returns a boolean if a field has been set.

### GetSelectedEntitlements

`func (o *Nativechangedetectionconfig) GetSelectedEntitlements() []string`

GetSelectedEntitlements returns the SelectedEntitlements field if non-nil, zero value otherwise.

### GetSelectedEntitlementsOk

`func (o *Nativechangedetectionconfig) GetSelectedEntitlementsOk() (*[]string, bool)`

GetSelectedEntitlementsOk returns a tuple with the SelectedEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedEntitlements

`func (o *Nativechangedetectionconfig) SetSelectedEntitlements(v []string)`

SetSelectedEntitlements sets SelectedEntitlements field to given value.

### HasSelectedEntitlements

`func (o *Nativechangedetectionconfig) HasSelectedEntitlements() bool`

HasSelectedEntitlements returns a boolean if a field has been set.

### GetSelectedNonEntitlementAttributes

`func (o *Nativechangedetectionconfig) GetSelectedNonEntitlementAttributes() []string`

GetSelectedNonEntitlementAttributes returns the SelectedNonEntitlementAttributes field if non-nil, zero value otherwise.

### GetSelectedNonEntitlementAttributesOk

`func (o *Nativechangedetectionconfig) GetSelectedNonEntitlementAttributesOk() (*[]string, bool)`

GetSelectedNonEntitlementAttributesOk returns a tuple with the SelectedNonEntitlementAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedNonEntitlementAttributes

`func (o *Nativechangedetectionconfig) SetSelectedNonEntitlementAttributes(v []string)`

SetSelectedNonEntitlementAttributes sets SelectedNonEntitlementAttributes field to given value.

### HasSelectedNonEntitlementAttributes

`func (o *Nativechangedetectionconfig) HasSelectedNonEntitlementAttributes() bool`

HasSelectedNonEntitlementAttributes returns a boolean if a field has been set.


