---
id: v2025-machine-classification-config
title: MachineClassificationConfig
pagination_label: MachineClassificationConfig
sidebar_label: MachineClassificationConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineClassificationConfig', 'V2025MachineClassificationConfig'] 
slug: /tools/sdk/go/v2025/models/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'MachineClassificationConfig', 'V2025MachineClassificationConfig']
---

# MachineClassificationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates whether Classification is enabled for a Source | [optional] [default to false]
**ClassificationMethod** | Pointer to **string** | Classification Method | [optional] 
**Criteria** | Pointer to [**MachineClassificationCriteriaLevel1**](machine-classification-criteria-level1) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Date the config was created | [optional] 
**Modified** | Pointer to **NullableTime** | Date the config was last updated | [optional] 

## Methods

### NewMachineClassificationConfig

`func NewMachineClassificationConfig() *MachineClassificationConfig`

NewMachineClassificationConfig instantiates a new MachineClassificationConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineClassificationConfigWithDefaults

`func NewMachineClassificationConfigWithDefaults() *MachineClassificationConfig`

NewMachineClassificationConfigWithDefaults instantiates a new MachineClassificationConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *MachineClassificationConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *MachineClassificationConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *MachineClassificationConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *MachineClassificationConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetClassificationMethod

`func (o *MachineClassificationConfig) GetClassificationMethod() string`

GetClassificationMethod returns the ClassificationMethod field if non-nil, zero value otherwise.

### GetClassificationMethodOk

`func (o *MachineClassificationConfig) GetClassificationMethodOk() (*string, bool)`

GetClassificationMethodOk returns a tuple with the ClassificationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassificationMethod

`func (o *MachineClassificationConfig) SetClassificationMethod(v string)`

SetClassificationMethod sets ClassificationMethod field to given value.

### HasClassificationMethod

`func (o *MachineClassificationConfig) HasClassificationMethod() bool`

HasClassificationMethod returns a boolean if a field has been set.

### GetCriteria

`func (o *MachineClassificationConfig) GetCriteria() MachineClassificationCriteriaLevel1`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *MachineClassificationConfig) GetCriteriaOk() (*MachineClassificationCriteriaLevel1, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *MachineClassificationConfig) SetCriteria(v MachineClassificationCriteriaLevel1)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *MachineClassificationConfig) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetCreated

`func (o *MachineClassificationConfig) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineClassificationConfig) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineClassificationConfig) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MachineClassificationConfig) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MachineClassificationConfig) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineClassificationConfig) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineClassificationConfig) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MachineClassificationConfig) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *MachineClassificationConfig) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *MachineClassificationConfig) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil

