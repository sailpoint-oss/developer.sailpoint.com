---
id: access-criteria
title: AccessCriteria
pagination_label: AccessCriteria
sidebar_label: AccessCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessCriteria', 'AccessCriteria'] 
slug: /tools/sdk/go//models/access-criteria
tags: ['SDK', 'Software Development Kit', 'AccessCriteria', 'AccessCriteria']
---

# AccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Business name for the access construct list | [optional] 
**CriteriaList** | Pointer to [**[]AccessCriteriaCriteriaListInner**](access-criteria-criteria-list-inner) | List of criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Methods

### NewAccessCriteria

`func NewAccessCriteria() *AccessCriteria`

NewAccessCriteria instantiates a new AccessCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessCriteriaWithDefaults

`func NewAccessCriteriaWithDefaults() *AccessCriteria`

NewAccessCriteriaWithDefaults instantiates a new AccessCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AccessCriteria) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessCriteria) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessCriteria) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessCriteria) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCriteriaList

`func (o *AccessCriteria) GetCriteriaList() []AccessCriteriaCriteriaListInner`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *AccessCriteria) GetCriteriaListOk() (*[]AccessCriteriaCriteriaListInner, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *AccessCriteria) SetCriteriaList(v []AccessCriteriaCriteriaListInner)`

SetCriteriaList sets CriteriaList field to given value.

### HasCriteriaList

`func (o *AccessCriteria) HasCriteriaList() bool`

HasCriteriaList returns a boolean if a field has been set.


