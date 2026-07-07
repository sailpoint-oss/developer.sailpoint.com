---
id: v1-privilegecriteriadto-groups-inner-criteria-items-inner
title: PrivilegecriteriadtoGroupsInnerCriteriaItemsInner
pagination_label: PrivilegecriteriadtoGroupsInnerCriteriaItemsInner
sidebar_label: PrivilegecriteriadtoGroupsInnerCriteriaItemsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner', 'V1PrivilegecriteriadtoGroupsInnerCriteriaItemsInner'] 
slug: /tools/sdk/go/privilegecriteria/models/privilegecriteriadto-groups-inner-criteria-items-inner
tags: ['SDK', 'Software Development Kit', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner', 'V1PrivilegecriteriadtoGroupsInnerCriteriaItemsInner']
---

# PrivilegecriteriadtoGroupsInnerCriteriaItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** | Pointer to **string** | The target type for the criteria item. | [optional] 
**Operator** | Pointer to **string** | The operator to apply to the property and values. | [optional] 
**Property** | Pointer to **NullableString** |  | [optional] 
**Values** | Pointer to **[]string** | The values to evaluate the property against. | [optional] 
**IgnoreCase** | Pointer to **bool** | Whether to ignore case when evaluating the property against the values. | [optional] [default to false]

## Methods

### NewPrivilegecriteriadtoGroupsInnerCriteriaItemsInner

`func NewPrivilegecriteriadtoGroupsInnerCriteriaItemsInner() *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner`

NewPrivilegecriteriadtoGroupsInnerCriteriaItemsInner instantiates a new PrivilegecriteriadtoGroupsInnerCriteriaItemsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrivilegecriteriadtoGroupsInnerCriteriaItemsInnerWithDefaults

`func NewPrivilegecriteriadtoGroupsInnerCriteriaItemsInnerWithDefaults() *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner`

NewPrivilegecriteriadtoGroupsInnerCriteriaItemsInnerWithDefaults instantiates a new PrivilegecriteriadtoGroupsInnerCriteriaItemsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetType

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetOperator

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetProperty

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetProperty() string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetPropertyOk() (*string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) SetProperty(v string)`

SetProperty sets Property field to given value.

### HasProperty

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) HasProperty() bool`

HasProperty returns a boolean if a field has been set.

### SetPropertyNil

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) SetPropertyNil(b bool)`

 SetPropertyNil sets the value for Property to be an explicit nil

### UnsetProperty
`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) UnsetProperty()`

UnsetProperty ensures that no value is present for Property, not even an explicit nil
### GetValues

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) HasValues() bool`

HasValues returns a boolean if a field has been set.

### GetIgnoreCase

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetIgnoreCase() bool`

GetIgnoreCase returns the IgnoreCase field if non-nil, zero value otherwise.

### GetIgnoreCaseOk

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) GetIgnoreCaseOk() (*bool, bool)`

GetIgnoreCaseOk returns a tuple with the IgnoreCase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreCase

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) SetIgnoreCase(v bool)`

SetIgnoreCase sets IgnoreCase field to given value.

### HasIgnoreCase

`func (o *PrivilegecriteriadtoGroupsInnerCriteriaItemsInner) HasIgnoreCase() bool`

HasIgnoreCase returns a boolean if a field has been set.


