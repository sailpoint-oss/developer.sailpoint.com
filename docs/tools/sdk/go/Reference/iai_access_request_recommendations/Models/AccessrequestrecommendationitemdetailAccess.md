---
id: v1-accessrequestrecommendationitemdetail-access
title: AccessrequestrecommendationitemdetailAccess
pagination_label: AccessrequestrecommendationitemdetailAccess
sidebar_label: AccessrequestrecommendationitemdetailAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessrequestrecommendationitemdetailAccess', 'V1AccessrequestrecommendationitemdetailAccess'] 
slug: /tools/sdk/go/iaiaccessrequestrecommendations/models/accessrequestrecommendationitemdetail-access
tags: ['SDK', 'Software Development Kit', 'AccessrequestrecommendationitemdetailAccess', 'V1AccessrequestrecommendationitemdetailAccess']
---

# AccessrequestrecommendationitemdetailAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of access item being recommended. | [optional] 
**Type** | Pointer to [**Accessrequestrecommendationitemtype**](accessrequestrecommendationitemtype) |  | [optional] 
**Name** | Pointer to **string** | Name of the access item | [optional] 
**Description** | Pointer to **string** | Description of the access item | [optional] 

## Methods

### NewAccessrequestrecommendationitemdetailAccess

`func NewAccessrequestrecommendationitemdetailAccess() *AccessrequestrecommendationitemdetailAccess`

NewAccessrequestrecommendationitemdetailAccess instantiates a new AccessrequestrecommendationitemdetailAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestrecommendationitemdetailAccessWithDefaults

`func NewAccessrequestrecommendationitemdetailAccessWithDefaults() *AccessrequestrecommendationitemdetailAccess`

NewAccessrequestrecommendationitemdetailAccessWithDefaults instantiates a new AccessrequestrecommendationitemdetailAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessrequestrecommendationitemdetailAccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessrequestrecommendationitemdetailAccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessrequestrecommendationitemdetailAccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessrequestrecommendationitemdetailAccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *AccessrequestrecommendationitemdetailAccess) GetType() Accessrequestrecommendationitemtype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessrequestrecommendationitemdetailAccess) GetTypeOk() (*Accessrequestrecommendationitemtype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessrequestrecommendationitemdetailAccess) SetType(v Accessrequestrecommendationitemtype)`

SetType sets Type field to given value.

### HasType

`func (o *AccessrequestrecommendationitemdetailAccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *AccessrequestrecommendationitemdetailAccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessrequestrecommendationitemdetailAccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessrequestrecommendationitemdetailAccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessrequestrecommendationitemdetailAccess) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessrequestrecommendationitemdetailAccess) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessrequestrecommendationitemdetailAccess) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessrequestrecommendationitemdetailAccess) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessrequestrecommendationitemdetailAccess) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


