---
id: beta-source-account-created
title: SourceAccountCreated
pagination_label: SourceAccountCreated
sidebar_label: SourceAccountCreated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAccountCreated', 'BetaSourceAccountCreated'] 
slug: /tools/sdk/go/beta/models/source-account-created
tags: ['SDK', 'Software Development Kit', 'SourceAccountCreated', 'BetaSourceAccountCreated']
---

# SourceAccountCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** | Identity's universal unique identifier (UUID) on the source. The source system generates the UUID. | 
**Id** | **string** | SailPoint generated unique identifier. | 
**NativeIdentifier** | **string** | Account's unique ID on the source. | 
**SourceId** | **string** | Source ID. | 
**SourceName** | **string** | Source name. | 
**IdentityId** | **string** | ID of the identity correlated with the account. | 
**IdentityName** | **string** | Name of the identity correlated with the account. | 
**Attributes** | **map[string]interface{}** | Account attributes. The attributes' contents depend on the source's account schema. | 

## Methods

### NewSourceAccountCreated

`func NewSourceAccountCreated(uuid string, id string, nativeIdentifier string, sourceId string, sourceName string, identityId string, identityName string, attributes map[string]interface{}, ) *SourceAccountCreated`

NewSourceAccountCreated instantiates a new SourceAccountCreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAccountCreatedWithDefaults

`func NewSourceAccountCreatedWithDefaults() *SourceAccountCreated`

NewSourceAccountCreatedWithDefaults instantiates a new SourceAccountCreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *SourceAccountCreated) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *SourceAccountCreated) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *SourceAccountCreated) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetId

`func (o *SourceAccountCreated) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAccountCreated) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAccountCreated) SetId(v string)`

SetId sets Id field to given value.


### GetNativeIdentifier

`func (o *SourceAccountCreated) GetNativeIdentifier() string`

GetNativeIdentifier returns the NativeIdentifier field if non-nil, zero value otherwise.

### GetNativeIdentifierOk

`func (o *SourceAccountCreated) GetNativeIdentifierOk() (*string, bool)`

GetNativeIdentifierOk returns a tuple with the NativeIdentifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentifier

`func (o *SourceAccountCreated) SetNativeIdentifier(v string)`

SetNativeIdentifier sets NativeIdentifier field to given value.


### GetSourceId

`func (o *SourceAccountCreated) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *SourceAccountCreated) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *SourceAccountCreated) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetSourceName

`func (o *SourceAccountCreated) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *SourceAccountCreated) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *SourceAccountCreated) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.


### GetIdentityId

`func (o *SourceAccountCreated) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *SourceAccountCreated) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *SourceAccountCreated) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetIdentityName

`func (o *SourceAccountCreated) GetIdentityName() string`

GetIdentityName returns the IdentityName field if non-nil, zero value otherwise.

### GetIdentityNameOk

`func (o *SourceAccountCreated) GetIdentityNameOk() (*string, bool)`

GetIdentityNameOk returns a tuple with the IdentityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityName

`func (o *SourceAccountCreated) SetIdentityName(v string)`

SetIdentityName sets IdentityName field to given value.


### GetAttributes

`func (o *SourceAccountCreated) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *SourceAccountCreated) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *SourceAccountCreated) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.



