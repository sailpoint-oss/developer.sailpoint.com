---
id: network-configuration
title: NetworkConfiguration
pagination_label: NetworkConfiguration
sidebar_label: NetworkConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'NetworkConfiguration'] 
slug: /tools/sdk/go/v3/models/network-configuration
tags: ['SDK', 'Software Development Kit', 'NetworkConfiguration']
---

# NetworkConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Range** |  Pointer to **[]string** | The collection of ip ranges. | [optional] 
**Geolocation** |  Pointer to **[]string** | The collection of country codes. | [optional] 
**Whitelisted** |  Pointer to **bool** | Denotes whether the provided lists are whitelisted or blacklisted for geo location. | [optional] [default to false]

## Methods

### NewNetworkConfiguration

`func NewNetworkConfiguration() *NetworkConfiguration`

NewNetworkConfiguration instantiates a new NetworkConfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNetworkConfigurationWithDefaults

`func NewNetworkConfigurationWithDefaults() *NetworkConfiguration`

NewNetworkConfigurationWithDefaults instantiates a new NetworkConfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRange

`func (o *NetworkConfiguration) GetRange() []string`

GetRange returns the Range field if non-nil, zero value otherwise.

### GetRangeOk

`func (o *NetworkConfiguration) GetRangeOk() (*[]string, bool)`

GetRangeOk returns a tuple with the Range field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRange

`func (o *NetworkConfiguration) SetRange(v []string)`

SetRange sets Range field to given value.

### HasRange

`func (o *NetworkConfiguration) HasRange() bool`

HasRange returns a boolean if a field has been set.

### SetRangeNil

`func (o *NetworkConfiguration) SetRangeNil(b bool)`

 SetRangeNil sets the value for Range to be an explicit nil

### UnsetRange
`func (o *NetworkConfiguration) UnsetRange()`

UnsetRange ensures that no value is present for Range, not even an explicit nil
### GetGeolocation

`func (o *NetworkConfiguration) GetGeolocation() []string`

GetGeolocation returns the Geolocation field if non-nil, zero value otherwise.

### GetGeolocationOk

`func (o *NetworkConfiguration) GetGeolocationOk() (*[]string, bool)`

GetGeolocationOk returns a tuple with the Geolocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeolocation

`func (o *NetworkConfiguration) SetGeolocation(v []string)`

SetGeolocation sets Geolocation field to given value.

### HasGeolocation

`func (o *NetworkConfiguration) HasGeolocation() bool`

HasGeolocation returns a boolean if a field has been set.

### SetGeolocationNil

`func (o *NetworkConfiguration) SetGeolocationNil(b bool)`

 SetGeolocationNil sets the value for Geolocation to be an explicit nil

### UnsetGeolocation
`func (o *NetworkConfiguration) UnsetGeolocation()`

UnsetGeolocation ensures that no value is present for Geolocation, not even an explicit nil
### GetWhitelisted

`func (o *NetworkConfiguration) GetWhitelisted() bool`

GetWhitelisted returns the Whitelisted field if non-nil, zero value otherwise.

### GetWhitelistedOk

`func (o *NetworkConfiguration) GetWhitelistedOk() (*bool, bool)`

GetWhitelistedOk returns a tuple with the Whitelisted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhitelisted

`func (o *NetworkConfiguration) SetWhitelisted(v bool)`

SetWhitelisted sets Whitelisted field to given value.

### HasWhitelisted

`func (o *NetworkConfiguration) HasWhitelisted() bool`

HasWhitelisted returns a boolean if a field has been set.


[[Back to top]](#) 


