---
id: v2024-correlation-config
title: CorrelationConfig
pagination_label: CorrelationConfig
sidebar_label: CorrelationConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CorrelationConfig', 'V2024CorrelationConfig'] 
slug: /tools/sdk/go/v2024/models/correlation-config
tags: ['SDK', 'Software Development Kit', 'CorrelationConfig', 'V2024CorrelationConfig']
---

# CorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | The ID of the correlation configuration. | [optional] 
**Name** | Pointer to **NullableString** | The name of the correlation configuration. | [optional] 
**AttributeAssignments** | Pointer to [**[]CorrelationConfigAttributeAssignmentsInner**](correlation-config-attribute-assignments-inner) | The list of attribute assignments of the correlation configuration. | [optional] 

## Methods

### NewCorrelationConfig

`func NewCorrelationConfig() *CorrelationConfig`

NewCorrelationConfig instantiates a new CorrelationConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelationConfigWithDefaults

`func NewCorrelationConfigWithDefaults() *CorrelationConfig`

NewCorrelationConfigWithDefaults instantiates a new CorrelationConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CorrelationConfig) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CorrelationConfig) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CorrelationConfig) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CorrelationConfig) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *CorrelationConfig) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *CorrelationConfig) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *CorrelationConfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CorrelationConfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CorrelationConfig) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CorrelationConfig) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *CorrelationConfig) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *CorrelationConfig) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetAttributeAssignments

`func (o *CorrelationConfig) GetAttributeAssignments() []CorrelationConfigAttributeAssignmentsInner`

GetAttributeAssignments returns the AttributeAssignments field if non-nil, zero value otherwise.

### GetAttributeAssignmentsOk

`func (o *CorrelationConfig) GetAttributeAssignmentsOk() (*[]CorrelationConfigAttributeAssignmentsInner, bool)`

GetAttributeAssignmentsOk returns a tuple with the AttributeAssignments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeAssignments

`func (o *CorrelationConfig) SetAttributeAssignments(v []CorrelationConfigAttributeAssignmentsInner)`

SetAttributeAssignments sets AttributeAssignments field to given value.

### HasAttributeAssignments

`func (o *CorrelationConfig) HasAttributeAssignments() bool`

HasAttributeAssignments returns a boolean if a field has been set.

### SetAttributeAssignmentsNil

`func (o *CorrelationConfig) SetAttributeAssignmentsNil(b bool)`

 SetAttributeAssignmentsNil sets the value for AttributeAssignments to be an explicit nil

### UnsetAttributeAssignments
`func (o *CorrelationConfig) UnsetAttributeAssignments()`

UnsetAttributeAssignments ensures that no value is present for AttributeAssignments, not even an explicit nil

