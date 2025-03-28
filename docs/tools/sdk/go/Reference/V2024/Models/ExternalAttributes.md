---
id: v2024-external-attributes
title: ExternalAttributes
pagination_label: ExternalAttributes
sidebar_label: ExternalAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExternalAttributes', 'V2024ExternalAttributes'] 
slug: /tools/sdk/go/v2024/models/external-attributes
tags: ['SDK', 'Software Development Kit', 'ExternalAttributes', 'V2024ExternalAttributes']
---

# ExternalAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | A unique name for the external trigger | [optional] 
**Description** | Pointer to **string** | Additonal context about the external trigger | [optional] 
**ClientId** | Pointer to **string** | OAuth Client ID to authenticate with this trigger | [optional] 
**Url** | Pointer to **string** | URL to invoke this workflow | [optional] 

## Methods

### NewExternalAttributes

`func NewExternalAttributes() *ExternalAttributes`

NewExternalAttributes instantiates a new ExternalAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalAttributesWithDefaults

`func NewExternalAttributesWithDefaults() *ExternalAttributes`

NewExternalAttributesWithDefaults instantiates a new ExternalAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ExternalAttributes) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExternalAttributes) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExternalAttributes) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ExternalAttributes) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *ExternalAttributes) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ExternalAttributes) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ExternalAttributes) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ExternalAttributes) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetClientId

`func (o *ExternalAttributes) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *ExternalAttributes) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *ExternalAttributes) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *ExternalAttributes) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetUrl

`func (o *ExternalAttributes) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ExternalAttributes) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ExternalAttributes) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ExternalAttributes) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


