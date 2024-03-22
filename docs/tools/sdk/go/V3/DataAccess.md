---
id: data-access
title: DataAccess
pagination_label: DataAccess
sidebar_label: DataAccess
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'DataAccess'] 
slug: /tools/sdk/go/v3/models/data-access
tags: ['SDK', 'Software Development Kit', 'DataAccess']
---

# DataAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** |  Pointer to [**[]DataAccessPoliciesInner**](data-access-policies-inner) | List of classification policies that apply to resources the entitlement \\ groups has access to | [optional] 
**Categories** |  Pointer to [**[]DataAccessCategoriesInner**](data-access-categories-inner) | List of classification categories that apply to resources the entitlement \\ groups has access to | [optional] 
**ImpactScore** |  Pointer to [**DataAccessImpactScore**](data-access-impact-score) |  | [optional] 

## Methods

### NewDataAccess

`func NewDataAccess() *DataAccess`

NewDataAccess instantiates a new DataAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataAccessWithDefaults

`func NewDataAccessWithDefaults() *DataAccess`

NewDataAccessWithDefaults instantiates a new DataAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicies

`func (o *DataAccess) GetPolicies() []DataAccessPoliciesInner`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *DataAccess) GetPoliciesOk() (*[]DataAccessPoliciesInner, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *DataAccess) SetPolicies(v []DataAccessPoliciesInner)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *DataAccess) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.

### GetCategories

`func (o *DataAccess) GetCategories() []DataAccessCategoriesInner`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *DataAccess) GetCategoriesOk() (*[]DataAccessCategoriesInner, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *DataAccess) SetCategories(v []DataAccessCategoriesInner)`

SetCategories sets Categories field to given value.

### HasCategories

`func (o *DataAccess) HasCategories() bool`

HasCategories returns a boolean if a field has been set.

### GetImpactScore

`func (o *DataAccess) GetImpactScore() DataAccessImpactScore`

GetImpactScore returns the ImpactScore field if non-nil, zero value otherwise.

### GetImpactScoreOk

`func (o *DataAccess) GetImpactScoreOk() (*DataAccessImpactScore, bool)`

GetImpactScoreOk returns a tuple with the ImpactScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpactScore

`func (o *DataAccess) SetImpactScore(v DataAccessImpactScore)`

SetImpactScore sets ImpactScore field to given value.

### HasImpactScore

`func (o *DataAccess) HasImpactScore() bool`

HasImpactScore returns a boolean if a field has been set.


[[Back to top]](#) 


