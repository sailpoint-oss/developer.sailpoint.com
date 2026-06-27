---
id: v1-authprofile
title: Authprofile
pagination_label: Authprofile
sidebar_label: Authprofile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Authprofile', 'V1Authprofile'] 
slug: /tools/sdk/go/authprofile/models/authprofile
tags: ['SDK', 'Software Development Kit', 'Authprofile', 'V1Authprofile']
---

# Authprofile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Authentication Profile name. | [optional] 
**OffNetwork** | Pointer to **bool** | Use it to block access from off network. | [optional] [default to false]
**UntrustedGeography** | Pointer to **bool** | Use it to block access from untrusted geoographies. | [optional] [default to false]
**ApplicationId** | Pointer to **NullableString** | Application ID. | [optional] 
**ApplicationName** | Pointer to **NullableString** | Application name. | [optional] 
**Type** | Pointer to **string** | Type of the Authentication Profile. | [optional] 
**StrongAuthLogin** | Pointer to **bool** | Use it to enable strong authentication. | [optional] [default to false]

## Methods

### NewAuthprofile

`func NewAuthprofile() *Authprofile`

NewAuthprofile instantiates a new Authprofile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthprofileWithDefaults

`func NewAuthprofileWithDefaults() *Authprofile`

NewAuthprofileWithDefaults instantiates a new Authprofile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Authprofile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Authprofile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Authprofile) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Authprofile) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOffNetwork

`func (o *Authprofile) GetOffNetwork() bool`

GetOffNetwork returns the OffNetwork field if non-nil, zero value otherwise.

### GetOffNetworkOk

`func (o *Authprofile) GetOffNetworkOk() (*bool, bool)`

GetOffNetworkOk returns a tuple with the OffNetwork field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffNetwork

`func (o *Authprofile) SetOffNetwork(v bool)`

SetOffNetwork sets OffNetwork field to given value.

### HasOffNetwork

`func (o *Authprofile) HasOffNetwork() bool`

HasOffNetwork returns a boolean if a field has been set.

### GetUntrustedGeography

`func (o *Authprofile) GetUntrustedGeography() bool`

GetUntrustedGeography returns the UntrustedGeography field if non-nil, zero value otherwise.

### GetUntrustedGeographyOk

`func (o *Authprofile) GetUntrustedGeographyOk() (*bool, bool)`

GetUntrustedGeographyOk returns a tuple with the UntrustedGeography field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUntrustedGeography

`func (o *Authprofile) SetUntrustedGeography(v bool)`

SetUntrustedGeography sets UntrustedGeography field to given value.

### HasUntrustedGeography

`func (o *Authprofile) HasUntrustedGeography() bool`

HasUntrustedGeography returns a boolean if a field has been set.

### GetApplicationId

`func (o *Authprofile) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Authprofile) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Authprofile) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Authprofile) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### SetApplicationIdNil

`func (o *Authprofile) SetApplicationIdNil(b bool)`

 SetApplicationIdNil sets the value for ApplicationId to be an explicit nil

### UnsetApplicationId
`func (o *Authprofile) UnsetApplicationId()`

UnsetApplicationId ensures that no value is present for ApplicationId, not even an explicit nil
### GetApplicationName

`func (o *Authprofile) GetApplicationName() string`

GetApplicationName returns the ApplicationName field if non-nil, zero value otherwise.

### GetApplicationNameOk

`func (o *Authprofile) GetApplicationNameOk() (*string, bool)`

GetApplicationNameOk returns a tuple with the ApplicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationName

`func (o *Authprofile) SetApplicationName(v string)`

SetApplicationName sets ApplicationName field to given value.

### HasApplicationName

`func (o *Authprofile) HasApplicationName() bool`

HasApplicationName returns a boolean if a field has been set.

### SetApplicationNameNil

`func (o *Authprofile) SetApplicationNameNil(b bool)`

 SetApplicationNameNil sets the value for ApplicationName to be an explicit nil

### UnsetApplicationName
`func (o *Authprofile) UnsetApplicationName()`

UnsetApplicationName ensures that no value is present for ApplicationName, not even an explicit nil
### GetType

`func (o *Authprofile) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Authprofile) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Authprofile) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Authprofile) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStrongAuthLogin

`func (o *Authprofile) GetStrongAuthLogin() bool`

GetStrongAuthLogin returns the StrongAuthLogin field if non-nil, zero value otherwise.

### GetStrongAuthLoginOk

`func (o *Authprofile) GetStrongAuthLoginOk() (*bool, bool)`

GetStrongAuthLoginOk returns a tuple with the StrongAuthLogin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrongAuthLogin

`func (o *Authprofile) SetStrongAuthLogin(v bool)`

SetStrongAuthLogin sets StrongAuthLogin field to given value.

### HasStrongAuthLogin

`func (o *Authprofile) HasStrongAuthLogin() bool`

HasStrongAuthLogin returns a boolean if a field has been set.


