---
id: token-auth-request
title: TokenAuthRequest
pagination_label: TokenAuthRequest
sidebar_label: TokenAuthRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'TokenAuthRequest'] 
slug: /tools/sdk/go/beta/models/token-auth-request
tags: ['SDK', 'Software Development Kit', 'TokenAuthRequest']
---

# TokenAuthRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Token** |  **string** | Token value | 
**UserAlias** |  **string** | User alias from table spt_identity field named &#39;name&#39; | 
**DeliveryType** |  **string** | Token delivery type | 

## Methods

### NewTokenAuthRequest

`func NewTokenAuthRequest(token string, userAlias string, deliveryType string, ) *TokenAuthRequest`

NewTokenAuthRequest instantiates a new TokenAuthRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenAuthRequestWithDefaults

`func NewTokenAuthRequestWithDefaults() *TokenAuthRequest`

NewTokenAuthRequestWithDefaults instantiates a new TokenAuthRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToken

`func (o *TokenAuthRequest) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *TokenAuthRequest) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *TokenAuthRequest) SetToken(v string)`

SetToken sets Token field to given value.


### GetUserAlias

`func (o *TokenAuthRequest) GetUserAlias() string`

GetUserAlias returns the UserAlias field if non-nil, zero value otherwise.

### GetUserAliasOk

`func (o *TokenAuthRequest) GetUserAliasOk() (*string, bool)`

GetUserAliasOk returns a tuple with the UserAlias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserAlias

`func (o *TokenAuthRequest) SetUserAlias(v string)`

SetUserAlias sets UserAlias field to given value.


### GetDeliveryType

`func (o *TokenAuthRequest) GetDeliveryType() string`

GetDeliveryType returns the DeliveryType field if non-nil, zero value otherwise.

### GetDeliveryTypeOk

`func (o *TokenAuthRequest) GetDeliveryTypeOk() (*string, bool)`

GetDeliveryTypeOk returns a tuple with the DeliveryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryType

`func (o *TokenAuthRequest) SetDeliveryType(v string)`

SetDeliveryType sets DeliveryType field to given value.



[[Back to top]](#) 


