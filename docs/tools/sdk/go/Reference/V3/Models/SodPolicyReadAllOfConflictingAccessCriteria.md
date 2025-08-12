---
id: sod-policy-read-all-of-conflicting-access-criteria
title: SodPolicyReadAllOfConflictingAccessCriteria
pagination_label: SodPolicyReadAllOfConflictingAccessCriteria
sidebar_label: SodPolicyReadAllOfConflictingAccessCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodPolicyReadAllOfConflictingAccessCriteria', 'SodPolicyReadAllOfConflictingAccessCriteria'] 
slug: /tools/sdk/go/v3/models/sod-policy-read-all-of-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyReadAllOfConflictingAccessCriteria', 'SodPolicyReadAllOfConflictingAccessCriteria']
---

# SodPolicyReadAllOfConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 
**RightCriteria** | Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 

## Methods

### NewSodPolicyReadAllOfConflictingAccessCriteria

`func NewSodPolicyReadAllOfConflictingAccessCriteria() *SodPolicyReadAllOfConflictingAccessCriteria`

NewSodPolicyReadAllOfConflictingAccessCriteria instantiates a new SodPolicyReadAllOfConflictingAccessCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodPolicyReadAllOfConflictingAccessCriteriaWithDefaults

`func NewSodPolicyReadAllOfConflictingAccessCriteriaWithDefaults() *SodPolicyReadAllOfConflictingAccessCriteria`

NewSodPolicyReadAllOfConflictingAccessCriteriaWithDefaults instantiates a new SodPolicyReadAllOfConflictingAccessCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftCriteria

`func (o *SodPolicyReadAllOfConflictingAccessCriteria) GetLeftCriteria() AccessCriteria`

GetLeftCriteria returns the LeftCriteria field if non-nil, zero value otherwise.

### GetLeftCriteriaOk

`func (o *SodPolicyReadAllOfConflictingAccessCriteria) GetLeftCriteriaOk() (*AccessCriteria, bool)`

GetLeftCriteriaOk returns a tuple with the LeftCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftCriteria

`func (o *SodPolicyReadAllOfConflictingAccessCriteria) SetLeftCriteria(v AccessCriteria)`

SetLeftCriteria sets LeftCriteria field to given value.

### HasLeftCriteria

`func (o *SodPolicyReadAllOfConflictingAccessCriteria) HasLeftCriteria() bool`

HasLeftCriteria returns a boolean if a field has been set.

### GetRightCriteria

`func (o *SodPolicyReadAllOfConflictingAccessCriteria) GetRightCriteria() AccessCriteria`

GetRightCriteria returns the RightCriteria field if non-nil, zero value otherwise.

### GetRightCriteriaOk

`func (o *SodPolicyReadAllOfConflictingAccessCriteria) GetRightCriteriaOk() (*AccessCriteria, bool)`

GetRightCriteriaOk returns a tuple with the RightCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightCriteria

`func (o *SodPolicyReadAllOfConflictingAccessCriteria) SetRightCriteria(v AccessCriteria)`

SetRightCriteria sets RightCriteria field to given value.

### HasRightCriteria

`func (o *SodPolicyReadAllOfConflictingAccessCriteria) HasRightCriteria() bool`

HasRightCriteria returns a boolean if a field has been set.


