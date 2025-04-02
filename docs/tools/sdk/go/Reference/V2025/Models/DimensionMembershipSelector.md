---
id: dimension-membership-selector
title: DimensionMembershipSelector
pagination_label: DimensionMembershipSelector
sidebar_label: DimensionMembershipSelector
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DimensionMembershipSelector', 'DimensionMembershipSelector'] 
slug: /tools/sdk/go//models/dimension-membership-selector
tags: ['SDK', 'Software Development Kit', 'DimensionMembershipSelector', 'DimensionMembershipSelector']
---

# DimensionMembershipSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DimensionMembershipSelectorType**](dimension-membership-selector-type) |  | [optional] 
**Criteria** | Pointer to [**NullableDimensionCriteriaLevel1**](dimension-criteria-level1) |  | [optional] 

## Methods

### NewDimensionMembershipSelector

`func NewDimensionMembershipSelector() *DimensionMembershipSelector`

NewDimensionMembershipSelector instantiates a new DimensionMembershipSelector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionMembershipSelectorWithDefaults

`func NewDimensionMembershipSelectorWithDefaults() *DimensionMembershipSelector`

NewDimensionMembershipSelectorWithDefaults instantiates a new DimensionMembershipSelector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *DimensionMembershipSelector) GetType() DimensionMembershipSelectorType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DimensionMembershipSelector) GetTypeOk() (*DimensionMembershipSelectorType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DimensionMembershipSelector) SetType(v DimensionMembershipSelectorType)`

SetType sets Type field to given value.

### HasType

`func (o *DimensionMembershipSelector) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCriteria

`func (o *DimensionMembershipSelector) GetCriteria() DimensionCriteriaLevel1`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *DimensionMembershipSelector) GetCriteriaOk() (*DimensionCriteriaLevel1, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *DimensionMembershipSelector) SetCriteria(v DimensionCriteriaLevel1)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *DimensionMembershipSelector) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### SetCriteriaNil

`func (o *DimensionMembershipSelector) SetCriteriaNil(b bool)`

 SetCriteriaNil sets the value for Criteria to be an explicit nil

### UnsetCriteria
`func (o *DimensionMembershipSelector) UnsetCriteria()`

UnsetCriteria ensures that no value is present for Criteria, not even an explicit nil

