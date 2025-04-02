---
id: native-change-detection-config
title: NativeChangeDetectionConfig
pagination_label: NativeChangeDetectionConfig
sidebar_label: NativeChangeDetectionConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NativeChangeDetectionConfig', 'NativeChangeDetectionConfig'] 
slug: /tools/sdk/go//models/native-change-detection-config
tags: ['SDK', 'Software Development Kit', 'NativeChangeDetectionConfig', 'NativeChangeDetectionConfig']
---

# NativeChangeDetectionConfig

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

### NewNativeChangeDetectionConfig

`func NewNativeChangeDetectionConfig() *NativeChangeDetectionConfig`

NewNativeChangeDetectionConfig instantiates a new NativeChangeDetectionConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNativeChangeDetectionConfigWithDefaults

`func NewNativeChangeDetectionConfigWithDefaults() *NativeChangeDetectionConfig`

NewNativeChangeDetectionConfigWithDefaults instantiates a new NativeChangeDetectionConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *NativeChangeDetectionConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *NativeChangeDetectionConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *NativeChangeDetectionConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *NativeChangeDetectionConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetOperations

`func (o *NativeChangeDetectionConfig) GetOperations() []string`

GetOperations returns the Operations field if non-nil, zero value otherwise.

### GetOperationsOk

`func (o *NativeChangeDetectionConfig) GetOperationsOk() (*[]string, bool)`

GetOperationsOk returns a tuple with the Operations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperations

`func (o *NativeChangeDetectionConfig) SetOperations(v []string)`

SetOperations sets Operations field to given value.

### HasOperations

`func (o *NativeChangeDetectionConfig) HasOperations() bool`

HasOperations returns a boolean if a field has been set.

### GetAllEntitlements

`func (o *NativeChangeDetectionConfig) GetAllEntitlements() bool`

GetAllEntitlements returns the AllEntitlements field if non-nil, zero value otherwise.

### GetAllEntitlementsOk

`func (o *NativeChangeDetectionConfig) GetAllEntitlementsOk() (*bool, bool)`

GetAllEntitlementsOk returns a tuple with the AllEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllEntitlements

`func (o *NativeChangeDetectionConfig) SetAllEntitlements(v bool)`

SetAllEntitlements sets AllEntitlements field to given value.

### HasAllEntitlements

`func (o *NativeChangeDetectionConfig) HasAllEntitlements() bool`

HasAllEntitlements returns a boolean if a field has been set.

### GetAllNonEntitlementAttributes

`func (o *NativeChangeDetectionConfig) GetAllNonEntitlementAttributes() bool`

GetAllNonEntitlementAttributes returns the AllNonEntitlementAttributes field if non-nil, zero value otherwise.

### GetAllNonEntitlementAttributesOk

`func (o *NativeChangeDetectionConfig) GetAllNonEntitlementAttributesOk() (*bool, bool)`

GetAllNonEntitlementAttributesOk returns a tuple with the AllNonEntitlementAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllNonEntitlementAttributes

`func (o *NativeChangeDetectionConfig) SetAllNonEntitlementAttributes(v bool)`

SetAllNonEntitlementAttributes sets AllNonEntitlementAttributes field to given value.

### HasAllNonEntitlementAttributes

`func (o *NativeChangeDetectionConfig) HasAllNonEntitlementAttributes() bool`

HasAllNonEntitlementAttributes returns a boolean if a field has been set.

### GetSelectedEntitlements

`func (o *NativeChangeDetectionConfig) GetSelectedEntitlements() []string`

GetSelectedEntitlements returns the SelectedEntitlements field if non-nil, zero value otherwise.

### GetSelectedEntitlementsOk

`func (o *NativeChangeDetectionConfig) GetSelectedEntitlementsOk() (*[]string, bool)`

GetSelectedEntitlementsOk returns a tuple with the SelectedEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedEntitlements

`func (o *NativeChangeDetectionConfig) SetSelectedEntitlements(v []string)`

SetSelectedEntitlements sets SelectedEntitlements field to given value.

### HasSelectedEntitlements

`func (o *NativeChangeDetectionConfig) HasSelectedEntitlements() bool`

HasSelectedEntitlements returns a boolean if a field has been set.

### GetSelectedNonEntitlementAttributes

`func (o *NativeChangeDetectionConfig) GetSelectedNonEntitlementAttributes() []string`

GetSelectedNonEntitlementAttributes returns the SelectedNonEntitlementAttributes field if non-nil, zero value otherwise.

### GetSelectedNonEntitlementAttributesOk

`func (o *NativeChangeDetectionConfig) GetSelectedNonEntitlementAttributesOk() (*[]string, bool)`

GetSelectedNonEntitlementAttributesOk returns a tuple with the SelectedNonEntitlementAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedNonEntitlementAttributes

`func (o *NativeChangeDetectionConfig) SetSelectedNonEntitlementAttributes(v []string)`

SetSelectedNonEntitlementAttributes sets SelectedNonEntitlementAttributes field to given value.

### HasSelectedNonEntitlementAttributes

`func (o *NativeChangeDetectionConfig) HasSelectedNonEntitlementAttributes() bool`

HasSelectedNonEntitlementAttributes returns a boolean if a field has been set.


