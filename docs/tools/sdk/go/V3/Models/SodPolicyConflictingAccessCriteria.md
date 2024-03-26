---
id: sod-policy-conflicting-access-criteria
title: SodPolicyConflictingAccessCriteria
pagination_label: SodPolicyConflictingAccessCriteria
sidebar_label: SodPolicyConflictingAccessCriteria
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SodPolicyConflictingAccessCriteria'] 
slug: /tools/sdk/go/v3/models/sod-policy-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyConflictingAccessCriteria']
---

# SodPolicyConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** |  Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 
**RightCriteria** |  Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 

## Methods

### NewSodPolicyConflictingAccessCriteria

`func NewSodPolicyConflictingAccessCriteria() *SodPolicyConflictingAccessCriteria`

NewSodPolicyConflictingAccessCriteria instantiates a new SodPolicyConflictingAccessCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodPolicyConflictingAccessCriteriaWithDefaults

`func NewSodPolicyConflictingAccessCriteriaWithDefaults() *SodPolicyConflictingAccessCriteria`

NewSodPolicyConflictingAccessCriteriaWithDefaults instantiates a new SodPolicyConflictingAccessCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftCriteria

`func (o *SodPolicyConflictingAccessCriteria) GetLeftCriteria() AccessCriteria`

GetLeftCriteria returns the LeftCriteria field if non-nil, zero value otherwise.

### GetLeftCriteriaOk

`func (o *SodPolicyConflictingAccessCriteria) GetLeftCriteriaOk() (*AccessCriteria, bool)`

GetLeftCriteriaOk returns a tuple with the LeftCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftCriteria

`func (o *SodPolicyConflictingAccessCriteria) SetLeftCriteria(v AccessCriteria)`

SetLeftCriteria sets LeftCriteria field to given value.

### HasLeftCriteria

`func (o *SodPolicyConflictingAccessCriteria) HasLeftCriteria() bool`

HasLeftCriteria returns a boolean if a field has been set.

### GetRightCriteria

`func (o *SodPolicyConflictingAccessCriteria) GetRightCriteria() AccessCriteria`

GetRightCriteria returns the RightCriteria field if non-nil, zero value otherwise.

### GetRightCriteriaOk

`func (o *SodPolicyConflictingAccessCriteria) GetRightCriteriaOk() (*AccessCriteria, bool)`

GetRightCriteriaOk returns a tuple with the RightCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightCriteria

`func (o *SodPolicyConflictingAccessCriteria) SetRightCriteria(v AccessCriteria)`

SetRightCriteria sets RightCriteria field to given value.

### HasRightCriteria

`func (o *SodPolicyConflictingAccessCriteria) HasRightCriteria() bool`

HasRightCriteria returns a boolean if a field has been set.


[[Back to top]](#) 


