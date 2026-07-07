---
id: v1-machineclassificationconfig
title: Machineclassificationconfig
pagination_label: Machineclassificationconfig
sidebar_label: Machineclassificationconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineclassificationconfig', 'V1Machineclassificationconfig'] 
slug: /tools/sdk/go/machineclassificationconfig/models/machineclassificationconfig
tags: ['SDK', 'Software Development Kit', 'Machineclassificationconfig', 'V1Machineclassificationconfig']
---

# Machineclassificationconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates whether Classification is enabled for a Source | [optional] [default to false]
**ClassificationMethod** | Pointer to **string** | Classification Method | [optional] 
**Criteria** | Pointer to [**Machineclassificationcriterialevel1**](machineclassificationcriterialevel1) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Date the config was created | [optional] 
**Modified** | Pointer to **NullableTime** | Date the config was last updated | [optional] 

## Methods

### NewMachineclassificationconfig

`func NewMachineclassificationconfig() *Machineclassificationconfig`

NewMachineclassificationconfig instantiates a new Machineclassificationconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineclassificationconfigWithDefaults

`func NewMachineclassificationconfigWithDefaults() *Machineclassificationconfig`

NewMachineclassificationconfigWithDefaults instantiates a new Machineclassificationconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Machineclassificationconfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Machineclassificationconfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Machineclassificationconfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Machineclassificationconfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetClassificationMethod

`func (o *Machineclassificationconfig) GetClassificationMethod() string`

GetClassificationMethod returns the ClassificationMethod field if non-nil, zero value otherwise.

### GetClassificationMethodOk

`func (o *Machineclassificationconfig) GetClassificationMethodOk() (*string, bool)`

GetClassificationMethodOk returns a tuple with the ClassificationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassificationMethod

`func (o *Machineclassificationconfig) SetClassificationMethod(v string)`

SetClassificationMethod sets ClassificationMethod field to given value.

### HasClassificationMethod

`func (o *Machineclassificationconfig) HasClassificationMethod() bool`

HasClassificationMethod returns a boolean if a field has been set.

### GetCriteria

`func (o *Machineclassificationconfig) GetCriteria() Machineclassificationcriterialevel1`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *Machineclassificationconfig) GetCriteriaOk() (*Machineclassificationcriterialevel1, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *Machineclassificationconfig) SetCriteria(v Machineclassificationcriterialevel1)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *Machineclassificationconfig) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetCreated

`func (o *Machineclassificationconfig) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Machineclassificationconfig) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Machineclassificationconfig) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Machineclassificationconfig) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Machineclassificationconfig) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Machineclassificationconfig) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Machineclassificationconfig) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Machineclassificationconfig) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Machineclassificationconfig) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Machineclassificationconfig) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil

