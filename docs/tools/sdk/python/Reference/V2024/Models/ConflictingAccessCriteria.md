---
id: v2024-conflicting-access-criteria
title: ConflictingAccessCriteria
pagination_label: ConflictingAccessCriteria
sidebar_label: ConflictingAccessCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConflictingAccessCriteria', 'V2024ConflictingAccessCriteria'] 
slug: /tools/sdk/go/v2024/models/conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'ConflictingAccessCriteria', 'V2024ConflictingAccessCriteria']
---

# ConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 
**RightCriteria** | Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 

## Methods

### NewConflictingAccessCriteria

`func NewConflictingAccessCriteria() *ConflictingAccessCriteria`

NewConflictingAccessCriteria instantiates a new ConflictingAccessCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConflictingAccessCriteriaWithDefaults

`func NewConflictingAccessCriteriaWithDefaults() *ConflictingAccessCriteria`

NewConflictingAccessCriteriaWithDefaults instantiates a new ConflictingAccessCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftCriteria

`func (o *ConflictingAccessCriteria) GetLeftCriteria() AccessCriteria`

GetLeftCriteria returns the LeftCriteria field if non-nil, zero value otherwise.

### GetLeftCriteriaOk

`func (o *ConflictingAccessCriteria) GetLeftCriteriaOk() (*AccessCriteria, bool)`

GetLeftCriteriaOk returns a tuple with the LeftCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftCriteria

`func (o *ConflictingAccessCriteria) SetLeftCriteria(v AccessCriteria)`

SetLeftCriteria sets LeftCriteria field to given value.

### HasLeftCriteria

`func (o *ConflictingAccessCriteria) HasLeftCriteria() bool`

HasLeftCriteria returns a boolean if a field has been set.

### GetRightCriteria

`func (o *ConflictingAccessCriteria) GetRightCriteria() AccessCriteria`

GetRightCriteria returns the RightCriteria field if non-nil, zero value otherwise.

### GetRightCriteriaOk

`func (o *ConflictingAccessCriteria) GetRightCriteriaOk() (*AccessCriteria, bool)`

GetRightCriteriaOk returns a tuple with the RightCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightCriteria

`func (o *ConflictingAccessCriteria) SetRightCriteria(v AccessCriteria)`

SetRightCriteria sets RightCriteria field to given value.

### HasRightCriteria

`func (o *ConflictingAccessCriteria) HasRightCriteria() bool`

HasRightCriteria returns a boolean if a field has been set.


