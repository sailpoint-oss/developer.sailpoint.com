---
id: v1-sedbatchrequest
title: Sedbatchrequest
pagination_label: Sedbatchrequest
sidebar_label: Sedbatchrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sedbatchrequest', 'V1Sedbatchrequest'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/sedbatchrequest
tags: ['SDK', 'Software Development Kit', 'Sedbatchrequest', 'V1Sedbatchrequest']
---

# Sedbatchrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | Pointer to **[]string** | list of entitlement ids | [optional] 
**Seds** | Pointer to **[]string** | list of sed ids | [optional] 
**SearchCriteria** | Pointer to [**map[string]Searchcriteria**](searchcriteria) | Search criteria for the batch request. | [optional] 

## Methods

### NewSedbatchrequest

`func NewSedbatchrequest() *Sedbatchrequest`

NewSedbatchrequest instantiates a new Sedbatchrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedbatchrequestWithDefaults

`func NewSedbatchrequestWithDefaults() *Sedbatchrequest`

NewSedbatchrequestWithDefaults instantiates a new Sedbatchrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlements

`func (o *Sedbatchrequest) GetEntitlements() []string`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Sedbatchrequest) GetEntitlementsOk() (*[]string, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Sedbatchrequest) SetEntitlements(v []string)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Sedbatchrequest) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### SetEntitlementsNil

`func (o *Sedbatchrequest) SetEntitlementsNil(b bool)`

 SetEntitlementsNil sets the value for Entitlements to be an explicit nil

### UnsetEntitlements
`func (o *Sedbatchrequest) UnsetEntitlements()`

UnsetEntitlements ensures that no value is present for Entitlements, not even an explicit nil
### GetSeds

`func (o *Sedbatchrequest) GetSeds() []string`

GetSeds returns the Seds field if non-nil, zero value otherwise.

### GetSedsOk

`func (o *Sedbatchrequest) GetSedsOk() (*[]string, bool)`

GetSedsOk returns a tuple with the Seds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeds

`func (o *Sedbatchrequest) SetSeds(v []string)`

SetSeds sets Seds field to given value.

### HasSeds

`func (o *Sedbatchrequest) HasSeds() bool`

HasSeds returns a boolean if a field has been set.

### SetSedsNil

`func (o *Sedbatchrequest) SetSedsNil(b bool)`

 SetSedsNil sets the value for Seds to be an explicit nil

### UnsetSeds
`func (o *Sedbatchrequest) UnsetSeds()`

UnsetSeds ensures that no value is present for Seds, not even an explicit nil
### GetSearchCriteria

`func (o *Sedbatchrequest) GetSearchCriteria() map[string]Searchcriteria`

GetSearchCriteria returns the SearchCriteria field if non-nil, zero value otherwise.

### GetSearchCriteriaOk

`func (o *Sedbatchrequest) GetSearchCriteriaOk() (*map[string]Searchcriteria, bool)`

GetSearchCriteriaOk returns a tuple with the SearchCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCriteria

`func (o *Sedbatchrequest) SetSearchCriteria(v map[string]Searchcriteria)`

SetSearchCriteria sets SearchCriteria field to given value.

### HasSearchCriteria

`func (o *Sedbatchrequest) HasSearchCriteria() bool`

HasSearchCriteria returns a boolean if a field has been set.

### SetSearchCriteriaNil

`func (o *Sedbatchrequest) SetSearchCriteriaNil(b bool)`

 SetSearchCriteriaNil sets the value for SearchCriteria to be an explicit nil

### UnsetSearchCriteria
`func (o *Sedbatchrequest) UnsetSearchCriteria()`

UnsetSearchCriteria ensures that no value is present for SearchCriteria, not even an explicit nil

