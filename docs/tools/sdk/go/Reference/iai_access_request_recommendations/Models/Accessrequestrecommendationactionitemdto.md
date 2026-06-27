---
id: v1-accessrequestrecommendationactionitemdto
title: Accessrequestrecommendationactionitemdto
pagination_label: Accessrequestrecommendationactionitemdto
sidebar_label: Accessrequestrecommendationactionitemdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestrecommendationactionitemdto', 'V1Accessrequestrecommendationactionitemdto'] 
slug: /tools/sdk/go/iaiaccessrequestrecommendations/models/accessrequestrecommendationactionitemdto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationactionitemdto', 'V1Accessrequestrecommendationactionitemdto']
---

# Accessrequestrecommendationactionitemdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **string** | The identity ID taking the action. | 
**Access** | [**Accessrequestrecommendationitem**](accessrequestrecommendationitem) |  | 

## Methods

### NewAccessrequestrecommendationactionitemdto

`func NewAccessrequestrecommendationactionitemdto(identityId string, access Accessrequestrecommendationitem, ) *Accessrequestrecommendationactionitemdto`

NewAccessrequestrecommendationactionitemdto instantiates a new Accessrequestrecommendationactionitemdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestrecommendationactionitemdtoWithDefaults

`func NewAccessrequestrecommendationactionitemdtoWithDefaults() *Accessrequestrecommendationactionitemdto`

NewAccessrequestrecommendationactionitemdtoWithDefaults instantiates a new Accessrequestrecommendationactionitemdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Accessrequestrecommendationactionitemdto) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Accessrequestrecommendationactionitemdto) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Accessrequestrecommendationactionitemdto) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetAccess

`func (o *Accessrequestrecommendationactionitemdto) GetAccess() Accessrequestrecommendationitem`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *Accessrequestrecommendationactionitemdto) GetAccessOk() (*Accessrequestrecommendationitem, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *Accessrequestrecommendationactionitemdto) SetAccess(v Accessrequestrecommendationitem)`

SetAccess sets Access field to given value.



