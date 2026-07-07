---
id: v1-privilegecriteriadto-groups-inner
title: PrivilegecriteriadtoGroupsInner
pagination_label: PrivilegecriteriadtoGroupsInner
sidebar_label: PrivilegecriteriadtoGroupsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PrivilegecriteriadtoGroupsInner', 'V1PrivilegecriteriadtoGroupsInner'] 
slug: /tools/sdk/go/privilegecriteria/models/privilegecriteriadto-groups-inner
tags: ['SDK', 'Software Development Kit', 'PrivilegecriteriadtoGroupsInner', 'V1PrivilegecriteriadtoGroupsInner']
---

# PrivilegecriteriadtoGroupsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** | Pointer to **string** | The logical operator to apply between criteria items in the group. | [optional] 
**CriteriaItems** | Pointer to [**[]PrivilegecriteriadtoGroupsInnerCriteriaItemsInner**](privilegecriteriadto-groups-inner-criteria-items-inner) |  | [optional] 

## Methods

### NewPrivilegecriteriadtoGroupsInner

`func NewPrivilegecriteriadtoGroupsInner() *PrivilegecriteriadtoGroupsInner`

NewPrivilegecriteriadtoGroupsInner instantiates a new PrivilegecriteriadtoGroupsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrivilegecriteriadtoGroupsInnerWithDefaults

`func NewPrivilegecriteriadtoGroupsInnerWithDefaults() *PrivilegecriteriadtoGroupsInner`

NewPrivilegecriteriadtoGroupsInnerWithDefaults instantiates a new PrivilegecriteriadtoGroupsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperator

`func (o *PrivilegecriteriadtoGroupsInner) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *PrivilegecriteriadtoGroupsInner) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *PrivilegecriteriadtoGroupsInner) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *PrivilegecriteriadtoGroupsInner) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetCriteriaItems

`func (o *PrivilegecriteriadtoGroupsInner) GetCriteriaItems() []PrivilegecriteriadtoGroupsInnerCriteriaItemsInner`

GetCriteriaItems returns the CriteriaItems field if non-nil, zero value otherwise.

### GetCriteriaItemsOk

`func (o *PrivilegecriteriadtoGroupsInner) GetCriteriaItemsOk() (*[]PrivilegecriteriadtoGroupsInnerCriteriaItemsInner, bool)`

GetCriteriaItemsOk returns a tuple with the CriteriaItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaItems

`func (o *PrivilegecriteriadtoGroupsInner) SetCriteriaItems(v []PrivilegecriteriadtoGroupsInnerCriteriaItemsInner)`

SetCriteriaItems sets CriteriaItems field to given value.

### HasCriteriaItems

`func (o *PrivilegecriteriadtoGroupsInner) HasCriteriaItems() bool`

HasCriteriaItems returns a boolean if a field has been set.


