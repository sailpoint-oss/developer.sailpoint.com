---
id: v1-dataaccess
title: Dataaccess
pagination_label: Dataaccess
sidebar_label: Dataaccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dataaccess', 'V1Dataaccess'] 
slug: /tools/sdk/go/certifications/models/dataaccess
tags: ['SDK', 'Software Development Kit', 'Dataaccess', 'V1Dataaccess']
---

# Dataaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** | Pointer to [**[]DataaccessPoliciesInner**](dataaccess-policies-inner) | List of classification policies that apply to resources the entitlement \\ groups has access to | [optional] 
**Categories** | Pointer to [**[]DataaccessCategoriesInner**](dataaccess-categories-inner) | List of classification categories that apply to resources the entitlement \\ groups has access to | [optional] 
**ImpactScore** | Pointer to [**DataaccessImpactScore**](dataaccess-impact-score) |  | [optional] 

## Methods

### NewDataaccess

`func NewDataaccess() *Dataaccess`

NewDataaccess instantiates a new Dataaccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataaccessWithDefaults

`func NewDataaccessWithDefaults() *Dataaccess`

NewDataaccessWithDefaults instantiates a new Dataaccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicies

`func (o *Dataaccess) GetPolicies() []DataaccessPoliciesInner`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *Dataaccess) GetPoliciesOk() (*[]DataaccessPoliciesInner, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *Dataaccess) SetPolicies(v []DataaccessPoliciesInner)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *Dataaccess) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.

### GetCategories

`func (o *Dataaccess) GetCategories() []DataaccessCategoriesInner`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *Dataaccess) GetCategoriesOk() (*[]DataaccessCategoriesInner, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *Dataaccess) SetCategories(v []DataaccessCategoriesInner)`

SetCategories sets Categories field to given value.

### HasCategories

`func (o *Dataaccess) HasCategories() bool`

HasCategories returns a boolean if a field has been set.

### GetImpactScore

`func (o *Dataaccess) GetImpactScore() DataaccessImpactScore`

GetImpactScore returns the ImpactScore field if non-nil, zero value otherwise.

### GetImpactScoreOk

`func (o *Dataaccess) GetImpactScoreOk() (*DataaccessImpactScore, bool)`

GetImpactScoreOk returns a tuple with the ImpactScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImpactScore

`func (o *Dataaccess) SetImpactScore(v DataaccessImpactScore)`

SetImpactScore sets ImpactScore field to given value.

### HasImpactScore

`func (o *Dataaccess) HasImpactScore() bool`

HasImpactScore returns a boolean if a field has been set.


