---
id: v1-accessrequestrecommendationactionitemresponsedto
title: Accessrequestrecommendationactionitemresponsedto
pagination_label: Accessrequestrecommendationactionitemresponsedto
sidebar_label: Accessrequestrecommendationactionitemresponsedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestrecommendationactionitemresponsedto', 'V1Accessrequestrecommendationactionitemresponsedto'] 
slug: /tools/sdk/go/iaiaccessrequestrecommendations/models/accessrequestrecommendationactionitemresponsedto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationactionitemresponsedto', 'V1Accessrequestrecommendationactionitemresponsedto']
---

# Accessrequestrecommendationactionitemresponsedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | The identity ID taking the action. | [optional] 
**Access** | Pointer to [**Accessrequestrecommendationitem**](accessrequestrecommendationitem) |  | [optional] 
**Timestamp** | Pointer to **SailPointTime** |  | [optional] 

## Methods

### NewAccessrequestrecommendationactionitemresponsedto

`func NewAccessrequestrecommendationactionitemresponsedto() *Accessrequestrecommendationactionitemresponsedto`

NewAccessrequestrecommendationactionitemresponsedto instantiates a new Accessrequestrecommendationactionitemresponsedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestrecommendationactionitemresponsedtoWithDefaults

`func NewAccessrequestrecommendationactionitemresponsedtoWithDefaults() *Accessrequestrecommendationactionitemresponsedto`

NewAccessrequestrecommendationactionitemresponsedtoWithDefaults instantiates a new Accessrequestrecommendationactionitemresponsedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Accessrequestrecommendationactionitemresponsedto) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Accessrequestrecommendationactionitemresponsedto) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Accessrequestrecommendationactionitemresponsedto) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Accessrequestrecommendationactionitemresponsedto) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetAccess

`func (o *Accessrequestrecommendationactionitemresponsedto) GetAccess() Accessrequestrecommendationitem`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *Accessrequestrecommendationactionitemresponsedto) GetAccessOk() (*Accessrequestrecommendationitem, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *Accessrequestrecommendationactionitemresponsedto) SetAccess(v Accessrequestrecommendationitem)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *Accessrequestrecommendationactionitemresponsedto) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetTimestamp

`func (o *Accessrequestrecommendationactionitemresponsedto) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Accessrequestrecommendationactionitemresponsedto) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Accessrequestrecommendationactionitemresponsedto) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *Accessrequestrecommendationactionitemresponsedto) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.


