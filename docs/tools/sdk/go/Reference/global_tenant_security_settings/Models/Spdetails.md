---
id: v1-spdetails
title: Spdetails
pagination_label: Spdetails
sidebar_label: Spdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spdetails', 'V1Spdetails'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/models/spdetails
tags: ['SDK', 'Software Development Kit', 'Spdetails', 'V1Spdetails']
---

# Spdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** | Pointer to **string** | Federation protocol role | [optional] 
**EntityId** | Pointer to **string** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 
**Alias** | Pointer to **string** | Unique alias used to identify the selected local service provider based on used URL. Used with SP configurations. | [optional] 
**CallbackUrl** | **string** | The allowed callback URL where users will be redirected to after authentication. Used with SP configurations. | 
**LegacyAcsUrl** | Pointer to **string** | The legacy ACS URL used for SAML authentication. Used with SP configurations. | [optional] 

## Methods

### NewSpdetails

`func NewSpdetails(callbackUrl string, ) *Spdetails`

NewSpdetails instantiates a new Spdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpdetailsWithDefaults

`func NewSpdetailsWithDefaults() *Spdetails`

NewSpdetailsWithDefaults instantiates a new Spdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *Spdetails) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *Spdetails) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *Spdetails) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *Spdetails) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetEntityId

`func (o *Spdetails) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *Spdetails) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *Spdetails) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *Spdetails) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.

### GetAlias

`func (o *Spdetails) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *Spdetails) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *Spdetails) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *Spdetails) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *Spdetails) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *Spdetails) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *Spdetails) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.


### GetLegacyAcsUrl

`func (o *Spdetails) GetLegacyAcsUrl() string`

GetLegacyAcsUrl returns the LegacyAcsUrl field if non-nil, zero value otherwise.

### GetLegacyAcsUrlOk

`func (o *Spdetails) GetLegacyAcsUrlOk() (*string, bool)`

GetLegacyAcsUrlOk returns a tuple with the LegacyAcsUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyAcsUrl

`func (o *Spdetails) SetLegacyAcsUrl(v string)`

SetLegacyAcsUrl sets LegacyAcsUrl field to given value.

### HasLegacyAcsUrl

`func (o *Spdetails) HasLegacyAcsUrl() bool`

HasLegacyAcsUrl returns a boolean if a field has been set.


