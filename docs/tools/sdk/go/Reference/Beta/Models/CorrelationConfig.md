---
id: beta-correlation-config
title: CorrelationConfig
pagination_label: CorrelationConfig
sidebar_label: CorrelationConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CorrelationConfig', 'BetaCorrelationConfig'] 
slug: /tools/sdk/go/beta/models/correlation-config
tags: ['SDK', 'Software Development Kit', 'CorrelationConfig', 'BetaCorrelationConfig']
---

# CorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the correlation configuration. | [optional] 
**Name** | Pointer to **string** | The name of the correlation configuration. | [optional] 
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


