---
id: v1-createprivilegecriteriarequest-groups-inner-criteria-items-inner
title: CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner
pagination_label: CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner
sidebar_label: CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner', 'V1CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner'] 
slug: /tools/sdk/go/privilegecriteria/models/createprivilegecriteriarequest-groups-inner-criteria-items-inner
tags: ['SDK', 'Software Development Kit', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner', 'V1CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner']
---

# CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** | Pointer to **string** | The target type of the criteria item. | [optional] 
**Operator** | Pointer to **NullableString** |  | [optional] 
**Values** | Pointer to **[]string** | The values to evaluate the property against. | [optional] 
**IgnoreCase** | Pointer to **bool** | Whether to ignore case when evaluating the property against the values. | [optional] [default to false]

## Methods

### NewCreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner

`func NewCreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner() *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner`

NewCreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner instantiates a new CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateprivilegecriteriarequestGroupsInnerCriteriaItemsInnerWithDefaults

`func NewCreateprivilegecriteriarequestGroupsInnerCriteriaItemsInnerWithDefaults() *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner`

NewCreateprivilegecriteriarequestGroupsInnerCriteriaItemsInnerWithDefaults instantiates a new CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetType

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetOperator

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### SetOperatorNil

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) SetOperatorNil(b bool)`

 SetOperatorNil sets the value for Operator to be an explicit nil

### UnsetOperator
`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) UnsetOperator()`

UnsetOperator ensures that no value is present for Operator, not even an explicit nil
### GetValues

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) HasValues() bool`

HasValues returns a boolean if a field has been set.

### GetIgnoreCase

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) GetIgnoreCase() bool`

GetIgnoreCase returns the IgnoreCase field if non-nil, zero value otherwise.

### GetIgnoreCaseOk

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) GetIgnoreCaseOk() (*bool, bool)`

GetIgnoreCaseOk returns a tuple with the IgnoreCase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreCase

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) SetIgnoreCase(v bool)`

SetIgnoreCase sets IgnoreCase field to given value.

### HasIgnoreCase

`func (o *CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner) HasIgnoreCase() bool`

HasIgnoreCase returns a boolean if a field has been set.


