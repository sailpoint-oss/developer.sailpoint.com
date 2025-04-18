---
id: beta-access-request-recommendation-item
title: AccessRequestRecommendationItem
pagination_label: AccessRequestRecommendationItem
sidebar_label: AccessRequestRecommendationItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestRecommendationItem', 'BetaAccessRequestRecommendationItem'] 
slug: /tools/sdk/go/beta/models/access-request-recommendation-item
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItem', 'BetaAccessRequestRecommendationItem']
---

# AccessRequestRecommendationItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of access item being recommended. | [optional] 
**Type** | Pointer to [**AccessRequestRecommendationItemType**](access-request-recommendation-item-type) |  | [optional] 

## Methods

### NewAccessRequestRecommendationItem

`func NewAccessRequestRecommendationItem() *AccessRequestRecommendationItem`

NewAccessRequestRecommendationItem instantiates a new AccessRequestRecommendationItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestRecommendationItemWithDefaults

`func NewAccessRequestRecommendationItemWithDefaults() *AccessRequestRecommendationItem`

NewAccessRequestRecommendationItemWithDefaults instantiates a new AccessRequestRecommendationItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestRecommendationItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestRecommendationItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestRecommendationItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessRequestRecommendationItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *AccessRequestRecommendationItem) GetType() AccessRequestRecommendationItemType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestRecommendationItem) GetTypeOk() (*AccessRequestRecommendationItemType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestRecommendationItem) SetType(v AccessRequestRecommendationItemType)`

SetType sets Type field to given value.

### HasType

`func (o *AccessRequestRecommendationItem) HasType() bool`

HasType returns a boolean if a field has been set.


