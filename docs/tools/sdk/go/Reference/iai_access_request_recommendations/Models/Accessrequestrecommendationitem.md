---
id: v1-accessrequestrecommendationitem
title: Accessrequestrecommendationitem
pagination_label: Accessrequestrecommendationitem
sidebar_label: Accessrequestrecommendationitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestrecommendationitem', 'V1Accessrequestrecommendationitem'] 
slug: /tools/sdk/go/iaiaccessrequestrecommendations/models/accessrequestrecommendationitem
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationitem', 'V1Accessrequestrecommendationitem']
---

# Accessrequestrecommendationitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of access item being recommended. | [optional] 
**Type** | Pointer to [**Accessrequestrecommendationitemtype**](accessrequestrecommendationitemtype) |  | [optional] 

## Methods

### NewAccessrequestrecommendationitem

`func NewAccessrequestrecommendationitem() *Accessrequestrecommendationitem`

NewAccessrequestrecommendationitem instantiates a new Accessrequestrecommendationitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestrecommendationitemWithDefaults

`func NewAccessrequestrecommendationitemWithDefaults() *Accessrequestrecommendationitem`

NewAccessrequestrecommendationitemWithDefaults instantiates a new Accessrequestrecommendationitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessrequestrecommendationitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessrequestrecommendationitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessrequestrecommendationitem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessrequestrecommendationitem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Accessrequestrecommendationitem) GetType() Accessrequestrecommendationitemtype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessrequestrecommendationitem) GetTypeOk() (*Accessrequestrecommendationitemtype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessrequestrecommendationitem) SetType(v Accessrequestrecommendationitemtype)`

SetType sets Type field to given value.

### HasType

`func (o *Accessrequestrecommendationitem) HasType() bool`

HasType returns a boolean if a field has been set.


