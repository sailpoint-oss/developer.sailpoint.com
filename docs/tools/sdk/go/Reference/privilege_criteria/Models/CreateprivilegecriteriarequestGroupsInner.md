---
id: v1-createprivilegecriteriarequest-groups-inner
title: CreateprivilegecriteriarequestGroupsInner
pagination_label: CreateprivilegecriteriarequestGroupsInner
sidebar_label: CreateprivilegecriteriarequestGroupsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateprivilegecriteriarequestGroupsInner', 'V1CreateprivilegecriteriarequestGroupsInner'] 
slug: /tools/sdk/go/privilegecriteria/models/createprivilegecriteriarequest-groups-inner
tags: ['SDK', 'Software Development Kit', 'CreateprivilegecriteriarequestGroupsInner', 'V1CreateprivilegecriteriarequestGroupsInner']
---

# CreateprivilegecriteriarequestGroupsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** | Pointer to **string** | The logical operator to apply between criteria items in the group. | [optional] 
**CriteriaItems** | Pointer to [**[]CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner**](createprivilegecriteriarequest-groups-inner-criteria-items-inner) |  | [optional] 

## Methods

### NewCreateprivilegecriteriarequestGroupsInner

`func NewCreateprivilegecriteriarequestGroupsInner() *CreateprivilegecriteriarequestGroupsInner`

NewCreateprivilegecriteriarequestGroupsInner instantiates a new CreateprivilegecriteriarequestGroupsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateprivilegecriteriarequestGroupsInnerWithDefaults

`func NewCreateprivilegecriteriarequestGroupsInnerWithDefaults() *CreateprivilegecriteriarequestGroupsInner`

NewCreateprivilegecriteriarequestGroupsInnerWithDefaults instantiates a new CreateprivilegecriteriarequestGroupsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperator

`func (o *CreateprivilegecriteriarequestGroupsInner) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *CreateprivilegecriteriarequestGroupsInner) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *CreateprivilegecriteriarequestGroupsInner) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *CreateprivilegecriteriarequestGroupsInner) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetCriteriaItems

`func (o *CreateprivilegecriteriarequestGroupsInner) GetCriteriaItems() []CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner`

GetCriteriaItems returns the CriteriaItems field if non-nil, zero value otherwise.

### GetCriteriaItemsOk

`func (o *CreateprivilegecriteriarequestGroupsInner) GetCriteriaItemsOk() (*[]CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner, bool)`

GetCriteriaItemsOk returns a tuple with the CriteriaItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaItems

`func (o *CreateprivilegecriteriarequestGroupsInner) SetCriteriaItems(v []CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner)`

SetCriteriaItems sets CriteriaItems field to given value.

### HasCriteriaItems

`func (o *CreateprivilegecriteriarequestGroupsInner) HasCriteriaItems() bool`

HasCriteriaItems returns a boolean if a field has been set.


