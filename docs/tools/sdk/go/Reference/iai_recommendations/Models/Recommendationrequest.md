---
id: v1-recommendationrequest
title: Recommendationrequest
pagination_label: Recommendationrequest
sidebar_label: Recommendationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Recommendationrequest', 'V1Recommendationrequest'] 
slug: /tools/sdk/go/iairecommendations/models/recommendationrequest
tags: ['SDK', 'Software Development Kit', 'Recommendationrequest', 'V1Recommendationrequest']
---

# Recommendationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The identity ID | [optional] 
**Item** | Pointer to [**Accessitemref**](accessitemref) |  | [optional] 

## Methods

### NewRecommendationrequest

`func NewRecommendationrequest() *Recommendationrequest`

NewRecommendationrequest instantiates a new Recommendationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecommendationrequestWithDefaults

`func NewRecommendationrequestWithDefaults() *Recommendationrequest`

NewRecommendationrequestWithDefaults instantiates a new Recommendationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Recommendationrequest) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Recommendationrequest) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Recommendationrequest) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Recommendationrequest) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetItem

`func (o *Recommendationrequest) GetItem() Accessitemref`

GetItem returns the Item field if non-nil, zero value otherwise.

### GetItemOk

`func (o *Recommendationrequest) GetItemOk() (*Accessitemref, bool)`

GetItemOk returns a tuple with the Item field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItem

`func (o *Recommendationrequest) SetItem(v Accessitemref)`

SetItem sets Item field to given value.

### HasItem

`func (o *Recommendationrequest) HasItem() bool`

HasItem returns a boolean if a field has been set.


