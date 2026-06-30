---
id: v1-correlationconfig
title: Correlationconfig
pagination_label: Correlationconfig
sidebar_label: Correlationconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Correlationconfig', 'V1Correlationconfig'] 
slug: /tools/sdk/go/sources/models/correlationconfig
tags: ['SDK', 'Software Development Kit', 'Correlationconfig', 'V1Correlationconfig']
---

# Correlationconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | The ID of the correlation configuration. | [optional] 
**Name** | Pointer to **NullableString** | The name of the correlation configuration. | [optional] 
**AttributeAssignments** | Pointer to [**[]CorrelationconfigAttributeAssignmentsInner**](correlationconfig-attribute-assignments-inner) | The list of attribute assignments of the correlation configuration. | [optional] 

## Methods

### NewCorrelationconfig

`func NewCorrelationconfig() *Correlationconfig`

NewCorrelationconfig instantiates a new Correlationconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelationconfigWithDefaults

`func NewCorrelationconfigWithDefaults() *Correlationconfig`

NewCorrelationconfigWithDefaults instantiates a new Correlationconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Correlationconfig) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Correlationconfig) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Correlationconfig) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Correlationconfig) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Correlationconfig) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Correlationconfig) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *Correlationconfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Correlationconfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Correlationconfig) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Correlationconfig) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Correlationconfig) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Correlationconfig) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetAttributeAssignments

`func (o *Correlationconfig) GetAttributeAssignments() []CorrelationconfigAttributeAssignmentsInner`

GetAttributeAssignments returns the AttributeAssignments field if non-nil, zero value otherwise.

### GetAttributeAssignmentsOk

`func (o *Correlationconfig) GetAttributeAssignmentsOk() (*[]CorrelationconfigAttributeAssignmentsInner, bool)`

GetAttributeAssignmentsOk returns a tuple with the AttributeAssignments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeAssignments

`func (o *Correlationconfig) SetAttributeAssignments(v []CorrelationconfigAttributeAssignmentsInner)`

SetAttributeAssignments sets AttributeAssignments field to given value.

### HasAttributeAssignments

`func (o *Correlationconfig) HasAttributeAssignments() bool`

HasAttributeAssignments returns a boolean if a field has been set.

### SetAttributeAssignmentsNil

`func (o *Correlationconfig) SetAttributeAssignmentsNil(b bool)`

 SetAttributeAssignmentsNil sets the value for AttributeAssignments to be an explicit nil

### UnsetAttributeAssignments
`func (o *Correlationconfig) UnsetAttributeAssignments()`

UnsetAttributeAssignments ensures that no value is present for AttributeAssignments, not even an explicit nil

