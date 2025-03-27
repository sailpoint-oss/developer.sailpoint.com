---
id: beta-auth-profile
title: AuthProfile
pagination_label: AuthProfile
sidebar_label: AuthProfile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AuthProfile', 'BetaAuthProfile'] 
slug: /tools/sdk/go/beta/models/auth-profile
tags: ['SDK', 'Software Development Kit', 'AuthProfile', 'BetaAuthProfile']
---

# AuthProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Authentication Profile name. | [optional] 
**OffNetwork** | Pointer to **bool** | Use it to block access from off network. | [optional] [default to false]
**UntrustedGeography** | Pointer to **bool** | Use it to block access from untrusted geoographies. | [optional] [default to false]
**ApplicationId** | Pointer to **string** | Application ID. | [optional] 
**ApplicationName** | Pointer to **string** | Application name. | [optional] 
**Type** | Pointer to **string** | Type of the Authentication Profile. | [optional] 
**StrongAuthLogin** | Pointer to **bool** | Use it to enable strong authentication. | [optional] [default to false]

## Methods

### NewAuthProfile

`func NewAuthProfile() *AuthProfile`

NewAuthProfile instantiates a new AuthProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthProfileWithDefaults

`func NewAuthProfileWithDefaults() *AuthProfile`

NewAuthProfileWithDefaults instantiates a new AuthProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AuthProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AuthProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AuthProfile) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AuthProfile) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOffNetwork

`func (o *AuthProfile) GetOffNetwork() bool`

GetOffNetwork returns the OffNetwork field if non-nil, zero value otherwise.

### GetOffNetworkOk

`func (o *AuthProfile) GetOffNetworkOk() (*bool, bool)`

GetOffNetworkOk returns a tuple with the OffNetwork field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffNetwork

`func (o *AuthProfile) SetOffNetwork(v bool)`

SetOffNetwork sets OffNetwork field to given value.

### HasOffNetwork

`func (o *AuthProfile) HasOffNetwork() bool`

HasOffNetwork returns a boolean if a field has been set.

### GetUntrustedGeography

`func (o *AuthProfile) GetUntrustedGeography() bool`

GetUntrustedGeography returns the UntrustedGeography field if non-nil, zero value otherwise.

### GetUntrustedGeographyOk

`func (o *AuthProfile) GetUntrustedGeographyOk() (*bool, bool)`

GetUntrustedGeographyOk returns a tuple with the UntrustedGeography field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUntrustedGeography

`func (o *AuthProfile) SetUntrustedGeography(v bool)`

SetUntrustedGeography sets UntrustedGeography field to given value.

### HasUntrustedGeography

`func (o *AuthProfile) HasUntrustedGeography() bool`

HasUntrustedGeography returns a boolean if a field has been set.

### GetApplicationId

`func (o *AuthProfile) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *AuthProfile) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *AuthProfile) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *AuthProfile) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetApplicationName

`func (o *AuthProfile) GetApplicationName() string`

GetApplicationName returns the ApplicationName field if non-nil, zero value otherwise.

### GetApplicationNameOk

`func (o *AuthProfile) GetApplicationNameOk() (*string, bool)`

GetApplicationNameOk returns a tuple with the ApplicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationName

`func (o *AuthProfile) SetApplicationName(v string)`

SetApplicationName sets ApplicationName field to given value.

### HasApplicationName

`func (o *AuthProfile) HasApplicationName() bool`

HasApplicationName returns a boolean if a field has been set.

### GetType

`func (o *AuthProfile) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AuthProfile) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AuthProfile) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AuthProfile) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStrongAuthLogin

`func (o *AuthProfile) GetStrongAuthLogin() bool`

GetStrongAuthLogin returns the StrongAuthLogin field if non-nil, zero value otherwise.

### GetStrongAuthLoginOk

`func (o *AuthProfile) GetStrongAuthLoginOk() (*bool, bool)`

GetStrongAuthLoginOk returns a tuple with the StrongAuthLogin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrongAuthLogin

`func (o *AuthProfile) SetStrongAuthLogin(v bool)`

SetStrongAuthLogin sets StrongAuthLogin field to given value.

### HasStrongAuthLogin

`func (o *AuthProfile) HasStrongAuthLogin() bool`

HasStrongAuthLogin returns a boolean if a field has been set.


