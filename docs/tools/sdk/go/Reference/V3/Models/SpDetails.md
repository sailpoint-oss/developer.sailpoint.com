---
id: sp-details
title: SpDetails
pagination_label: SpDetails
sidebar_label: SpDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpDetails', 'SpDetails'] 
slug: /tools/sdk/go/v3/models/sp-details
tags: ['SDK', 'Software Development Kit', 'SpDetails', 'SpDetails']
---

# SpDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** | Pointer to **string** | Federation protocol role | [optional] 
**EntityId** | Pointer to **string** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
**Alias** | Pointer to **string** | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [optional] 
**CallbackUrl** | Pointer to **string** | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | [optional] 

## Methods

### NewSpDetails

`func NewSpDetails() *SpDetails`

NewSpDetails instantiates a new SpDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpDetailsWithDefaults

`func NewSpDetailsWithDefaults() *SpDetails`

NewSpDetailsWithDefaults instantiates a new SpDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *SpDetails) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *SpDetails) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *SpDetails) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *SpDetails) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetEntityId

`func (o *SpDetails) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *SpDetails) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *SpDetails) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *SpDetails) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.

### GetAlias

`func (o *SpDetails) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *SpDetails) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *SpDetails) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *SpDetails) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *SpDetails) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *SpDetails) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *SpDetails) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *SpDetails) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.


