---
id: sod-policy-request-all-of-conflicting-access-criteria
title: SodPolicyRequestAllOfConflictingAccessCriteria
pagination_label: SodPolicyRequestAllOfConflictingAccessCriteria
sidebar_label: SodPolicyRequestAllOfConflictingAccessCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodPolicyRequestAllOfConflictingAccessCriteria', 'SodPolicyRequestAllOfConflictingAccessCriteria'] 
slug: /tools/sdk/go/v3/models/sod-policy-request-all-of-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyRequestAllOfConflictingAccessCriteria', 'SodPolicyRequestAllOfConflictingAccessCriteria']
---

# SodPolicyRequestAllOfConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | Pointer to [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 
**RightCriteria** | Pointer to [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 

## Methods

### NewSodPolicyRequestAllOfConflictingAccessCriteria

`func NewSodPolicyRequestAllOfConflictingAccessCriteria() *SodPolicyRequestAllOfConflictingAccessCriteria`

NewSodPolicyRequestAllOfConflictingAccessCriteria instantiates a new SodPolicyRequestAllOfConflictingAccessCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodPolicyRequestAllOfConflictingAccessCriteriaWithDefaults

`func NewSodPolicyRequestAllOfConflictingAccessCriteriaWithDefaults() *SodPolicyRequestAllOfConflictingAccessCriteria`

NewSodPolicyRequestAllOfConflictingAccessCriteriaWithDefaults instantiates a new SodPolicyRequestAllOfConflictingAccessCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftCriteria

`func (o *SodPolicyRequestAllOfConflictingAccessCriteria) GetLeftCriteria() AccessCriteriaRequest`

GetLeftCriteria returns the LeftCriteria field if non-nil, zero value otherwise.

### GetLeftCriteriaOk

`func (o *SodPolicyRequestAllOfConflictingAccessCriteria) GetLeftCriteriaOk() (*AccessCriteriaRequest, bool)`

GetLeftCriteriaOk returns a tuple with the LeftCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftCriteria

`func (o *SodPolicyRequestAllOfConflictingAccessCriteria) SetLeftCriteria(v AccessCriteriaRequest)`

SetLeftCriteria sets LeftCriteria field to given value.

### HasLeftCriteria

`func (o *SodPolicyRequestAllOfConflictingAccessCriteria) HasLeftCriteria() bool`

HasLeftCriteria returns a boolean if a field has been set.

### GetRightCriteria

`func (o *SodPolicyRequestAllOfConflictingAccessCriteria) GetRightCriteria() AccessCriteriaRequest`

GetRightCriteria returns the RightCriteria field if non-nil, zero value otherwise.

### GetRightCriteriaOk

`func (o *SodPolicyRequestAllOfConflictingAccessCriteria) GetRightCriteriaOk() (*AccessCriteriaRequest, bool)`

GetRightCriteriaOk returns a tuple with the RightCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightCriteria

`func (o *SodPolicyRequestAllOfConflictingAccessCriteria) SetRightCriteria(v AccessCriteriaRequest)`

SetRightCriteria sets RightCriteria field to given value.

### HasRightCriteria

`func (o *SodPolicyRequestAllOfConflictingAccessCriteria) HasRightCriteria() bool`

HasRightCriteria returns a boolean if a field has been set.


