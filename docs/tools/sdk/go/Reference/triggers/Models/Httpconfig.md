---
id: v1-httpconfig
title: Httpconfig
pagination_label: Httpconfig
sidebar_label: Httpconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Httpconfig', 'V1Httpconfig'] 
slug: /tools/sdk/go/triggers/models/httpconfig
tags: ['SDK', 'Software Development Kit', 'Httpconfig', 'V1Httpconfig']
---

# Httpconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **string** | URL of the external/custom integration. | 
**HttpDispatchMode** | [**Httpdispatchmode**](httpdispatchmode) |  | 
**HttpAuthenticationType** | Pointer to [**Httpauthenticationtype**](httpauthenticationtype) |  | [optional] [default to HTTPAUTHENTICATIONTYPE_NO_AUTH]
**BasicAuthConfig** | Pointer to [**NullableBasicauthconfig**](basicauthconfig) |  | [optional] 
**BearerTokenAuthConfig** | Pointer to [**NullableBearertokenauthconfig**](bearertokenauthconfig) |  | [optional] 

## Methods

### NewHttpconfig

`func NewHttpconfig(url string, httpDispatchMode Httpdispatchmode, ) *Httpconfig`

NewHttpconfig instantiates a new Httpconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHttpconfigWithDefaults

`func NewHttpconfigWithDefaults() *Httpconfig`

NewHttpconfigWithDefaults instantiates a new Httpconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *Httpconfig) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *Httpconfig) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *Httpconfig) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetHttpDispatchMode

`func (o *Httpconfig) GetHttpDispatchMode() Httpdispatchmode`

GetHttpDispatchMode returns the HttpDispatchMode field if non-nil, zero value otherwise.

### GetHttpDispatchModeOk

`func (o *Httpconfig) GetHttpDispatchModeOk() (*Httpdispatchmode, bool)`

GetHttpDispatchModeOk returns a tuple with the HttpDispatchMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpDispatchMode

`func (o *Httpconfig) SetHttpDispatchMode(v Httpdispatchmode)`

SetHttpDispatchMode sets HttpDispatchMode field to given value.


### GetHttpAuthenticationType

`func (o *Httpconfig) GetHttpAuthenticationType() Httpauthenticationtype`

GetHttpAuthenticationType returns the HttpAuthenticationType field if non-nil, zero value otherwise.

### GetHttpAuthenticationTypeOk

`func (o *Httpconfig) GetHttpAuthenticationTypeOk() (*Httpauthenticationtype, bool)`

GetHttpAuthenticationTypeOk returns a tuple with the HttpAuthenticationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpAuthenticationType

`func (o *Httpconfig) SetHttpAuthenticationType(v Httpauthenticationtype)`

SetHttpAuthenticationType sets HttpAuthenticationType field to given value.

### HasHttpAuthenticationType

`func (o *Httpconfig) HasHttpAuthenticationType() bool`

HasHttpAuthenticationType returns a boolean if a field has been set.

### GetBasicAuthConfig

`func (o *Httpconfig) GetBasicAuthConfig() Basicauthconfig`

GetBasicAuthConfig returns the BasicAuthConfig field if non-nil, zero value otherwise.

### GetBasicAuthConfigOk

`func (o *Httpconfig) GetBasicAuthConfigOk() (*Basicauthconfig, bool)`

GetBasicAuthConfigOk returns a tuple with the BasicAuthConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasicAuthConfig

`func (o *Httpconfig) SetBasicAuthConfig(v Basicauthconfig)`

SetBasicAuthConfig sets BasicAuthConfig field to given value.

### HasBasicAuthConfig

`func (o *Httpconfig) HasBasicAuthConfig() bool`

HasBasicAuthConfig returns a boolean if a field has been set.

### SetBasicAuthConfigNil

`func (o *Httpconfig) SetBasicAuthConfigNil(b bool)`

 SetBasicAuthConfigNil sets the value for BasicAuthConfig to be an explicit nil

### UnsetBasicAuthConfig
`func (o *Httpconfig) UnsetBasicAuthConfig()`

UnsetBasicAuthConfig ensures that no value is present for BasicAuthConfig, not even an explicit nil
### GetBearerTokenAuthConfig

`func (o *Httpconfig) GetBearerTokenAuthConfig() Bearertokenauthconfig`

GetBearerTokenAuthConfig returns the BearerTokenAuthConfig field if non-nil, zero value otherwise.

### GetBearerTokenAuthConfigOk

`func (o *Httpconfig) GetBearerTokenAuthConfigOk() (*Bearertokenauthconfig, bool)`

GetBearerTokenAuthConfigOk returns a tuple with the BearerTokenAuthConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBearerTokenAuthConfig

`func (o *Httpconfig) SetBearerTokenAuthConfig(v Bearertokenauthconfig)`

SetBearerTokenAuthConfig sets BearerTokenAuthConfig field to given value.

### HasBearerTokenAuthConfig

`func (o *Httpconfig) HasBearerTokenAuthConfig() bool`

HasBearerTokenAuthConfig returns a boolean if a field has been set.

### SetBearerTokenAuthConfigNil

`func (o *Httpconfig) SetBearerTokenAuthConfigNil(b bool)`

 SetBearerTokenAuthConfigNil sets the value for BearerTokenAuthConfig to be an explicit nil

### UnsetBearerTokenAuthConfig
`func (o *Httpconfig) UnsetBearerTokenAuthConfig()`

UnsetBearerTokenAuthConfig ensures that no value is present for BearerTokenAuthConfig, not even an explicit nil

