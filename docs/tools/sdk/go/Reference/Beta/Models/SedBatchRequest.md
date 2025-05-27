---
id: beta-sed-batch-request
title: SedBatchRequest
pagination_label: SedBatchRequest
sidebar_label: SedBatchRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SedBatchRequest', 'BetaSedBatchRequest'] 
slug: /tools/sdk/go/beta/models/sed-batch-request
tags: ['SDK', 'Software Development Kit', 'SedBatchRequest', 'BetaSedBatchRequest']
---

# SedBatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | Pointer to **[]string** | list of entitlement ids | [optional] 
**Seds** | Pointer to **[]string** | list of sed ids | [optional] 
**SearchCriteria** | Pointer to [**map[string]SearchCriteria**](search-criteria) | Search criteria for the batch request. | [optional] 

## Methods

### NewSedBatchRequest

`func NewSedBatchRequest() *SedBatchRequest`

NewSedBatchRequest instantiates a new SedBatchRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedBatchRequestWithDefaults

`func NewSedBatchRequestWithDefaults() *SedBatchRequest`

NewSedBatchRequestWithDefaults instantiates a new SedBatchRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlements

`func (o *SedBatchRequest) GetEntitlements() []string`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *SedBatchRequest) GetEntitlementsOk() (*[]string, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *SedBatchRequest) SetEntitlements(v []string)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *SedBatchRequest) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### SetEntitlementsNil

`func (o *SedBatchRequest) SetEntitlementsNil(b bool)`

 SetEntitlementsNil sets the value for Entitlements to be an explicit nil

### UnsetEntitlements
`func (o *SedBatchRequest) UnsetEntitlements()`

UnsetEntitlements ensures that no value is present for Entitlements, not even an explicit nil
### GetSeds

`func (o *SedBatchRequest) GetSeds() []string`

GetSeds returns the Seds field if non-nil, zero value otherwise.

### GetSedsOk

`func (o *SedBatchRequest) GetSedsOk() (*[]string, bool)`

GetSedsOk returns a tuple with the Seds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeds

`func (o *SedBatchRequest) SetSeds(v []string)`

SetSeds sets Seds field to given value.

### HasSeds

`func (o *SedBatchRequest) HasSeds() bool`

HasSeds returns a boolean if a field has been set.

### SetSedsNil

`func (o *SedBatchRequest) SetSedsNil(b bool)`

 SetSedsNil sets the value for Seds to be an explicit nil

### UnsetSeds
`func (o *SedBatchRequest) UnsetSeds()`

UnsetSeds ensures that no value is present for Seds, not even an explicit nil
### GetSearchCriteria

`func (o *SedBatchRequest) GetSearchCriteria() map[string]SearchCriteria`

GetSearchCriteria returns the SearchCriteria field if non-nil, zero value otherwise.

### GetSearchCriteriaOk

`func (o *SedBatchRequest) GetSearchCriteriaOk() (*map[string]SearchCriteria, bool)`

GetSearchCriteriaOk returns a tuple with the SearchCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchCriteria

`func (o *SedBatchRequest) SetSearchCriteria(v map[string]SearchCriteria)`

SetSearchCriteria sets SearchCriteria field to given value.

### HasSearchCriteria

`func (o *SedBatchRequest) HasSearchCriteria() bool`

HasSearchCriteria returns a boolean if a field has been set.

### SetSearchCriteriaNil

`func (o *SedBatchRequest) SetSearchCriteriaNil(b bool)`

 SetSearchCriteriaNil sets the value for SearchCriteria to be an explicit nil

### UnsetSearchCriteria
`func (o *SedBatchRequest) UnsetSearchCriteria()`

UnsetSearchCriteria ensures that no value is present for SearchCriteria, not even an explicit nil

