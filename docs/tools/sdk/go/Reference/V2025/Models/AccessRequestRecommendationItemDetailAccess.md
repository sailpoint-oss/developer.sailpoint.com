---
id: access-request-recommendation-item-detail-access
title: AccessRequestRecommendationItemDetailAccess
pagination_label: AccessRequestRecommendationItemDetailAccess
sidebar_label: AccessRequestRecommendationItemDetailAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestRecommendationItemDetailAccess', 'AccessRequestRecommendationItemDetailAccess'] 
slug: /tools/sdk/go//models/access-request-recommendation-item-detail-access
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItemDetailAccess', 'AccessRequestRecommendationItemDetailAccess']
---

# AccessRequestRecommendationItemDetailAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of access item being recommended. | [optional] 
**Type** | Pointer to [**AccessRequestRecommendationItemType**](access-request-recommendation-item-type) |  | [optional] 
**Name** | Pointer to **string** | Name of the access item | [optional] 
**Description** | Pointer to **string** | Description of the access item | [optional] 

## Methods

### NewAccessRequestRecommendationItemDetailAccess

`func NewAccessRequestRecommendationItemDetailAccess() *AccessRequestRecommendationItemDetailAccess`

NewAccessRequestRecommendationItemDetailAccess instantiates a new AccessRequestRecommendationItemDetailAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestRecommendationItemDetailAccessWithDefaults

`func NewAccessRequestRecommendationItemDetailAccessWithDefaults() *AccessRequestRecommendationItemDetailAccess`

NewAccessRequestRecommendationItemDetailAccessWithDefaults instantiates a new AccessRequestRecommendationItemDetailAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestRecommendationItemDetailAccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestRecommendationItemDetailAccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestRecommendationItemDetailAccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessRequestRecommendationItemDetailAccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *AccessRequestRecommendationItemDetailAccess) GetType() AccessRequestRecommendationItemType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestRecommendationItemDetailAccess) GetTypeOk() (*AccessRequestRecommendationItemType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestRecommendationItemDetailAccess) SetType(v AccessRequestRecommendationItemType)`

SetType sets Type field to given value.

### HasType

`func (o *AccessRequestRecommendationItemDetailAccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *AccessRequestRecommendationItemDetailAccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessRequestRecommendationItemDetailAccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessRequestRecommendationItemDetailAccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessRequestRecommendationItemDetailAccess) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessRequestRecommendationItemDetailAccess) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessRequestRecommendationItemDetailAccess) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessRequestRecommendationItemDetailAccess) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessRequestRecommendationItemDetailAccess) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


