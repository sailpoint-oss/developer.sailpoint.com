---
id: beta-send-token-request
title: SendTokenRequest
pagination_label: SendTokenRequest
sidebar_label: SendTokenRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendTokenRequest', 'BetaSendTokenRequest'] 
slug: /tools/sdk/go/beta/models/send-token-request
tags: ['SDK', 'Software Development Kit', 'SendTokenRequest', 'BetaSendTokenRequest']
---

# SendTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserAlias** | **string** | User alias from table spt_identity field named 'name' | 
**DeliveryType** | **string** | Token delivery type | 

## Methods

### NewSendTokenRequest

`func NewSendTokenRequest(userAlias string, deliveryType string, ) *SendTokenRequest`

NewSendTokenRequest instantiates a new SendTokenRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendTokenRequestWithDefaults

`func NewSendTokenRequestWithDefaults() *SendTokenRequest`

NewSendTokenRequestWithDefaults instantiates a new SendTokenRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserAlias

`func (o *SendTokenRequest) GetUserAlias() string`

GetUserAlias returns the UserAlias field if non-nil, zero value otherwise.

### GetUserAliasOk

`func (o *SendTokenRequest) GetUserAliasOk() (*string, bool)`

GetUserAliasOk returns a tuple with the UserAlias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserAlias

`func (o *SendTokenRequest) SetUserAlias(v string)`

SetUserAlias sets UserAlias field to given value.


### GetDeliveryType

`func (o *SendTokenRequest) GetDeliveryType() string`

GetDeliveryType returns the DeliveryType field if non-nil, zero value otherwise.

### GetDeliveryTypeOk

`func (o *SendTokenRequest) GetDeliveryTypeOk() (*string, bool)`

GetDeliveryTypeOk returns a tuple with the DeliveryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryType

`func (o *SendTokenRequest) SetDeliveryType(v string)`

SetDeliveryType sets DeliveryType field to given value.



